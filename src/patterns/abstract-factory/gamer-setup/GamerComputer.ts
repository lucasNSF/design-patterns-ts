import { Computer } from '../Computer';

export class GamerComputer implements Computer {
  ram: number = 32;
  cpu: string = 'i9 13700HX';
  core: number = 300;
  gpu: string = 'RTX 4090';

  programming(): void {
    console.log('Mané programar, vou é bater a gameplay 🎮!');
  }
}
