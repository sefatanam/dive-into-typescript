import { CommandFactory } from "@ct/internal/command/factory.js";

export function runCli(args: string[]): string {
  const command = CommandFactory.createCommand(args);
  return command.execute();
}
