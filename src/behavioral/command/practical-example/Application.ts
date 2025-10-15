import { Command } from './Command';
import { CommandHistory } from './CommandHistory';
import { CopyCommand } from './CopyCommand';
import { CutCommand } from './CutCommand';
import { Editor } from './Editor';
import { PasteCommand } from './PasteCommand';
import { UndoCommand } from './UndoCommand';

export class Application {
  editors: Editor[] = [];
  activeEditor: Editor | null = null;
  clipboard = '';
  history = new CommandHistory();

  createUI() {
    if (!this.activeEditor) return;

    const copy = new CopyCommand(this, this.activeEditor);
    const cut = new CutCommand(this, this.activeEditor);
    const paste = new PasteCommand(this, this.activeEditor);
    const undo = new UndoCommand(this, this.activeEditor);
  }

  executeCommand(c: Command) {
    c.execute();
    this.history.push(c);
  }

  undo() {
    const command = this.history.pop();

    if (command) {
      command.undo();
    }
  }
}
