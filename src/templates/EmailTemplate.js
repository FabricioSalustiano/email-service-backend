export function createEmailHTML({ firstName, lastName }) {
  return `
  <!DOCTYPE html>
  <html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Email de Boas-Vindas</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f9f9f9;
        padding: 20px;
      }
      .container {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        max-width: 600px;
        margin: auto;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      h1 {
        color: #007bff;
      }
      p {
        margin: 10px 0;
      }
      .footer {
        margin-top: 20px;
        font-size: 12px;
        color: #777;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Olá ${firstName} ${lastName} 👋</h1>
      <p>Seja bem-vindo(a) ao nosso serviço! Estamos muito felizes em tê-lo(a) conosco.</p>
      <p>Aqui vão algumas dicas para começar:</p>
      <ul>
        <li>Explore seu painel de controle</li>
        <li>Atualize seu perfil</li>
        <li>Conecte-se com outros usuários</li>
      </ul>
      <p>Se tiver qualquer dúvida, responda a este e-mail – teremos prazer em ajudar!</p>
      <div class="footer">
        &copy; ${new Date().getFullYear()} Nosso Serviço. Todos os direitos reservados.
      </div>
    </div>
  </body>
  </html>
  `;
}
