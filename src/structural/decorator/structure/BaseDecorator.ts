import { Component } from './Component';

export class BaseDecorator implements Component {
  constructor(protected wrapper: Component) {}

  execute(): void {
    this.wrapper.execute();
  }
}
