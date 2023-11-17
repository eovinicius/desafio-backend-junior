import { Router } from 'express';
import { UpdateSmsController } from '../controllers/update-sms-controller';

const updateSmsController = new UpdateSmsController();

export const routes = Router();

routes.put('/sms', updateSmsController.handle);
