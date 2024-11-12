/**
 * In the example above the posts router is dependent on the database connection.

BUT there is a problem here. Even though this solution works, it’s not flexible. The code is, as we say tightly coupled.

What if you have two different database connections? One for SQLite and one for MySQL? To change the connection object you need to change the code in the posts route.

That’s when dependency injection comes in.

class DatabaseConnection {
    connect():void{
        console.log('connecting to database...');

    }
}
class PostRouters{
    get(){
        const db = new DatabaseConnection();
        db.connect()
        console.log('Post retrive.');
    }
}

const postRouter = new PostRouters()
postRouter.get()
 */


interface IConnection {
    connect(): void
}

class DatabaseConnection implements IConnection {
    connect(): void {
        console.log('connecting to database...[default]');
    }
}

class SQLiteConnection implements IConnection {
    connect(): void {
        console.log('connecting to databse... [SQLite]');

    }
}
class PostRouters {
    private dbConnection: IConnection;
    constructor(db: IConnection) {
        this.dbConnection = db;
    }
    get() {
        this.dbConnection.connect()
        console.log('Post retrive.');
    }
}


const sqLiteConnection = new SQLiteConnection()
const defaultConnection = new DatabaseConnection()

const postRouter = new PostRouters(defaultConnection)
postRouter.get()
