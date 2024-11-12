/**
 * Fixing "X is Possibly Null Or Undefined"
 * https://www.totaltypescript.com/tutorials/solving-typescript-errors/errors/fixing-x-is-possibly-null-or-undefined
 */

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");

console.log(id?.toUpperCase()); // red squiggly line under id
