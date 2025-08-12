import { IPersonBuilder } from './IPersonBuilder';
import { Person } from './Person';

export class PersonBuilder implements IPersonBuilder {
  private person: Person = new Person();

  reset(): IPersonBuilder {
    this.person = new Person();
    return this;
  }

  setAge(age: number): IPersonBuilder {
    this.person.setAge(age);
    return this;
  }

  setCpf(cpf: string): IPersonBuilder {
    this.person.setCpf(cpf);
    return this;
  }

  setName(name: string): IPersonBuilder {
    this.person.setName(name);
    return this;
  }

  setPhones(phones: string[]): IPersonBuilder {
    this.person.setPhones(...phones);
    return this;
  }

  setRole(role: string): IPersonBuilder {
    this.person.setRole(role);
    return this;
  }

  getPerson(): Person {
    return this.person;
  }
}
