- O que são?
Registros detalhados de eventos gerados durante a execução de um sistema.
Cada log pode representar uma ação ou evento específico, como:
  - Requisições de usuários
  - Erros e falhas
  - Mudanças de estado e interações com outros serviços

- Por que são importantes?
  - Diagnóstico e depuração: Permitem analisar o comportamento do sistema e identificar problemas.
  - Exemplo prático: Logs ajudam a rastrear o fluxo de dados e localizar a origem de falhas.



- Fluxo de Dados Completo: Como tudo se conecta
  1. App loga via stdout, e esse log será armazenado em um arquivo na vm do cluste kubernetes
  2. Filebeat coleta logs de arquivos em diferentes servidores ou máquinas e os envia para o Logstash (ou diretamente para o Elasticsearch, dependendo da arquitetura).
  3. Logstash recebe os logs e processa, filtra e enriquece os dados (por exemplo, parseando os logs, adicionando metadados, ou convertendo formatos), e então os envia para o Elasticsearch.
  4. Elasticsearch armazena e indexa os logs de forma eficiente, permitindo buscas rápidas sobre grandes volumes de dados.
  5. Kibana permite que você visualize e analise os logs armazenados no Elasticsearch, fornecendo dashboards interativos e ferramentas de busca e análise.