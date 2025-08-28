import nodemailer from "nodemailer";
import { SMTP_HOST, SMTP_PORT } from "../config/index.js";

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: false,
      tls: { rejectUnauthorized: false },
    });
  }

  async send({ from, to, subject, html, text }) {
    try {
      await this.transporter.sendMail({ from, to, subject, html, text });
    } catch (err) {
      console.error(`Falha ao enviar email para ${to}:`, err.message);
    }
  }
}

export default new EmailService();
