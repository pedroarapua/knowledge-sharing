Definição: Jobs no Kubernetes são usados para executar tarefas únicas ou limitadas, garantindo que a tarefa seja executada com sucesso, até atingir um número específico de pods completados.

- Aplicar job

```bash
kubectl apply -f ./10-job/app-job.yaml
kubectl get jobs -n pedro-dias
```

- Validar se job rodou com sucesso

```bash
kubectl get pods -n pedro-dias
```