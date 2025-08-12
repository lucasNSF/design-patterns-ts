export interface IPersonBuilder {
  reset(): IPersonBuilder;

  setName(name: string): IPersonBuilder;

  setAge(age: number): IPersonBuilder;

  setCpf(cpf: string): IPersonBuilder;

  setPhones(phones: string[]): IPersonBuilder;

  setRole(role: string): IPersonBuilder;
}
