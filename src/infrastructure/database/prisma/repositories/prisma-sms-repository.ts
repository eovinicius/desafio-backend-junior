import { Sms } from '../../../../domain/entities/sms';
import { PrismaSmsMapper } from '../mappers/prisma-task-mapper';
import { prisma } from '../prisma-client';
import { SmsRepository } from './../../../../application/repositories/sms-repository';

export class PrismaSmsRepository implements SmsRepository {
  async findById(id: number): Promise<Sms | null> {
    const data = await prisma.sms.findUnique({ where: { id } });

    if (!data) return null;

    return PrismaSmsMapper.ToDomain(data);
  }
  async save(sms: Sms): Promise<void> {
    const data = PrismaSmsMapper.ToPrisma(sms);

    await prisma.sms.update({ data, where: { id: data.id } });
  }
}
