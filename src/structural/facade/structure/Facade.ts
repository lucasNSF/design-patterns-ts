import { AdditionalFacade } from './AdditionalFacade';
import { Subsystem1 } from './Subsystem';

export class Facade {
  private readonly subsystem1 = new Subsystem1();
  private additionalFacade = new AdditionalFacade();

  subsystemOperation() {
    // using subsystem1
    // using additional facade
  }
}
