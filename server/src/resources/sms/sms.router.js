import express from 'express';
import smsController from './sms.controller';

export const  smsRouter = express.Router();

smsRouter.post('/', smsController.addSms );

smsRouter.get('/', smsController.getAllSms );

smsRouter.put('/:id', smsController.editSms );

smsRouter.delete('/:id', smsController.deleteSms );

smsRouter.get('/:id', smsController.getSmsById );
