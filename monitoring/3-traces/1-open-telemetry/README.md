- Install Open Elemetry Collector

```bash
helm repo add open-telemetry https://open-telemetry.github.io/opentelemetry-helm-charts
helm repo update
helm install opentelemetry-collector open-telemetry/opentelemetry-collector -n monitoring -f ./1-open-telemetry/values-otel-collector.yml

```