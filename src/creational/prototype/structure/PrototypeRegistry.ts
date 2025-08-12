import { Prototype } from './Prototype';

export class PrototypeRegistry<T> {
  private readonly items = new Map<string, Prototype<T>>();

  addItem(id: string, proto: Prototype<T>) {
    this.items.set(id, proto);
  }

  getById(id: string): T | undefined {
    return this.items.get(id)?.clone();
  }
}
