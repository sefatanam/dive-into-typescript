/**
 * Fly Composition
 */

export interface IFly {
    fly()
}

export class WildFlying implements IFly {
    fly() {
        return "Wild Flying..."
    }
}

export class LongFlying implements IFly {
    fly() {
        return "Long Flying..."
    }
}

export class CloudFlying implements IFly {
    fly() {
        return "Cloud Flying..."
    }
}