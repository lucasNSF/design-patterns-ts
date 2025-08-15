import { ClientInterface } from './ClientInterface';

export class Client implements ClientInterface {
  method(data: number): number {
    return data * 2;
  }
}
