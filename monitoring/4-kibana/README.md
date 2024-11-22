Fluentd irá coletar os logs e enviá-los para o Elasticsearch. Para isso, podemos usar o Fluentd DaemonSet para garantir que cada nó do cluster envie logs para o Elasticsearch.

- Create deployment

```bash
kubectl apply -f ./4-kibana/deployment.yaml
kubectl get pods -n monitoring
```

- Create service

```bash
kubectl apply -f ./4-kibana/service.yaml
kubectl get svc -n monitoring
```

- Check Kibana is Running

```bash
kubectl port-forward svc/kibana 5601:5601 -n monitoring
curl -v  http://localhost:5601
```
