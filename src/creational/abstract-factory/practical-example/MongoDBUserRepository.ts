import { UserRepository } from './UserRepository';
import { User } from './User';

// Concrete Product
export class MongoDBUserRepository implements UserRepository {
  async createUser(props: User): Promise<void> {
    console.log(`Creating mongodb user: ${JSON.stringify(props, null, 2)}...`);
  }

  async getUser(id: string): Promise<User> {
    console.log(`Retrieving mongodb user with id ${id}...`);

    return {} as User;
  }

  async deleteUser(id: string): Promise<User> {
    console.log(`Deleting mongodb user with id ${id}...`);

    return {} as User;
  }

  async updateUser(newUser: User): Promise<void> {
    console.log(`Updating mongodb user: ${JSON.stringify(newUser, null, 2)}`);
  }
}
