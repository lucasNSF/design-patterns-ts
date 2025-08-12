import { PersonBuilder } from './PersonBuilder';
import { PersonDirector } from './PersonDirector';

const builder = new PersonBuilder();
const director = new PersonDirector(builder);

const person = builder.getPerson();

director.buildDefaultPerson();

person.setAge(18);

console.log(person);
