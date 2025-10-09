import { BaseHandler } from './BaseHandler';

export class ConcreteHandler extends BaseHandler {
  canHandle(request: object): boolean {
    return Reflect.has(request, 'test');
  }

  override handle(request: object): void {
    if (this.canHandle(request)) {
      console.log('end!');
    }

    super.handle(request);
  }
}
