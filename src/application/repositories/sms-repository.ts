import { Sms } from './../../domain/entities/sms';

export interface SmsRepository {
  findById(id: number): Promise<Sms | null>;
  save(sms: Sms): Promise<void>;
}
