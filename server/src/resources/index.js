import express from 'express';
import { smsRouter } from './sms/sms.router';

export const restRouter = express.Router();

restRouter.use('/sms',smsRouter);