import { Command } from './interfaces/command.js';
import { GreetCommand, HelpCommand, LogArgsCommand, NoArgsCommand } from './commands.js';

export class CommandFactory {
  static createCommand(args: string[]): Command {
    if (args.length === 0) {
      return new NoArgsCommand();
    }

    const command = args[0];

    if (command === 'greet') {
      return new GreetCommand(args[1]);
    } else if (command === '--help') {
      return new HelpCommand();
    } else {
      return new LogArgsCommand(args);
    }
  }
}
