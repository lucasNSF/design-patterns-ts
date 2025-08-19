import { Device } from './Device';

export class Radio implements Device {
  private channel = 0;
  private volume = 100;

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
