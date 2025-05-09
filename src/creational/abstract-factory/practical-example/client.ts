import { AbstractDatabaseFactory } from './AbstractDatabaseFactory';
import { RedisDatabaseFactory } from './RedisDatabaseFactory';
import { User } from './User';

// Choose between MongoDatabase, PostgresDatabase or RedisDatabase
const databaseFactory: AbstractDatabaseFactory = new RedisDatabaseFactory();

const connection = databaseFactory.createConnection();

connection.connect();

const userRepository = databaseFactory.createUserRepository();

const payload: User = {
  id: '123',
  firstName: 'lucas',
  lastName: 'NSF',
  role: 'admin',
};

userRepository.createUser(payload);

userRepository.getUser(payload.id);

connection.close();
