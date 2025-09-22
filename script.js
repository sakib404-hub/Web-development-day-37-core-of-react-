const myNumber = [52, 71];

const [lang, war] = myNumber;
console.log(lang);
console.log(war);

function getSomething() {
  return [24, 5];
}

//Destructuring while getting something
const [andolon, date] = getSomething();
console.log(andolon);
console.log(date);

function useState(initialvalue) {
  let state = initialvalue;
  function setState(updatedvalue) {
    state = updatedvalue;
  }
  return [state, setState];
}

/**
 * ? Component
 * ? useState
 * ? Event Handling
 * ?
 */

/**
 * ?Hooks
 * ?Use of Different types of Hooks
 * ? Streaming data from server to the client
 */

/**
 * ! Just write a simple fetch upto json coversion only
 * ! Wrap the data loading component under the suspence
 */
