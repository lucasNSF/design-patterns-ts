import { AuthenticationHandler } from './AuthenticationHandler';
import { ValidationHandler } from './ValidationHandler';

const h1 = new AuthenticationHandler();
const h2 = new ValidationHandler();

h1.setNext(h2);

h1.handle(
  {
    body: {
      login: 'test',
      password: '12345',
    },
  },
  { sendStatus: (status: number) => status },
);
