import process from 'node:process';
import { runCli } from './cmd/cli.js';

const result = runCli(process.argv.slice(2));
console.log(result);