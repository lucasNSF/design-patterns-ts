import { User } from './User';
import { UserRepository } from './UserRepository';

// Concrete Product
export class RedisUserRepository implements UserRepository {
  async createUser(props: User): Promise<void> {
    console.log(`Creating redis user: ${JSON.stringify(props, null, 2)}...`);
  }

  async getUser(id: string): Promise<User> {
    console.log(`Retrieving redis user with id ${id}...`);

    return {} as User;
  }

  async deleteUser(id: string): Promise<User> {
    console.log(`Deleting redis user with id ${id}...`);

    return {} as User;
  }

  async updateUser(newUser: User): Promise<void> {
    console.log(`Updating redis user: ${JSON.stringify(newUser, null, 2)}`);
  }
}
