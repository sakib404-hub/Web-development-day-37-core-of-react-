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
