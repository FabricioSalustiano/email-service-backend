import express from 'express';
import { SERVER_PORT } from './config/index.js';
import emailRouter from './routes/EmailRoute.js';

const server = express();
server.use(express.json());

server.use('/email', emailRouter);

server.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});
