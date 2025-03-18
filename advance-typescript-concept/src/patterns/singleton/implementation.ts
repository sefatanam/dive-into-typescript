
class Logger {
  static initTime: Date;
  static instance: Logger;

  private constructor() { }

  static getInstance() {
    this.instance = this.instance || new Logger();
    return this.instance;
  }

  initializedTime() {
    return Logger.initTime;
  }

  static {
    this.instance = new Logger();
    this.initTime = new Date();
  }

}


const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

console.log('Is logger equal', logger1 === logger2);

console.log('Initialized time 1', logger1.initializedTime())
console.log('Initialized time 2', logger2.initializedTime())

setTimeout(() => {
  const logger3 = Logger.getInstance();
  console.log('Initialized time 3', logger3.initializedTime())
}, 1000)


setTimeout(() => {
  const logger4 = Logger.getInstance();
  console.log('Initialized time 3', logger4.initializedTime())
}, 2000)
