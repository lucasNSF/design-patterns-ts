import { IPersonBuilder } from './IPersonBuilder';

export class PersonDirector {
  constructor(private personBuilder: IPersonBuilder) {}

  changeBuilder(personBuilder: IPersonBuilder) {
    this.personBuilder = personBuilder;
  }

  buildDefaultPerson() {
    this.personBuilder
      .setName('Unknown User')
      .setCpf('000.000.000-00')
      .setRole('guest');
  }
}
