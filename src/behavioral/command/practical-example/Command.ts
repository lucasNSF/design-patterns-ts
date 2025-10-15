import { Application } from './Application';
import { Editor } from './Editor';

export abstract class Command {
  private backup?: string;

  constructor(
    protected app: Application,
    protected editor: Editor,
  ) {}

  saveBackup() {
    this.backup = this.editor.getSelection();
  }

  undo() {
    if (this.backup) {
      this.editor.replaceSelection(this.backup);
    }
  }

  abstract execute(): void;
}
