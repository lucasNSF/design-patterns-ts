import { DatabaseManager } from './DatabaseManager';

const dbManager = DatabaseManager.getInstance();

dbManager.connect();

console.log(dbManager.getConnection());
