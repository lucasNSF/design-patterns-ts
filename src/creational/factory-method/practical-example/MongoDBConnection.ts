import { IDatabaseConnection } from './IDatabaseConnection';

// Concrete Product
export class MongoDBConnection implements IDatabaseConnection {
  async connect(): Promise<void> {
    setTimeout(() => {
      console.log('connecting to mongodb database...');
    }, 500);
  }

  async close(): Promise<void> {
    setTimeout(() => {
      console.log('disconnecting mongodb...');
    }, 500);
  }
}
