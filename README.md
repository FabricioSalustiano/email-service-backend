# Email Service Backend

Serviço de envio de e-mails desenvolvido em **Node.js** com **Express**, utilizando **Redis** como fila de mensagens para envio assincrono de emails.

---

## 🔹 Tecnologias utilizadas

- Node.js v22
- Express
- Bull (fila de tarefas)
- Redis
- Nodemailer
- Mailpit (SMTP de teste)
- Docker & Docker Compose

---

## 🔹 Estrutura do projeto
```
email-service-backend/
│
├─ src/
│ ├─ config/
│ │ └─ index.js
│ ├─ controllers/
│ │ └─ EmailController.js
│ ├─ queues/
│ │ └─ MailQueue.js
│ ├─ routes/
│ │ └─ EmailRoute.js
│ ├─ services  /
│ │ └─ EmailService.js
│ └─ templates/
│ └─ EmailTemplate.js
│
├─ .env
├─ package.json
├─ Dockerfile
└─ docker-compose.yml
```
## 🔹 Rodando o projeto com Docker
1. Construir e subir os containers:
```
  docker compose up --build
 ```
2. Acessar a aplicação
  - Backend: http://localhost:3000
  - Mailpit (painel de e-mails): http://localhost:8025
  - Redis: localhost:6379
3. Parar os containers
```
docker compose down
```
## 🔹 Endpoints
### Email
| Método | Endpoint      | Descrição                 |
| ------ | ------------- | ------------------------- |
| POST   | `/email/send` | Enviar email              |

## 🔹 Observações

Para ambiente de produção, recomenda-se utilizar um servidor SMTP real (Gmail, SendGrid, Brevo, etc.) e configurar corretamente SPF/DKIM/DMARC.
Este projeto é destinado principalmente para testes e aprendizado.
