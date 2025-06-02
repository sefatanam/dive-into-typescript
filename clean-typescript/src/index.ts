import process from 'node:process';
import { runCli } from './cmd/cli.js';

const cliRs = runCli(process.argv.slice(2));
console.log(cliRs);

export type Color = 'red' | 'green' | 'blue' | 'yellow' | 'magenta' | 'cyan' | 'white' | 'black' | (string & {});
export type ColorCode = 31 | 32 | 33 | 34 | 35 | 36 | 37 | 90;
export type ColorCodeBg = 41 | 42 | 43 | 44 | 45 | 46 | 47 | 100;
export type ColorCodeBright = 91 | 92 | 93 | 94 | 95 | 96 | 97;


export function colorize(text: string, color: Color | ColorCode): string {
  return `\x1b[${color}m${text}\x1b[0m`;
}


const result = colorize('Hello World', 'black');



console.log(result);
