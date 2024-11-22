Definição: O Pod é a unidade básica de execução no Kubernetes. Ele pode conter um ou mais containers que compartilham o mesmo espaço de rede e armazenamento.
Ex: nginx (firewall) -> app-web 

- Create Pods
```bash
kubectl apply -f ./4-pod/app-pod.yaml
kubectl get pods -n pedro-dias
```

- Test Http Request

```bash
kubectl port-forward pod/app-pod 8080:80 -n pedro-dias
curl -v http://localhost:8080/
```