import { Middleware } from './Middleware';

export class ValidationHandler implements Middleware {
  private next?: Middleware;

  setNext(m: Middleware): void {
    this.next = m;
  }

  async handle(): Promise<void> {
    console.log('validating something');
  }
}
