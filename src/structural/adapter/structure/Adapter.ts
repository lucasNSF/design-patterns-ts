import { ClientInterface } from './ClientInterface';
import { Service } from './Service';

export class Adapter implements ClientInterface {
  private readonly adaptee = new Service();

  method(data: number): number {
    return this.adaptee.serviceMethod(data.toString()) * 2;
  }
}
