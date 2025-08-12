export class DatabaseManager {
  private static instance: DatabaseManager | null = null;
  private connection: string | null = null;

  private constructor() {}

  static getInstance(): DatabaseManager {
    if (!DatabaseManager.instance) {
      DatabaseManager.instance = new DatabaseManager();
    }

    return DatabaseManager.instance;
  }

  connect() {
    this.connection = 'db://localhost:54321/test/';
  }

  getConnection(): string | null {
    return this.connection;
  }
}
