import { Product } from './Product';

export abstract class Creator {
  someOperation() {
    const product = this.createProduct();
    product.doStuff();
  }

  abstract createProduct(): Product;
}
