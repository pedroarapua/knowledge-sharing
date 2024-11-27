const express = require('express');
const winston = require('winston');
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

// Middleware para logar requisições HTTP
app.use((req, res, next) => {
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