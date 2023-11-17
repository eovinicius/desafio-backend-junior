import { describe, expect, it } from 'vitest';
import { UpdateSmsUseCase } from './update-sms-use-case';
import { inMemorySmsRepository } from '../../../test/repositories/in-memory-sms-repository';
import { Sms } from '../../domain/entities/sms';

//! criando sms fake, sem status !!!
const repository = new inMemorySmsRepository();
const sut = new UpdateSmsUseCase(repository);

const smsTest: Sms = Sms.create(
  {
    message: 'message test',
    phone: '(11) 9772-5944',
  },
  1,
);

repository.items.push(smsTest);

it('should update sms status', async () => {
  const { sms } = await sut.execute({
    id: 1,
    status: 'ENVIADO',
  });

  expect(sms.status).toBe('ENVIADO');
  expect(sms).toBeInstanceOf(Sms);
  expect(sms.id).toBe(1);
});
