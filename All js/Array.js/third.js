// const arr =[1020,30,400,4000];

// const arr_2 = [20,20202,22];

// arr.push(arr_2);

// console.log(arr);  

// const art3 =arr.concat(arr_2);
// console.log(art3);



const arr = [10,20,203];
const arr_2 = [2.0,"sjar"];

const arr4 = [2020,'SJSJ'];
// spread operator
const arr3 =[...arr,...arr_2,...arr4];
console.log(arr3);



let animals = ["ant", "bison", "camel", "duck", "elephant"];

// Copy the elements from index 2 up to (but not including) index 4
let middleAnimals = animals.slice(2, 4);
console.log(middleAnimals); // ["camel", "duck"]

// If you omit the end index, it copies to the end of the array.
let allButFirstTwo = animals.slice(2);
console.log(allButFirstTwo); // ["camel", "duck", "elephant"]

// A common way to make a full copy of an array:
let fullCopy = animals.slice();

console.log(animals); // The original is unchanged!
