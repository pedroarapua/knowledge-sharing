Definição: O HPA ajusta automaticamente o número de réplicas de Pods com base em métricas como CPU ou memória.
HPA não irá funcionar senão definirmos os recursos de memória e cpu da nossa aplicação.

- Aplicar atualização do deployment com recursos

```bash
kubectl apply -f ./9-hpa/app-deployment.yaml
```

- Verificando a memória utilizada nos pods

```bash
kubectl top pod -n pedro-dias
```

- Instalar Metrics Server

```bash
kubectl apply -f ./9-hpa/metrics-server.yaml
kubectl get pods -n kube-system
```

- Criar HPA

```bash
kubectl apply -f ./9-hpa/app-hpa.yaml
kubectl get hpa -n pedro-dias
```

- Verificando o funcionamento do HPA

```bash
kubectl port-forward services/app-service 8080:80 -n pedro-dias
k6 run -u 3000 -d 90s ./9-hpa/script.js
```


