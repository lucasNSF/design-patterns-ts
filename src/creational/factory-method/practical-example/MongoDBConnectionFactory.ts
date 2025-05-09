import { DatabaseFactory } from './DatabaseFactory';
import { IDatabaseConnection } from './IDatabaseConnection';
import { MongoDBConnection } from './MongoDBConnection';

// Concrete Creator
export class MongoDBConnectionFactory extends DatabaseFactory {
  createDatabaseConnection(): IDatabaseConnection {
    return new MongoDBConnection();
  }
}
