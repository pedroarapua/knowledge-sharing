import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://localhost:8080');  // A URL que você quer testar
  sleep(1);  // Pausa de 1 segundo entre as requisições
}