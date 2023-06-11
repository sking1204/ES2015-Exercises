/*
## **Quick Question #1**

What does the following code return?

new Set([1,1,2,2,3,4])

_____


{1,2,3,4}

_____


## **Quick Question #2**

What does the following code return?


[...new Set("referee")].join("")


_____


['ref']


_____


## **Quick Questions #3**

What does the Map ***m*** look like after running the following code?


let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

_____


Map(2) {Array(3) => true, Array(3) => false}
0:{Array(3) => true}
1:{Array(3) => false}



_____


## **hasDuplicate**

Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate


hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false
*/




function hasDuplicate(arr){
     let arrSet =new Set (arr)
        if(arr.length === [...arrSet].length){
            return false
        }
        else{
            return true
        }
    }
   



/*
## **vowelCount**

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }


Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string. 
*/

// function vowelCount(str){
//     let chars =str.split('') 
// }


// function vowelCount(str){

//start with an empty map
//loop over the characters in the string
//determine if letter is a vowel, if yes add to count
// and then add to it
















// function vowelCount(str){
//     // Use a Map to remember how many of each ltter you've
//     // seen. You could use an object as well, but ideally you'd
//     // create the object with out a prototype to avoid having
//     // any conflict with inherited properties from `Object.prototype`.
//     const counts = new Map(); // const counts = Object.create(null);

//     // The set of vowels
//     const vowels = new Set("aeiou");

//     // Loop through the letters
//     for (const letter of str) {
//         // If it's not a vowel...
//         if (!vowels.has(letter)){
//             // Count it
//             const currentCount = counts.get(letter) || 0;
//             counts.set(letter, currentCount + 1);
//             // Or using an object:
//             // const currentCount = counts[letter] || 0;
//             // counts[letter] = currentCount + 1;
//         }
//     });
//     return counts;
// }






