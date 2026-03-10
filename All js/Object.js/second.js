// const person = {
//     name : "Sharath",
//     age:19,
//     emailId:"sharathnalla026@gmail.com",
//     amount:30000,
//     address:{
//         city:"khardha",   // object ke under object
//         state:"west Bengal"
    // }
// }

// const person2 = person;

// console.log(person.address.city);

// console.log(person2);

// console.log(person.address.city);




// shallow copy 

// const person2 ={...person};
// person2.name="sharu";
// person2.address.city="dowi";

// console.log(person);  //change in city dowi only change in person2 but it is not work in nested loop.


// Deep copy 

// const person2 = structuredClone(person);
// person2.address.city = "dowi";
// console.log(person2);
// console.log(person);

//jiska copy hona chaiye wahi hua uska nhi hua.