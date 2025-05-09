import { IDatabaseConnection } from '../../factory-method/practical-example/IDatabaseConnection';
import { PostgresDatabaseConnection } from '../../factory-method/practical-example/PostgresDatabaseConnection';
import { AbstractDatabaseFactory } from './AbstractDatabaseFactory';
import { PostgresUserRepository } from './PostgresUserRepository';
import { UserRepository } from './UserRepository';

// Concrete Factory
export class PostgresDatabaseFactory implements AbstractDatabaseFactory {
  createConnection(): IDatabaseConnection {
    return new PostgresDatabaseConnection();
  }

  createUserRepository(): UserRepository {
    return new PostgresUserRepository();
  }
}
