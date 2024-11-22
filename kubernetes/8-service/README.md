Definição: O Service abstrai o acesso aos Pods, permitindo que aplicações se comuniquem entre si ou com o mundo exterior.
Tipos:
  - ClusterIP é o tipo mais utilizado para comunicação interna.
  - NodePort é útil em ambientes de desenvolvimento e para expor serviços em clusters pequenos.
  - LoadBalancer é a solução ideal para ambientes de produção em nuvem.
  - ExternalName permite integrar facilmente com serviços externos.

- Aplicar service

```bash
kubectl apply -f ./8-service/app-service.yaml
kubectl get services -n pedro-dias
```

- Test Http Request

```bash
kubectl port-forward services/app-service 8080:80 -n pedro-dias
curl -v http://localhost:8080/
```

- Test Http Request inside cluster using internal dns

```bash
kubectl get pods -n pedro-dias
kubectl exec -it {pod_name} -n pedro-dias -- bash
curl -v http://app-service.pedro-dias.svc.cluster.local/
```
