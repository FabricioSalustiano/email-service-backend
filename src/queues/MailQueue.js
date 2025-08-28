import Bull from 'bull';
import EmailService from "../services/EmailService.js";
import { REDIS_HOST, REDIS_PORT } from "../config/index.js";

class MailQueue {
  constructor() {
    this.queue = new Bull("mailer", {
      redis: {
        host: REDIS_HOST,
        port: REDIS_PORT,
      },
    });

    this.queue.process(async (job) => {
      try {
        await EmailService.send(job.data);
      } catch (err) {
        console.error(`Falha ao enviar email: Job ${job.id}`, err);
        throw err;
      }
    });
  }

  async add(job) {
    await this.queue.add(job, {
      attempts: 3,
      backoff: 5000,
    });
  }
}

export default new MailQueue();
