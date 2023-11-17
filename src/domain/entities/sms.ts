import { Entity } from '../../core/entity';
import { Optional } from '../../core/types/optional';

interface SmsProps {
  phone: string;
  message: string;
  status: string | null;
}

export class Sms extends Entity<SmsProps> {
  public static create(props: Optional<SmsProps, 'status'>, id?: number) {
    const sms = new Sms(
      {
        ...props,
        status: props.status ?? null,
      },
      id,
    );

    return sms;
  }

  get phone() {
    return this.props.phone;
  }
  get message() {
    return this.props.message;
  }
  get status(): string | null {
    return this.props.status;
  }

  set status(status: string) {
    this.props.status = status;
  }
}
