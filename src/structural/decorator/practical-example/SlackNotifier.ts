import { BaseNotifier } from './BaseNotifier';
import { NotificationPayload } from './Notifier';

export class SlackNotifier extends BaseNotifier {
  override async notify(payload: NotificationPayload): Promise<void> {
    super.notify(payload);
    console.log('notifying on slack...');
  }
}
