import { Singleton } from './Singleton';

const x = Singleton.getInstance();
const y = Singleton.getInstance();

console.log(x === y); // true

x.doSomething();
