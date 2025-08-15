export class Service {
  serviceMethod(data: string): number {
    return parseFloat(data) ?? 0;
  }
}
