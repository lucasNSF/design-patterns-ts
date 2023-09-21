import { Computer } from '../Computer';

export class OfficeComputer implements Computer {
  ram: number = 16;
  cpu: string = 'Celeron dual-core';
  core: number = 1;
  gpu: string = 'RTX 3060 4Gb';

  programming(): void {
    console.log('Pra programar aqui o código tem que ser 100% otimizado...');
  }
}
