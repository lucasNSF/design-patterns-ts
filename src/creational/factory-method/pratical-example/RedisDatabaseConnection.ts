import { IDatabaseConnection } from './IDatabaseConnection';

// Concrete Product
export class RedisDatabaseConnection implements IDatabaseConnection {
  async connect(): Promise<void> {
    console.log('connected to redis...');
  }

  async close(): Promise<void> {
    console.log('disconnecting redis...');
  }
}
