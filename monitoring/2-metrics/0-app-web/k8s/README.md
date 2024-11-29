- Create Deployment

```bash
kubectl apply -f ./k8s/app-web-deployment.yaml
kubectl apply -f ./k8s/app-web-service.yaml
kubectl get pods -n pedro-dias
```

- Test Appliation

```bash
kubectl port-forward svc/app-web-service 3001:80 -n pedro-dias
curl -v http://localhost:3001/
```

- Test App Metrics Endpoint

```bash
curl -v http://localhost:3001/metrics
```