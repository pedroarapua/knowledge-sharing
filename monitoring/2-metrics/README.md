- O que são?
São valores quantitativos que representam o desempenho e a saúde do sistema ao longo do tempo. Exemplos de métricas:
  - Tempo de resposta
  - Taxa de erros
  - Uso de recursos (CPU, memória)
  - Número de requisições


- Por que são importantes?
  - Monitoramento contínuo: Permitem ter uma visão geral da performance do sistema.
  - Detecção de anomalias: Ajudam a identificar rapidamente qualquer degradação ou falha no desempenho.


- Promtheus
  - Ferramento de monitoramento e coleta de métricas de sistemas
  - Desenvolvida inicialmente pela SoundCloud
  - Posteriormente se tornando um projeto open-source sob a Cloud Native Computing Foundation (CNCF)

- Tipos de Métricas no Prometheus

1. Counter (Contadores)
Um counter é uma métrica que sempre cresce ao longo do tempo.
Exemplo:
  - Contar o número total de requisições HTTP feitas a uma aplicação.

2. Gauge (Medidor)
Um gauge é uma métrica que pode aumentar ou diminuir, como a temperatura de um servidor ou o uso de memória. Ao contrário do counter, o valor de um gauge não é necessariamente cumulativo.
Exemplo:
  - Medir o uso de memória de um servidor.

3. Histogram (Histograma)
O histograma é uma métrica que coleta dados de distribuição, como as durações ou tamanhos de eventos. Ele permite dividir um intervalo de valores em "baldes" (buckets), permitindo calcular percentis e outras métricas derivadas.
Exemplo:
  - Medir a distribuição da latência de requisições HTTP.

4. Summary (Sumário)
O summary é semelhante ao histograma, mas com um foco maior em calcular percentis de forma eficiente. Ele pode ser usado para coletar quantidades de amostras e calcular valores de percentis, como a latência de requisições.
Exemplo:
  - Medir a latência das requisições HTTP e calcular percentis.


- Fluxo de Dados Completo: Como tudo se conecta
  1. Apliação/exporter expoe métricas via http no formato do prometheus
  2. Promtheus verifica nas configurações os endpoints e faz o request da métrica considerando um intervalo de tempo
  3. Prometheus armazena no seu banco time series interno
  4. Grafana consulta as métricas do prometheus com a query language PromQL