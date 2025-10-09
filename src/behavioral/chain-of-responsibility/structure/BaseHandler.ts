import { Handler } from './Handler';

export class BaseHandler implements Handler {
  private next?: Handler;

  setNext(handler: Handler): void {
    this.next = handler;
  }

  handle(request: object): void {
    this.next?.handle(request);
  }
}
