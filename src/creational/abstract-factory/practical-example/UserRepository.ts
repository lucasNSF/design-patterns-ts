import { User } from './User';

// Abstract Product
export interface UserRepository {
  createUser(props: User): Promise<void>;

  getUser(id: string): Promise<User>;

  updateUser(newUser: User): Promise<void>;

  deleteUser(id: string): Promise<User>;
}
