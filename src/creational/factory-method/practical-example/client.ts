import { DatabaseFactory } from './DatabaseFactory';
import { MongoDBConnectionFactory } from './MongoDBConnectionFactory';

// Choose between MongoDB, Postgres or Redis
const databaseConnectionFactory: DatabaseFactory =
  new MongoDBConnectionFactory();

databaseConnectionFactory.connect();

setTimeout(() => {
  databaseConnectionFactory.disconnect();
}, 1000);
