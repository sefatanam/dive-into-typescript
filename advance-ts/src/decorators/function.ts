// Decorator can be attached to any class declation, object/ function either statically or dynamically


// Function Decorator
function Outer() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Outer function runs!")
    }
}

// Function Decorator
function Inner() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Inner function runs!")
    }
}

class DecoratorComposition {
    @Inner()
    @Outer()
    run(): void {
        var result = 10;
        console.log('Class function runs!', result);
    }
}

const decorator_composition = new DecoratorComposition();
decorator_composition.run()