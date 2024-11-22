Definição: Secrets são usados para armazenar informações sensíveis, como senhas e tokens. Os dados são codificados em base64.

- Criar Secret

```bash
kubectl apply -f ./7-secret/app-secret.yaml
kubectl get secrets -n pedro-dias
```

- Alterar o deployment para incluir uma variável de ambiente com o valor que está no secret

```bash
kubectl apply -f ./7-secret/app-deployment.yaml
```

- Validando se a variável foi adiciona ao pod

```bash
kubectl get pods -n pedro-dias
kubectl exec -it {pod_name} -n pedro-dias -- printenv | grep PASSWORD
```

