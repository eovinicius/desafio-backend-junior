import { Sms } from '../../src/domain/entities/sms';
import { SmsRepository } from './../../src/application/repositories/sms-repository';

export class inMemorySmsRepository implements SmsRepository {
  public items: Sms[] = [];

  async findById(id: number): Promise<Sms | null> {
    const sms = this.items.find((item) => item.id === id);

    if (!sms) return null;

    return sms;
  }
  async save(sms: Sms): Promise<void> {
    const index = this.items.findIndex((item) => item.id === sms.id);

    if (index !== -1) {
      this.items[index] = sms;
    }
  }
}
