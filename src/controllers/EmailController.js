import MailQueue from '../queues/MailQueue.js';
import { createEmailHTML } from '../templates/EmailTemplate.js';

export class EmailController {
  async sendEmail(request, response) {
    const { email, firstName, lastName } = request.body;

    if (![email, firstName, lastName].every(Boolean)) {
      throw new Error("Os parâmetros email, firstName e lastName são obrigatórios");
    }

    try {
      await MailQueue.add({
        to: email,
        from: 'fabriciosalustiano1@gmail.com',
        subject: 'Assinatura Confirmada',
        html: createEmailHTML({ firstName, lastName })
      });

      return response.status(200).json({ message: 'Email adicionado à fila com sucesso!' });
    } catch (err) {
      console.error(`Falha ao adicionar email à fila para ${email}:`, err.message);
      return response.status(500).json({ error: 'Falha ao adicionar email à fila' });
    }
  }
}
