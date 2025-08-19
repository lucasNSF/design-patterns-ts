import { DeviceControl } from './DeviceControl';
import { TV } from './TV';
import { TVControl } from './TVControl';

const deviceControl: DeviceControl = new TVControl(new TV('LG TV'));

deviceControl.setChannel(10);
deviceControl.volumeUp(5);
