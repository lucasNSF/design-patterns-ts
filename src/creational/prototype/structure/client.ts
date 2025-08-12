import { SubclassPrototype } from './SubclassPrototype';

const original = new SubclassPrototype();
const copy = original.clone();
const copy2 = copy.clone();

console.log(original);
console.log(copy);
console.log(copy2);

console.log(copy.getZ() === copy2.getZ());
