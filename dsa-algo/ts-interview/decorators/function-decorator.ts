

export class IceCreamComponent {
    toppings: Array<string> = [];

    @confirmable(true)
    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

function confirmable(message: boolean) {
    return function (target: Object, propertyKey: string, propertyDescriptor: PropertyDescriptor) {
        const originalDescriptor = propertyDescriptor.value;

        propertyDescriptor.value = function (...args: any[]) {
            // const allow = confirm(message);

            if (message) {
                console.log('Execution')

                const result = originalDescriptor.apply(this, args);
                return result;
            } else {
                console.log('Not Execution')
                return null;
            }
        }
        return propertyDescriptor;
    }
}

const instance = new IceCreamComponent();

instance.addTopping('Onk')