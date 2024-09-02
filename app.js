import express from 'express';
import logger from 'morgan';
import cors from 'cors';
// IMPORT CUSTOM ROUTERS HERE:
import { router as testRouter } from './routes/api/testRouter.js';

export const app = express();

// ------------------------------------------
// CONFIGURATIONS
app.use(logger(app.get('env') === 'development' ? 'dev' : 'short'));
app.use(cors());
app.use(express.json());

// ------------------------------------------
// SERVE STATIC FILES HERE:
app.use(express.static('public'));

// ------------------------------------------
// DEFINE CUSTOM ROUTES HERE:
app.use('/api/test', testRouter);

// ------------------------------------------
// DEFAULT 404 NOT FOUND ERROR
app.use((_, res) => {
  res.status(404).json({ message: 'Not found' });
});

// ------------------------------------------
// DEFAULT 500 INTERNAL SERVER ERROR
app.use((err, _, res) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});
