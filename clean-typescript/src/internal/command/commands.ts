import { Command } from "@ct/interfaces/command.js";

export class GreetCommand implements Command {
  constructor(private name?: string) {}

  execute(): string {
    if (this.name) {
      return `Hello, ${this.name}!`;
    } else {
      return 'Please provide a name to greet.\nUsage: node dist/cmd/cli/main.js greet <name>';
    }
  }
}

export class HelpCommand implements Command {
  execute(): string {
    return [
      'Available commands:',
      '  greet <name>    - Greets the specified name.',
      '  <...args>       - Logs the provided arguments (default behavior).',
      '  --help          - Shows this help message.',
      '\nExample usage:',
      '  node dist/cmd/cli/main.js greet World',
      '  node dist/cmd/cli/main.js --help',
    ].join('\n');
  }
}

export class LogArgsCommand implements Command {
  constructor(private args: string[]) {}

  execute(): string {
    return `CLI Arguments: ${JSON.stringify(this.args)}`;
  }
}

export class NoArgsCommand implements Command {
  execute(): string {
    return 'No arguments provided. Try "--help" for options.';
  }
}
