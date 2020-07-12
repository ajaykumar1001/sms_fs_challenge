import express from 'express';
import cors from 'cors';
import path from 'path';
import { connect } from './config/db';
import { devConfig } from './config/env';
import { restRouter } from './resources';

const app = express();
const PORT = devConfig.PORT;

connect();

// Providing CORS Policy
app.use(cors({ origin: '*' }));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/api', restRouter);
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}/`);
});
module.exports = app; 