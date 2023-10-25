export namespace Validation {
    export interface Validator {
        isAcceptable(property: string): boolean;
    }

    export class PhoneNumberValidator implements Validator{
        private readonly numberRegexp = /^[0-9]+$/;
        isAcceptable(property: string): boolean {
            return this.numberRegexp.test(property)
        }
    }

    export class ZipCodeValidator implements Validator{
        isAcceptable(property: string): boolean {
            return property.length > 5;
        }
    }
}