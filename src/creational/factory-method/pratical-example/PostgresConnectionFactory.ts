import { DatabaseFactory } from './DatabaseFactory';
import { IDatabaseConnection } from './IDatabaseConnection';
import { PostgresDatabaseConnection } from './PostgresDatabaseConnection';

export class PostgresConnectionFactory extends DatabaseFactory {
  createDatabaseConnection(): IDatabaseConnection {
    return new PostgresDatabaseConnection();
  }
}
