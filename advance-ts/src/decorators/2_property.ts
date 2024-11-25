
// Level 1
function propertyInformation(target: Object, propertyKey: string) {
  let value: string = target[propertyKey];
  const get = function() {
    if (this['authorize'] === 'Admin')
      return `Here is your pin : ${value}`.toUpperCase();
    return 'You are not authorize to access it.'.toUpperCase()
  }

  const set = function(newValue: string) {
    return value = newValue;
  }

  Object.defineProperty(target, propertyKey, { set, get });
}

// Level 2
/* function propertyGuard(authorizeType:string){
    return function(target: Object, propertyKey:string){
        let value: string = this[propertyKey];

        const get =function(){
            if(authorizeType==='Admin'){
                return value;
            }
            return 'You are not authorize to access it.'
        }

        const set = function (newValue: string) {
            console.log(`new ${propertyKey} value : ${newValue}`);
            return value = newValue;
        }
        Object.defineProperty(target, propertyKey,{get,set})
    }
} */



class Bank {
  name = '';
  @propertyInformation
  pin = 'ybde';
  authorize = '';
  constructor(name: string, pin: string, authorize?: string) {
    this.name = name;
    this.pin = pin;
    this.authorize = authorize;
  }
}

const bank = new Bank("IFIC Bank", '12344', 'Adminx');
bank.pin = '2423'
console.log(bank.pin);
