import { IDatabaseConnection } from '../../factory-method/practical-example/IDatabaseConnection';
import { UserRepository } from './UserRepository';

// Abstract Factory
export interface AbstractDatabaseFactory {
  createConnection(): IDatabaseConnection;
  createUserRepository(): UserRepository;
}
