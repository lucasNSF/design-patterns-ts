import { Book } from './Book';

const bookshelf: Book[] = [];
const genres: string[] = ['action', 'adventure', 'romance', 'horror', 'sci-fi'];
const colors: string[] = ['red', 'green', 'blue', 'purple', 'yellow'];

for (let i = 0; i < 1e6; i++) {
  const randGenre = genres[Math.floor(Math.random() * genres.length)];
  const randColor = colors[Math.floor(Math.random() * colors.length)];

  const book = new Book(
    `book-${i + 1}`,
    `author-${i + 1}`,
    10,
    'lucasNSF',
    randGenre,
    randColor,
  );

  bookshelf.push(book);

  console.log(book.getBookProps());
}
