import { BookType } from './BookType';

// Flyweight Factory
export class BookTypeFactory {
  private static readonly bookTypes = new Map<string, BookType>();

  static getBookType(genre: string, color: string): BookType {
    const key = `${genre}-${color}`;

    if (!BookTypeFactory.bookTypes.has(key)) {
      BookTypeFactory.bookTypes.set(key, new BookType(genre, color));
    }

    return BookTypeFactory.bookTypes.get(key)!;
  }
}
