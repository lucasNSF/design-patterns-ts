import { Chair } from './Chair';
import { Computer } from './Computer';
import { Desk } from './Desk';
import { SetupCreator } from './SetupCreator';
import { GamerChair } from './gamer-setup/GamerChair';
import { GamerComputer } from './gamer-setup/GamerComputer';
import { GamerDesk } from './gamer-setup/GamerDesk';

export class GamerSetupCreator implements SetupCreator {
  createDesk(): Desk {
    return new GamerDesk();
  }

  createComputer(): Computer {
    return new GamerComputer();
  }

  createChair(): Chair {
    return new GamerChair();
  }
}
