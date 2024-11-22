Definição: O Ingress é um recurso que define regras de roteamento externo para acessar os serviços dentro do cluster. Ele permite configurar URLs e balanceamento de carga de maneira centralizada.

- Install Nginx Ingress Controller

```bash
kubectl apply -f ./12-ingress/nginx-ingress-controller.yaml
kubectl get pods -n ingress-nginx
```

- Create Ingress
```bash
kubectl apply -f ./12-ingress/app-ingress.yaml
kubectl get ingress -n pedro-dias
```

- Test Http Request to Ingress

```bash
kubectl port-forward svc/ingress-nginx-controller 8080:80 -n ingress-nginx
curl -v -H "Host: me33u-nginx.com" http://localhost:8080
```


/portal/

/buider/portal

/buider/portal -> /portal/