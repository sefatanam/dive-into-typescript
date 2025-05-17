import process from 'node:process';
import { runCli } from './cmd/cli.js';

// Read arguments from the command line
const args = process.argv.slice(2);
const output = runCli(args);
console.log(output);