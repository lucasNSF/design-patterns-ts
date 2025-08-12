import { Builder } from './builder';

export class Director {
  constructor(private builder: Builder) {}

  changeBuilder(builder: Builder) {
    this.builder = builder;
  }

  buildProduct(
    props?: Partial<{ a: number | null; b: string; c: object | null }>,
  ) {
    return this.builder
      .buildStepA(props?.a ?? 10)
      .buildStepB(props?.b ?? 'default')
      .buildStepZ(props?.c ?? { enabled: true })
      .getProduct();
  }
}
