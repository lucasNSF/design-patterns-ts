import { Component } from './Component';

export class Composite implements Component {
  private children: Component[] = [];

  add(child: Component) {
    this.children.push(child);
  }

  remove(child: Component) {
    this.children = this.children.filter((c) => c !== child);
  }

  getChildren(): Component[] {
    return this.children;
  }

  execute(): void {
    this.children.forEach((c) => c.execute());
  }
}
