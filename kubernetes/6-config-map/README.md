Definição: O ConfigMap permite armazenar configurações de dados que podem ser usados por containers em Pods.

- Criar Config Map

```bash
kubectl apply -f ./6-config-map/app-config-map.yaml
kubectl get cm -n pedro-dias
```

- Alterar o deployment para incluir uma variável de ambiente com o valor que está no configmap

```bash
kubectl apply -f ./6-config-map/app-deployment.yaml
```

- Validando se a variável foi adiciona ao pod

```bash
kubectl get pods -n pedro-dias
kubectl exec -it {pod_name} -n pedro-dias -- printenv | grep MY_
```

