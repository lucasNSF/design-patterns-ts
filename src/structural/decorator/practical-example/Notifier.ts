export type NotificationPayload = {
  title: string;
  message: string;
};

export interface Notifier {
  notify(payload: NotificationPayload): Promise<void>;
}
