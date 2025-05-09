import { ConcreteCreatorA } from './ConcreteCreatorA';
import { Creator } from './Creator';

// Choose between ConcreteCreatorA, ConcreteCreatorB or creates a new ConcreteCreator
const creator: Creator = new ConcreteCreatorA();

creator.someOperation();
