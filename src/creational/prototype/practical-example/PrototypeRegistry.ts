import { Prototype } from './Prototype';

export class PrototypeRegistry<T> {
  private items = new Map<string, Prototype<T>>();

  addItem(id: string, prototype: Prototype<T>) {
    this.items.set(id, prototype);
  }

  getById(id: string): T | undefined {
    return this.items.get(id)?.clone();
  }
}
