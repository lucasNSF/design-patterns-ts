import { DeviceControl } from './DeviceControl';
import { TV } from './TV';

export class TVControl extends DeviceControl {
  constructor(protected device: TV) {
    super(device);
  }

  getModel(): string {
    return this.device.getModel();
  }
}
