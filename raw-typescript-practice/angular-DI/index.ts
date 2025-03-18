
/**
 * Code Example by : Decode Frontend channel form youtube
 */

class UserService {
  sayHi() {
    return "Hi..";
  }
}

class Component {
  constructor(public userService: UserService) { }
}

/* DI Continer*/

class Injector {
  private _container = new Map();

  constructor(private services: any[]) {
    this.services.forEach((service) =>
      this._container.set(service, new service())
    );
  }

  get(service: any) {
    const instance = this._container.get(service);
    if (!instance) throw new Error("Service instance is not found");
    return instance;
  }
}

const injector = new Injector([UserService]);
const component = new Component(injector.get(UserService));

let result = component.userService.sayHi();

console.log(result);
