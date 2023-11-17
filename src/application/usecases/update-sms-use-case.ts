import { Sms } from '../../domain/entities/sms';
import { AppError } from '../error/app-error';
import { SmsRepository } from './../repositories/sms-repository';

interface IRequest {
  id: number;
  status: 'ENVIADO' | 'RECEBIDO' | 'ERRO DE ENVIO';
}

interface IResponse {
  sms: Sms;
}

export class UpdateSmsUseCase {
  constructor(private smsRepository: SmsRepository) {}

  async execute({ id, status }: IRequest): Promise<IResponse> {
    const sms = await this.smsRepository.findById(id);

    if (!sms) throw new AppError(400, `registro com o id ${id} nao encontrado`);

    sms.status = status;

    await this.smsRepository.save(sms);

    return {
      sms,
    };
  }
}
