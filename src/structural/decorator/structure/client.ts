import { Component } from './Component';
import { ConcreteComponent } from './ConcreteComponent';
import { ConcreteDecorator } from './ConcreteDecorator';

const concreteComponent: Component = new ConcreteComponent();
const decoratedConcreteComponent: Component = new ConcreteDecorator(
  concreteComponent,
);

concreteComponent.execute();
decoratedConcreteComponent.execute();
