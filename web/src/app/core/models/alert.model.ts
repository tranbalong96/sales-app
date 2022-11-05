import { AlertType } from '../enums/alert.enum';

export class Alert {
  id!: string;
  title!: string;
  type!: AlertType;
  message!: string;
  autoClose!: boolean;
  keepAfterRouteChange!: boolean | undefined;
  fade!: boolean;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}
