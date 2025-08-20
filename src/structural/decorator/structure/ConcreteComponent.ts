import { Component } from './Component';

export class ConcreteComponent implements Component {
  execute(): void {
    console.log('do something...');
  }
}
