import { BookType } from './BookType';
import { BookTypeFactory } from './BookTypeFactory';

// Context
export class Book {
  private bookType: BookType;

  constructor(
    private name: string,
    private author: string,
    private pages: number,
    private publisher: string,
    genre: string,
    color: string,
  ) {
    this.bookType = BookTypeFactory.getBookType(genre, color);
  }

  getBookProps() {
    return {
      name: this.name,
      author: this.author,
      pages: this.pages,
      publisher: this.publisher,
      genre: this.bookType.genre,
      color: this.bookType.color,
    };
  }
}
