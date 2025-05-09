import { IDatabaseConnection } from './IDatabaseConnection';

// Creator
export abstract class DatabaseFactory {
  private connection: IDatabaseConnection | null = null;

  async connect() {
    if (!this.connection) {
      this.connection = this.createDatabaseConnection();
    }

    await this.connection.connect();
  }

  async disconnect() {
    if (this.connection) {
      await this.connection.close();
    }
  }

  abstract createDatabaseConnection(): IDatabaseConnection;
}
