import { Router } from 'express';
import { EmailController } from '../controllers/EmailController.js';

const router = Router();
const emailController = new EmailController();

router.post('/send', (req, res) => emailController.sendEmail(req, res));

export default router;
