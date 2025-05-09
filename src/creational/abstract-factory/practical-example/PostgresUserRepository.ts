import { User } from './User';
import { UserRepository } from './UserRepository';

// Concrete Product
export class PostgresUserRepository implements UserRepository {
  async createUser(props: User): Promise<void> {
    console.log(`Creating postgres user: ${JSON.stringify(props, null, 2)}...`);
  }

  async getUser(id: string): Promise<User> {
    console.log(`Retrieving postgres user with id ${id}...`);

    return {} as User;
  }

  async deleteUser(id: string): Promise<User> {
    console.log(`Deleting postgres user with id ${id}...`);

    return {} as User;
  }

  async updateUser(newUser: User): Promise<void> {
    console.log(`Updating postgres user: ${JSON.stringify(newUser, null, 2)}`);
  }
}
