/* 
What does the following code return/print?

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?

-8
-1846

*/




/* 
Object Destructuring 2:
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // ?

-yearNeptuneDiscovered:1846
-yearMarsDiscovered:1659

*/



/* 
Object Destructuring 3:

What does the following code return/print.
function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
getUserData({firstName: "Melissa"}) // ?
getUserData({}) // ?

-Your name is Alejandro and you like purple
-Your name is Melissa and you like green
-your name is undefined and you like green



/* 
 



//4.
Array Destructuring 1:
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ?

-Maya
-Marisa
-Chi 


*/

//5.
/* 
Array Destructuring 2:
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // ?
console.log(whiskers); // ?
console.log(aFewOfMyFavoriteThings); // ?

-Raindrops on roses
-whiskers on kittens
-bright copper kettles, warm woolen mittens,brown paper packages tied up with strings


*/
//6.
/* 
Array Descructuring 3
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]



console.log(numbers) // ?
__

  [10,30,20]
__

*/

//7.
/* 
ES2015 Refactoring

var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;

/* Write an ES2015 Version */

const obj=
{numbers:
  {
  a:1,
  b:2
}
}

const {a,b} =obj.numbers;

//8.
/* 
ES5 Array Swap

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp; */

/* Write an ES2015 Version */

let arr =[1,2]


arr =[arr[0], arr[1]] = [arr[1], arr[0]]



// console.log(arr) // ?



/* ## **raceResults()**

9.Write a function called ***raceResults*** which accepts a single array argument. It should return an object with the keys ***first***, ***second***, ***third***, and ***rest***.

- first: the first element in the array
- second: the second element in the array
- third: the third element in the array
- rest: all other elements in the array

**Write a *one line* function to make this work using**

- An arrow function
- Destructuring
- `Enhanced` object assignment (same key/value shortcut) 

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
     first: "Tom",
     second: "Margaret",
     third: "Allison",
    rest: ["David", "Pierre"]
  // }
*/


// function raceResults(arr){
//   return {first,second,third,rest}
// }

// const results =['Tom', 'Margaret', 'Allison', 'David', 'Pierre']
// const [first,second,third,...rest]=results;

// function raceResults(arr){
//   return ({first,second,third,rest})
// }

//how do I return the results of the array



// const results =['Tom', 'Margaret', 'Allison', 'David', 'Pierre'] 
// const [first,second,third,...rest]=results;
// const resultObj = {first,second,third,rest}

// function raceResults([first,second,third,...rest]){
//   return ({first,second,third,rest})
// }

//not 100% sure on solution: discuss with mentor!!

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})



