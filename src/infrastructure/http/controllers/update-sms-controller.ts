import { Request, Response } from 'express';
import { makeUpdateSms } from '../../../application/factories/make-update-sms';

export class UpdateSmsController {
  async handle(request: Request, response: Response) {
    const { id, status } = request.body;

    const updateSmsUseCase = makeUpdateSms();

    await updateSmsUseCase.execute({
      id,
      status,
    });

    return response.status(204).send();
  }
}
