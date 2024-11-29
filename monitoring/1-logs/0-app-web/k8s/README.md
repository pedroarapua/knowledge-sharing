- Create Deployment

```bash
kubectl apply -f ./k8s/namespace.yaml
kubectl apply -f ./k8s/app-web-deployment.yaml
kubectl apply -f ./k8s/app-web-service.yaml
kubectl get pods -n pedro-dias
```

- Test Appliation

```bash
kubectl port-forward svc/app-web-service 3001:80 -n pedro-dias
curl -v http://localhost:3001/
```

- Check Logs via Kubectl

```bash
kubectl logs -f -l app=app-web -n pedro-dias
```

- Check Logs na VM

```bash
docker container exec -it {container_id} bash
tail -f --lines 10 /var/log/containers/app-web-deployment-*
```

