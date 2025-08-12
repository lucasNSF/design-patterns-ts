import { Boat } from './Boat';
import { Car } from './Car';
import { Dirigible } from './Dirigible';
import { ElectricCar } from './ElectricCar';
import { PrototypeRegistry } from './PrototypeRegistry';

const dirigibleRegistry = new PrototypeRegistry<Dirigible>();

dirigibleRegistry.addItem('car', new Car());
dirigibleRegistry.addItem('electric-car', new ElectricCar());
dirigibleRegistry.addItem('boat', new Boat('blue'));

const car = dirigibleRegistry.getById('car') as Dirigible;

car.drive();

console.log(car);
