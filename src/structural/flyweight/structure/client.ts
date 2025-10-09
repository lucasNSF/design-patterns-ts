import { Context } from './Context';

const entries: Context[] = [];
const colors = ['red', 'green', 'blue', 'purple'];

for (let i = 0; i < 1e6; i++) {
  entries.push(
    new Context(
      { id: 1, name: `context-${i + 1}` },
      { color: colors[Math.floor(Math.random() * colors.length)] },
    ),
  );

  entries[i].operation();
}
