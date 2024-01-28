// Extract the `CreateCreature` function argument type using generics

interface Ghost {
    name: string;
    year: number;
}

interface Zombie {
    name: string;
    fever: string;
}

interface Man {
    type: 'Man' | 'Women';
    name: string;
}
interface UnoObject {
    status: string;
    data: Creature
}
type Creature = Ghost | Zombie | Man;

/**
 * We just export the create creature function but not all the interfaces
 * but before use the createCreature function we may want to make a `Create`
 * type but how without export from this file.
 * @param type  Ghost | Zombie | Man
 * @returns 
 */
export function createCreature(args: Creature): UnoObject {
    return {
        status: 'DONE',
        data: args
    }
}


// Solution

/* import { createCreature } from "./generics/8-get-param-type";

// your modification area : Start

type FirstArg<A = unknown> = (firstArg: A, ...args: any[]) => any;
type GetFirstArg<T extends FirstArg> = T extends FirstArg<infer R> ? R : never;

type CreatureArgs = GetFirstArg<typeof createCreature>;

type GhostCreature = Extract<CreatureArgs, { year: number }>;
type ManCreature = Extract<CreatureArgs, { type: string }>;
type ZombieCreature = Extract<CreatureArgs, { fever: string }>;

const creature: ZombieCreature = {
    name: 'Sefat',
    fever: '12'
}


// your modification : End 
createCreature(creature) // we expect it will throw error */