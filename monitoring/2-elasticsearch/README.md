Definição: O Kubernetes usa namespaces para dividir recursos de um cluster em grupos lógicos, permitindo a organização e o isolamento de objetos.

- Create deployment

```bash
kubectl apply -f ./2-elasticsearch/deployment.yaml
kubectl get pods -n monitoring
```

- Create service

```bash
kubectl apply -f ./2-elasticsearch/service.yaml
kubectl get svc -n monitoring
```

- Check Elasticsearch is Running

```bash
kubectl port-forward svc/elasticsearch 8080:80 -n monitoring
curl -v  http://localhost:9200
```
