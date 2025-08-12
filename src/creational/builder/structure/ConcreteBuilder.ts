import { Builder } from './builder';
import { Product } from './Product';

export class ConcreteBuilder implements Builder {
  private product: Product = new Product();

  buildStepA(value: number | null): Builder {
    this.product.a = value;
    return this;
  }

  buildStepB(value: string): Builder {
    this.product.b = value;
    return this;
  }

  buildStepZ(value: object | null): Builder {
    this.product.z = value;
    return this;
  }

  reset(): Builder {
    this.product = new Product();
    return this;
  }

  getProduct(): Product {
    return this.product;
  }
}
