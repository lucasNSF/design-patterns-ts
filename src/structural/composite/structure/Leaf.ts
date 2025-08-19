import { Component } from './Component';

export class Leaf implements Component {
  execute(): void {
    console.log('do something...');
  }
}
