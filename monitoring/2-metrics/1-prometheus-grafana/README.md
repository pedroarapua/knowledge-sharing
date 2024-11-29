- Install Prometheus e Grafana

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

helm install prometheus prometheus-community/kube-prometheus-stack -n monitoring
kubectl get pods -n monitoring
```

- Install Service Monitor

```bash
kubectl apply -f ./1-prometheus-grafana/service-monitor.yaml
```

- Validando Métricas no Prometheus

```bash
kubectl port-forward service/prometheus-kube-prometheus-prometheus 9090:9090 -n monitoring
```

- Test Grafana (username: admin, password: prom-operator)

```bash
kubectl port-forward service/prometheus-grafana 3000:80 -n monitoring
```

- Import Grafana Dashboard

- Criar um Alerta