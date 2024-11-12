/**
 * Fixing "Property Does Not Exist On Type"
 * https://www.totaltypescript.com/tutorials/solving-typescript-errors/errors/property-does-not-exist-on-type-error
 */

const user: Record<string, number | string> = {
    name: "Matt",
};

user.age = 24;