import { BaseDecorator } from './BaseDecorator';

export class ConcreteDecorator extends BaseDecorator {
  override execute(): void {
    super.execute();
    this.extra();
  }

  extra() {
    console.log('doing additional thing...');
  }
}
