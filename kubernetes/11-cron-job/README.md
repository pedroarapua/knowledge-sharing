Definição: CronJobs permitem agendar tarefas recorrentes (como cron jobs no Linux) no Kubernetes, para executar Pods em horários ou intervalos específicos.

- Aplicar job

```bash
kubectl apply -f ./11-cron-job/app-cron-job.yaml
kubectl get cronjobs -n pedro-dias
```

- Validar se cronjob rodou com sucesso

```bash
kubectl get pods -n pedro-dias
```