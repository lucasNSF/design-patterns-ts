import { Chair } from './Chair';
import { Computer } from './Computer';
import { Desk } from './Desk';
import { SetupCreator } from './SetupCreator';
import { OfficeChair } from './office-setup/OfficeChair';
import { OfficeComputer } from './office-setup/OfficeComputer';
import { OfficeDesk } from './office-setup/OfficeDesk';

export class OfficeSetupCreator implements SetupCreator {
  createDesk(): Desk {
    return new OfficeDesk();
  }

  createComputer(): Computer {
    return new OfficeComputer();
  }

  createChair(): Chair {
    return new OfficeChair();
  }
}
