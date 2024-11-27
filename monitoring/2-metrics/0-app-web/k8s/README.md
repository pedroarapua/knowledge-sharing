- Create Deployment
```bash
kubectl apply -f ./k8s/app-web-deployment.yaml
kubectl get deployments -n pedro-dias
kubectl apply -f ./k8s/app-web-service.yaml
kubectl get pods -n pedro-dias
```