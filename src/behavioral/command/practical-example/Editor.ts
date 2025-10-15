export class Editor {
  private field = '';

  getSelection() {
    return this.field;
  }

  deleteSelection() {
    this.field = '';
  }

  replaceSelection(text: string) {
    this.field = text;
  }
}
