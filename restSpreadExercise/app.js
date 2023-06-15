/* 
Given this function:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

Refactor it to use the rest operator & an arrow function:

 
1.Write an ES2015 Version

*/
// function filterOutOdds(...arguments){
//   return arguments.filter(function(num){
//     return num %2 ===0;
//   });
  
// }

const filterOutOdds =(...arguments) => arguments.filter(num=>num %2 ===0)








/*
2.findMin:
Write a function called findMin that accepts a variable number of arguments and returns
 the smallest argument. 
Make sure to do this using the rest and spread operator.

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

*/
//Version 1:

const findMin =(...arguments)=>Math.min(...arguments)





//Version 2:
// function findMin(...arguments){
//   Math.min(...args)
//   }

//Version 3:
// function findMin(...arguments){
//   return arguments.reduce(function(min,curValue){
//     if(curValue < min){
//       return curValue
//     }
//     else{
//       return min;
//     }
    
//   })    
// }  


/*
3.mergeObjects:
Write a function called mergeObjects that accepts two objects and returns a new object which
contains all the keys and values of the first object and second object.

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
*/

//Version 3:
const mergeObjects =(obj1,obj2,)=>({...obj1,...obj2})




//Version 2:

// const mergeObjects = (obj1,obj2) =>newobj={...obj1,...obj2} 

//Do I need to have parens around the spread operators inside of the newobj variable??



//Version1.
// function mergeObjects(obj1,obj2){
//   let newobj = {...obj1,...obj2}
//   return newobj;
// }




/*
4.doubeAndReturnArgs:
Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
The function should return a new array with the original array values and all of additional arguments
doubled.

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]
*/
//Version 3:
const doubleAndReturnArgs=(arr,...args)=>
  [...arr,...args.map(els=>els*2)]
 

//Version2:
  // function doubleAndReturnArgs(arr,...args){
  //   let newArrVals = [...arr,...args]
  //   const elementsMap =newArrVals.map(elements => elements*2)
  //   return elementsMap;
  //   }

//Version 1:

    // function doubleAndReturnArgs(arr,...args){
    //   let newArrVals = [...arr,...args]
    //   const elementsMap =newArrVals.map(function(elements){
    //     return elements *2
    //   })
    //   return elementsMap;
    //   }



////ASK MENTOR ABOUT THIS ONE///

/*
Slice and Dice:
For this section, write the following functions using rest, spread and refactor these functions 
to be arrow functions.
Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** 5. remove a random element in the items array
and return a new array without that item. */   

///1st make sure we can remove an item and add it to a new array
// function removeRandom(itemsArr){
//   // let removedItem =[...itemsArr]
//   // removedItem.slice(0,1)


  

// const items = ['chocolate','coffee','tea','fruit','bread']
// const filteredItems = items.filter(function(val){
//   return val !== 'tea';
// })

// console.log(items)
// console.log(filteredItems)

//now let's make the return value random instead of hard coding it


const items = ['chocolate','coffee','tea','fruit','bread']
let randval =Math.floor(Math.random()*items.length)

//How to I connect the result of randval to the array.


const filteredItems = items.filter(function(val){
  return val !== [randval];
})

console.log(items)
console.log(filteredItems)



 
  

  
  







// function removeRandom(items){
//   let idx =Math.floor(Math.random()*items.length)
//   return [...items.slice(0,idx)]
// }



/** 6.Return a new array with every item in array1 and array2. */
//Version2:

const extend =(array1,array2)=>[...array1,...array2]


//Version1:
// function extend(array1, array2) {
//   return [...array1,...array2] 
// }

/** 7. Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj,key,val){
  let newObj ={...obj}
  newObj[key]=val
  return newObj;

}
 
//Attempt1: tried this but syntax doesn't work
// function addKeyVal(obj, key, val) {
//   let newObj ={...obj}
//   return {...obj,newObj[key]=val} 
// }


/** 8. Return a new object with a key removed. */

function removeKey(obj, key) {
  let newObj={...obj}
  delete newObj[key]
  return newObj;

}

//Attempt 1: tried using .dot syntax but it didn't work:

// function removeKey(obj, key) {
//   let newObj={...obj}
//   delete newObj.key
//   return newObj;

// }


/** 9.Combine two objects and return a new object. */

function combine(obj1, obj2) {
  let newObj ={...obj1,...obj2}
  return newObj;

}


/** 10.Return a new object with a modified key and value. */

function update(obj, key, val) {
  let newObj={...obj}
  newObj[key]=val
  return newObj;


}











