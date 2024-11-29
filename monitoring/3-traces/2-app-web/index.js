const express = require('express');
const winston = require('winston');
const prometheus = require('prom-client');
const app = express();
const port = 3000;

// Configuração do logger (Winston) para logar apenas no console (stdout)
const logger = winston.createLogger({
  level: 'info', // Nível de log (info, error, debug, etc.)
  format: winston.format.combine(
    winston.format.colorize(), // Adiciona cores ao log para facilitar a leitura no console
    winston.format.json()      // Formato de saída JSON
  ),
  transports: [
    new winston.transports.Console() // Log apenas no console
  ]
});

// Prometheus Metrics Setup
const register = prometheus.register;

// Metric for request count (Trafficking)
const httpRequestDurationMicroseconds = new prometheus.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Histogram of HTTP request durations in seconds',
  buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.2, 0.5, 1, 2, 5] // buckets for latency
});

// Metric for HTTP request counter (Trafficking)
const httpRequestsTotal = new prometheus.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests made',
  labelNames: ['method', 'status_code'],
});

// Metric for error counter (Errors)
const httpErrorsTotal = new prometheus.Counter({
  name: 'http_errors_total',
  help: 'Total number of HTTP errors',
  labelNames: ['method', 'status_code'],
});

// Exposing Health Check
app.get('/health', async (req, res) => {
  res.send('OK');
});

// Exposing Prometheus metrics
app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (ex) {
    res.status(500).send(ex);
  }
});

// Middleware para logar requisições HTTP e coletar métricas
app.use((req, res, next) => {
  if(req.originalUrl === '/metrics' || req.originalUrl === '/health') {
    next();
    return;
  }
  const start = process.hrtime(); // Starts measuring request duration

  // Log da requisição
  const logData = {
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
  };

  logger.info('Request:', logData);

  // Interceptando a resposta para logar após a requisição
  const oldSend = res.send;
  res.send = function (body) {
    const responseLogData = {
      status: res.statusCode,
      responseBody: body,
    };

    // Log da resposta
    logger.info('Response:', responseLogData);

    // Update the Prometheus metrics (status codes)
    httpRequestsTotal.inc({ method: req.method, status_code: res.statusCode });

    // Track request latency
    const durationInMs = process.hrtime(start);
    const durationInSeconds = durationInMs[0] + durationInMs[1] / 1e9;
    httpRequestDurationMicroseconds.observe(durationInSeconds);

    // Track errors (if status code >= 500)
    if (res.statusCode >= 500) {
      httpErrorsTotal.inc({ method: req.method, status_code: res.statusCode });
    }

    // Continua com o envio da resposta
    oldSend.apply(res, arguments);
  };

  next();
});

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Rota de erro
app.get('/error', (req, res) => {
  throw new Error('Something went wrong!');
});

// Erro global
app.use((err, req, res, next) => {
  logger.error('Error:', { message: err.message, stack: err.stack });
  res.status(500).send('Internal Server Error');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
