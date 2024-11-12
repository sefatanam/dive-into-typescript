
/**
 * Implementation
 */

import { IFly, WildFlying, LongFlying, CloudFlying } from "./fly.behaviour";
import { IWalk, WildWalking, HighWalking, NonWalking } from "./walk.behaviour";

class Duck {

    public name: string;

    constructor(
        name: string,
        private fy: IFly,
        private wk: IWalk
    ) {
        this.name = name;
    }


    fly() {
        return this.fy.fly()
    }

    walk() {
        return this.wk.walk()
    }

}


/**
 * Result
 */
let ducks = new Set<Duck>();

ducks.add(new Duck('Wild Duck', new WildFlying(), new WildWalking()))
ducks.add(new Duck('Mountain Duck', new LongFlying(), new HighWalking()))
ducks.add(new Duck('Cloud Duck', new CloudFlying(), new HighWalking()))
ducks.add(new Duck('Rubber Duck', new WildFlying(), new NonWalking()))


for (let duck of ducks) {
    console.log(`Name : ${duck.name} | Fly Status : ${duck.fly()} | Walk Status : ${duck.walk()}`)
}

