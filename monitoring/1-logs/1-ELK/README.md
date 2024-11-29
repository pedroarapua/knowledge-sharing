- Create namespace

```bash
kubectl apply -f ./namespace.yaml
```

- Add elastic repo

```bash
helm repo add elastic https://helm.elastic.co

helm install elasticsearch elastic/elasticsearch -f values-elasticsearch.yml -n monitoring
helm install logstash elastic/logstash -f values-logstash.yml -n monitoring
helm install filebeat elastic/filebeat -f values-filebeat.yml -n monitoring
helm install kibana elastic/kibana -f values-kibana.yml -n monitoring
```

- Test Kibana (username: elastic, password: elastic)

```bash
kubectl port-forward service/kibana-kibana 5601:5601 -n monitoring
```