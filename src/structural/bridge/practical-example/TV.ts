import { Device } from './Device';

export class TV implements Device {
  private volume = 50;
  private channel = 0;

  constructor(private model: string) {}

  getModel() {
    return this.model;
  }

  getChannel(): number {
    return this.channel;
  }

  mute(): void {
    this.volume = 0;
  }

  setChannel(channel: number): void {
    this.channel = channel;
  }

  volumeDown(step: number): void {
    if (this.volume - step >= 0) {
      this.volume -= step;
    } else {
      this.volume = 0;
    }
  }

  volumeUp(step: number): void {
    if (this.volume + step <= 100) {
      this.volume += step;
    } else {
      this.volume = 100;
    }
  }
}
