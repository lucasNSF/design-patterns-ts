import { Abstraction } from './Abstraction';
import { ConcreteImplementation } from './ConcreteImplementation';
import { RefinedAbstraction } from './RefinedAbstraction';

const abstraction = new Abstraction(new ConcreteImplementation());
const refinedAbstraction = new RefinedAbstraction(new ConcreteImplementation());

abstraction.feature1();
refinedAbstraction.feature3();
