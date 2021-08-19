console.log('JS Ready');


$(document).ready(readyNow); //goes thru the whole page, loads, THEN CALL READY  NOW
// "when HTML is loaded and is .ready, call the function readyNow"
//readyNow can be any name

function readyNow(){
  $('h1').text('Tier 2, next week!'); //reference H1, set the text to:
  //put in any quick handlers, any setup, etc
}

function addToDom(){

}

//Sarah question:  (`Here is ${$(#userInput).value} a thing that the user inputted`)

//Tmplate literal
let firstName = 'Chris';
let lastName = 'Black';

let fullName = `${firstName} ${lastName}`


let firstNameOwnership = 'Mo\'s';

console.log(firstNameOwnership);

// $() == call jQuery
// also: jQuery()

//jQuery with template literal

let carName = $('#carName');
let carModel = $('#carModel');

let userInput = `${carName} ${carModel}`;

//template literals go on multiple lines
//jQuery can be inside template literals
//too much bling? Clean it up

//jQuery = "whoa, what is this? Who wronte this?"
//A: one or two individuals hwo make indivitually for free

//------------OBJECT REVIEW--------------//

//group of like things
const pets = ['charlie', 'billie']

const charlie = {
  name: 'Charlie',
  type: 'Yorkie',
  age: 11,
  foods: [
    'blue buffalo turkey and potato', 'salmon treats', 'pancakes'
  ], //end foods property array
  increaseAge: function() { //function inside an object...whoa
    this.age += 1;
  }
}
console.log(charlie.name);

console.log(charlie.foods);

console.log(charlie.age);
charlie.increaseAge();
console.log(charlie.age);

charlie.increaseAge();
console.log(charlie.age);


//avoid nexting too many objects and arrays

// charlie.foods[0].ingredients[0]; //running risk of "indext out of bounds" and otherwise fragile

//instead:

let charlieFood = charlie.foods;
console.log(' ');
console.log(charlieFood);

for(let food of charlieFood) {
  console.log(food);
}
