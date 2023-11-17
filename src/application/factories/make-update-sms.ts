import { UpdateSmsUseCase } from '../usecases/update-sms-use-case';
import { PrismaSmsRepository } from './../../infrastructure/database/prisma/repositories/prisma-sms-repository';

export function makeUpdateSms() {
  const prismaSmsRepository = new PrismaSmsRepository();
  const updateSmsUseCase = new UpdateSmsUseCase(prismaSmsRepository);

  return updateSmsUseCase;
}
