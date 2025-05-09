import { IDatabaseConnection } from '../../factory-method/practical-example/IDatabaseConnection';
import { RedisDatabaseConnection } from '../../factory-method/practical-example/RedisDatabaseConnection';
import { AbstractDatabaseFactory } from './AbstractDatabaseFactory';
import { RedisUserRepository } from './RedisUserRepository';
import { UserRepository } from './UserRepository';

// Concrete Factory
export class RedisDatabaseFactory implements AbstractDatabaseFactory {
  createConnection(): IDatabaseConnection {
    return new RedisDatabaseConnection();
  }

  createUserRepository(): UserRepository {
    return new RedisUserRepository();
  }
}
