import { IDatabaseConnection } from './IDatabaseConnection';

// Concrete Product
export class PostgresDatabaseConnection implements IDatabaseConnection {
  async connect(): Promise<void> {
    setTimeout(() => {
      console.log('connecting to postgres database...');
    }, 500);
  }

  async close(): Promise<void> {
    setTimeout(() => {
      console.log('disconnecting postgres...');
    }, 500);
  }
}
