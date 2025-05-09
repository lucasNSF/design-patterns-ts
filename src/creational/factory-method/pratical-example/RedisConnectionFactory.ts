import { DatabaseFactory } from './DatabaseFactory';
import { IDatabaseConnection } from './IDatabaseConnection';
import { RedisDatabaseConnection } from './RedisDatabaseConnection';

export class RedisConnectionFactory extends DatabaseFactory {
  createDatabaseConnection(): IDatabaseConnection {
    return new RedisDatabaseConnection();
  }
}
