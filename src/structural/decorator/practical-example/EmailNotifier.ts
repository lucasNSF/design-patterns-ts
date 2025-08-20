import { NotificationPayload, Notifier } from './Notifier';

export class EmailNotifier implements Notifier {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async notify(payload: NotificationPayload): Promise<void> {
    console.log('notifying via email...');
  }
}
