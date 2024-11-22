Fluentd irá coletar os logs e enviá-los para o Elasticsearch. Para isso, podemos usar o Fluentd DaemonSet para garantir que cada nó do cluster envie logs para o Elasticsearch.

- Create daemonset

```bash
kubectl apply -f ./3-fluentd/daemonset.yaml
kubectl get pods -n monitoring
```
