import { IDatabaseConnection } from '../../factory-method/practical-example/IDatabaseConnection';
import { MongoDBConnection } from '../../factory-method/practical-example/MongoDBConnection';
import { AbstractDatabaseFactory } from './AbstractDatabaseFactory';
import { MongoDBUserRepository } from './MongoDBUserRepository';
import { UserRepository } from './UserRepository';

// Concrete Factory
export class MongoDatabaseFactory implements AbstractDatabaseFactory {
  createConnection(): IDatabaseConnection {
    return new MongoDBConnection();
  }

  createUserRepository(): UserRepository {
    return new MongoDBUserRepository();
  }
}
