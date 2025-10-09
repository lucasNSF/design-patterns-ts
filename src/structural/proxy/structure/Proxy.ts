import { Service } from './Service';
import { ServiceInterface } from './ServiceInterface';

export class Proxy implements ServiceInterface {
  private canAccess = true;

  constructor(private readonly service: Service) {}

  checkAccess(): boolean {
    this.canAccess = !this.canAccess;
    return this.canAccess;
  }

  operation(): void {
    if (this.canAccess) {
      this.service.operation();
    }
  }
}
