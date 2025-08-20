import { NotificationPayload, Notifier } from './Notifier';

export class BaseNotifier implements Notifier {
  constructor(protected notifier: Notifier) {}

  async notify(payload: NotificationPayload): Promise<void> {
    this.notifier.notify(payload);
  }
}
