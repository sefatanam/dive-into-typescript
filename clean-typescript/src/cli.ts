export function runCli(args: string[]): string {
  if (args.length > 0 && args[0] === 'greet') {
    if (args.length > 1) {
      const name = args[1];
      return `Hello, ${name}!`;
    } else {
      return 'Please provide a name to greet.\nUsage: node dist/index.js greet <name>';
      // Or if using a run script like 'npm start':
      // return 'Usage: npm start greet <name>';
    }
  } else if (args.length > 0 && args[0] === '--help') {
    return [
      'Available commands:',
      '  greet <name>    - Greets the specified name.',
      '  <...args>       - Logs the provided arguments (default behavior).',
      '  --help          - Shows this help message.',
      '\nExample usage:',
      '  node dist/index.js greet World',
      '  node dist/index.js --help',
    ].join('\n');
  } else {
    if (args.length === 0) {
      return 'No arguments provided. Try "--help" for options.';
    }
    return `CLI Arguments: ${JSON.stringify(args)}`;
  }
}
