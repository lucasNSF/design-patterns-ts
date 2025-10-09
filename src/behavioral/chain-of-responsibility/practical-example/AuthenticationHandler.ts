/* eslint-disable @typescript-eslint/no-explicit-any */
import { Middleware } from './Middleware';

export class AuthenticationHandler implements Middleware {
  private next?: Middleware;

  setNext(m: Middleware): void {
    this.next = m;
  }

  async handle(req: any, res: any): Promise<void> {
    const login = req.body.login;
    const password = req.body.password;

    const validCredentials = login === 'test' && password === '1234';

    if (!validCredentials) {
      console.log('Unauthorized!');
      res.sendStatus(401);
      return;
    }

    this.next?.handle(req, res);
  }
}
