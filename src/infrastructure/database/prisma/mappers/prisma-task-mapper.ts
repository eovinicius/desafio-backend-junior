import { Sms as PrismaSms, Prisma } from '@prisma/client';
import { Sms } from '../../../../domain/entities/sms';

export class PrismaSmsMapper {
  public static ToDomain(sms: PrismaSms): Sms {
    return Sms.create(
      {
        message: sms.message,
        phone: sms.phone,
        status: sms.status,
      },
      sms.id,
    );
  }

  public static ToPrisma(sms: Sms): Prisma.SmsUncheckedCreateInput {
    return {
      id: sms.id,
      message: sms.message,
      phone: sms.phone,
      status: sms.status,
    };
  }
}
