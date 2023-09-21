import { GamerSetupCreator } from './GamerSetupCreator';
import { OfficeSetupCreator } from './OfficeSetupCreator';
import { SetupCreator } from './SetupCreator';

((factory: SetupCreator) => {
  const chair = factory.createChair();
  const desk = factory.createDesk();
  const computer = factory.createComputer();

  chair.sit();

  console.log(
    `\nDesk Info:\nColor = ${desk.color}\nHas Drawers = ${desk.hasDrawers}\n`
  );
  desk.lookup();

  console.log(
    `\nComputer Info:\nCPU = ${computer.cpu}\nCore = ${computer.core}\nRAM = ${computer.ram}\nGPU = ${computer.gpu}\n`
  );
  computer.programming();
})(new OfficeSetupCreator());
