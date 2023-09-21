import { Chair } from './Chair';
import { Computer } from './Computer';
import { Desk } from './Desk';

export interface SetupCreator {
  createDesk(): Desk;
  createComputer(): Computer;
  createChair(): Chair;
}
