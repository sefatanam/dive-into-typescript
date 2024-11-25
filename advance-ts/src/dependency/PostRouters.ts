import { IConnection } from "./practice-1";

export class PostRouters {
    private dbConnection: IConnection;
    constructor(db: IConnection) {
        this.dbConnection = db;
    }
    get() {
        this.dbConnection.connect();
        console.log('Post retrive.');
    }
}

