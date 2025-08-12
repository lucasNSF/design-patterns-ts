import { Product } from './Product';

export interface Builder {
  reset(): Builder;

  buildStepA(value: number | null): Builder;

  buildStepB(value: string): Builder;

  buildStepZ(value: object | null): Builder;

  getProduct(): Product;
}
