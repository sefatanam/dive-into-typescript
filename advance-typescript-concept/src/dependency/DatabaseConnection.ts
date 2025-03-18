import { IConnection } from "./practice-1";

export class DatabaseConnection implements IConnection {
    connect(): void {
        console.log('connecting to database...[default]');
    }
}

