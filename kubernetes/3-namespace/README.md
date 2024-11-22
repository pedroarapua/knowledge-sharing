Definição: O Kubernetes usa namespaces para dividir recursos de um cluster em grupos lógicos, permitindo a organização e o isolamento de objetos.

```bash
kubectl apply -f ./3-namespace/namespace.yaml
kubectl get ns
kubectl get all -n pedro-dias
```

