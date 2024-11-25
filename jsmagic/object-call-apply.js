
/**
  * Challenge: Implement the call method
  */

// Call method is used to call a function with a given this value and arguments provided individually.
// @param {object} thisArg - The value of this provided for the call to function.
// @param {any} arg1, arg2, arg3, ... - Arguments for the function.
// @returns {any} - The result of calling the function with the specified this value and arguments.
function displayPoliticianStatus(currentSituation) {
  console.log(`Politician name is ${this.name} and age is ${this.age} and his current situation : ${currentSituation}`);
}

const politician = {
  name: 'Narendra Modi',
  age: 70
}
displayPoliticianStatus.call(politician, 'Prime Minister of India');
//displayPoliticianStatus('Prime Minister of India');
