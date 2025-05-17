import { describe, it, expect } from 'vitest';
import { runCli } from './cli.js';

describe('runCli', () => {
  it('should greet the user', () => {
    expect(runCli(['greet', 'World'])).toBe('Hello, World!');
  });

  it('should ask for a name if not provided for greet', () => {
    expect(runCli(['greet'])).toBe(
      'Please provide a name to greet.\nUsage: node dist/index.js greet <name>'
    );
  });

  it('should show help message', () => {
    const helpMessage = [
      'Available commands:',
      '  greet <name>    - Greets the specified name.',
      '  <...args>       - Logs the provided arguments (default behavior).',
      '  --help          - Shows this help message.',
      '\nExample usage:',
      '  node dist/index.js greet World',
      '  node dist/index.js --help',
    ].join('\n');
    expect(runCli(['--help'])).toBe(helpMessage);
  });

  it('should log arguments if no command is provided', () => {
    expect(runCli(['arg1', 'arg2'])).toBe('CLI Arguments: ["arg1","arg2"]');
  });

  it('should inform if no arguments are provided', () => {
    expect(runCli([])).toBe('No arguments provided. Try "--help" for options.');
  });
});
