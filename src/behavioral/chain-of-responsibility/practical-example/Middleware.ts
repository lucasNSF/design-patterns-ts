/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Middleware {
  setNext(m: Middleware): void;

  handle(req: any, res: any): Promise<void>;
}
