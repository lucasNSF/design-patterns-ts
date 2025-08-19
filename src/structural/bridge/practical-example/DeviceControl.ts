import { Device } from './Device';

export class DeviceControl {
  constructor(protected device: Device) {}

  getChannel(): number {
    return this.device.getChannel();
  }

  setChannel(channel: number) {
    this.device.setChannel(channel);
  }

  mute() {
    this.device.mute();
  }

  volumeUp(step: number) {
    this.device.volumeUp(step);
  }

  volumeDown(step: number) {
    this.device.volumeDown(step);
  }
}
