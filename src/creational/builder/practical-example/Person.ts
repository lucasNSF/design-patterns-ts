export class Person {
  private name: string | undefined;
  private age: number | undefined;
  private cpf: string | undefined;
  private phones: string[] = [];
  private role = 'member';

  getName(): string | undefined {
    return this.name;
  }

  setName(name: string) {
    if (name.length > 3 && name.length < 500) {
      this.name = name;
    }
  }

  getAge(): number | undefined {
    return this.age;
  }

  setAge(age: number) {
    if (age > 0) {
      this.age = age;
    }
  }

  getCpf(): string | undefined {
    return this.cpf;
  }

  setCpf(cpf: string) {
    if (cpf.length === 14) {
      this.cpf = cpf;
    }
  }

  getPhones(): ReadonlyArray<string> {
    return this.phones;
  }

  setPhones(...phones: string[]) {
    this.phones.push(...phones);
  }

  getRole(): string {
    return this.role;
  }

  setRole(role: string) {
    if (['member', 'admin', 'guest'].includes(role)) {
      this.role = role;
    }
  }
}
