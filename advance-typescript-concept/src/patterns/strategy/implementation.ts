
/**
 * Implementation
 */

import { IFly, WildFlying, LongFlying, CloudFlying } from "./fly.behaviour";
import { IWalk, WildWalking, HighWalking, NonWalking } from "./walk.behaviour";

class DuckBase {

  public type: string;

  constructor(
    type: string,
    private fy: IFly,
    private wk: IWalk
  ) {
    this.type = type;
  }


  fly() {
    return this.fy.fly()
  }

  walk() {
    return this.wk.walk()
  }

}

export function LogStrategy() {
  /**
   * Result
   */
  let fuck_ducks = new Set<DuckBase>();

  fuck_ducks.add(new DuckBase('Wild Duck', new WildFlying(), new WildWalking()))
  fuck_ducks.add(new DuckBase('Mountain Duck', new LongFlying(), new HighWalking()))
  fuck_ducks.add(new DuckBase('Cloud Duck', new CloudFlying(), new HighWalking()))
  fuck_ducks.add(new DuckBase('Duck', new WildFlying(), new NonWalking()))

  for (let duck of fuck_ducks) {
    console.log(`Name : ${duck.type} | Fly Status : ${duck.fly()} | Walk Status : ${duck.walk()}`)
  }
}


// How to use in index.ts 01:26:45

// console.clear()
// console.log(':::Here is the result of strategy pattern => ')
// import { LogStrategy} from './patterns/strategy/implementation'
// LogStrategy()
