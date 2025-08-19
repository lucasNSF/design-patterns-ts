import { Composite } from './Composite';
import { Leaf } from './Leaf';

const allComponents = new Composite();
const otherComposite = new Composite();

otherComposite.add(new Leaf());
otherComposite.add(new Composite());

allComponents.add(new Leaf());
allComponents.add(new Leaf());
allComponents.add(otherComposite);

allComponents.execute();
