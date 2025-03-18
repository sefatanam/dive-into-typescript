

/**
 * Walk Composition
 */
export interface IWalk {
  walk()
}

export class WildWalking implements IWalk {
  walk() {
    return "Wild Walking..."
  }
}

export class HighWalking implements IWalk {
  walk() {
    return "High Walking..."
  }
}

export class NonWalking implements IWalk {
  walk() {
    return "Non Walking..."
  }
}


