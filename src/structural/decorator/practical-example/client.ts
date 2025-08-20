import { EmailNotifier } from './EmailNotifier';
import { FacebookNotifier } from './FacebookNotifier';
import { Notifier } from './Notifier';
import { SlackNotifier } from './SlackNotifier';
import { SmsNotifier } from './SmsNotifier';

const otherNotificationProviders = {
  facebook: true,
  slack: true,
  sms: true,
};

let notificationProvider: Notifier = new EmailNotifier();

if (otherNotificationProviders.facebook) {
  notificationProvider = new FacebookNotifier(notificationProvider);
}

if (otherNotificationProviders.slack) {
  notificationProvider = new SlackNotifier(notificationProvider);
}

if (otherNotificationProviders.sms) {
  notificationProvider = new SmsNotifier(notificationProvider);
}

notificationProvider
  .notify({
    title: 'Important subject',
    message: 'This is a important message!',
  })
  .then(console.log)
  .catch(console.error);
