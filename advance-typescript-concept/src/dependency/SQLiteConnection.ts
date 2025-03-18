import { IConnection } from "./practice-1";

export class SQLiteConnection implements IConnection {
    connect(): void {
        console.log('connecting to databse... [SQLite]');

    }
}

