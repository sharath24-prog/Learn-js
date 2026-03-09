// object 

// key : Value

// const  key = {
    // name : "Rohit",
    // emailId:"nallasharath@2425gmi",
    // age : 20 ,
    // amount : 3000,
    // "hoe address":"dwarka",
    // gretting:function(){
        // console.log(`strike is coming ${key.name}`);
        // console.log(`trike is coing ${this.name}`);

        // why use this instead of key .
        // return 20;
    // }

// }

// const user2 = {
    // name : "mohan",
    // account : 100e03
// }


// user2.gretting = key.gretting ;

// console.log(user2);

// const va =key.gretting();

// console.log(va);


// console.log(key);  

// console.log(typeof key);  //object

// console.log(key["hoe address"]);

// acess object element

// console.log(key.age);

// crud operation : Create read Update delete 

key.Aadhar = 93293223;

// console.log(key);
// 

// update 
// key.age  = 30 ;

// console.log(key);

// Delete

// delete key.age ;

// console.log(key);


// console.log(key["name"]);
// console.log(age);
// console.log(key["age"]);

// behind the seen 

/*  name -> "name"
    age -> "age"
    amount -> "amount"

    */

    /* why we use like "name" beacuse
       
       home address -> show Error X
       "home address" -> don't Show Error .

       "home address" : "dwarka";
       */

    //    const user2  = key ;
    //    user2.age =90;
    //    console.log(user2); 
    //    console.log(key);

    // console.log(Object.keys(key));
    // console.log(Object.values(key));

    // for(let keys in key){
    //     console.log(keys,key[keys]);
    // }


    // const name = key.name;
    // const age = key.age;

    // console.log(name,age);

// object ko destructing krna 

//    const {name:userName,age:userAge} = user;

//    const arr = [10,20,30,40,50];

//    const[first ,second] = arr ;

//    console.log(userName,userAge);

// const temp = Object.keys(key);

// for(let keys of temp){

//     console.log(keys);
// }

    // const temp = Object.keys(key);
    // console.log(temp)
    // for(let keys of temp){
    //     console.log(keys);
    // }


    // for(let values of Object.values(key)){
    //     console.log(values);
    // }

    // for(let values of Object.entries(key)){
    //     console.log(values);
    // }


    // for(let [keys,values] of Object.entries(key)){
    //     console.log(keys ,values);
    // }

    


    


    // console.log(name,age,amount)


// object 

// key : Value

// const  key = {
    // name : "Rohit",
    // emailId:"nallasharath@2425gmi",
    // age : 20 ,
    // amount : 3000,
    // "hoe address":"dwarka",
    // gretting:function(){
        // console.log(`strike is coming ${key.name}`);
        // console.log(`trike is coing ${this.name}`);

        // why use this instead of key .
        // return 20;
    // }

// }

// const user2 = {
    // name : "mohan",
    // account : 100e03
// }


// user2.gretting = key.gretting ;

// console.log(user2);

// const va =key.gretting();

// console.log(va);


// console.log(key);  

// console.log(typeof key);  //object

// console.log(key["hoe address"]);

// acess object element

// console.log(key.age);

// crud operation : Create read Update delete 

key.Aadhar = 93293223;

// console.log(key);
// 

// update 
// key.age  = 30 ;

// console.log(key);

// Delete

// delete key.age ;

// console.log(key);


// console.log(key["name"]);
// console.log(age);
// console.log(key["age"]);

// behind the seen 

/*  name -> "name"
    age -> "age"
    amount -> "amount"

    */

    /* why we use like "name" beacuse
       
       home address -> show Error X
       "home address" -> don't Show Error .

       "home address" : "dwarka";
       */

    //    const user2  = key ;
    //    user2.age =90;
    //    console.log(user2); 
    //    console.log(key);

    // console.log(Object.keys(key));
    // console.log(Object.values(key));

    // for(let keys in key){
    //     console.log(keys,key[keys]);
    // }


    // const name = key.name;
    // const age = key.age;

    // console.log(name,age);

// object ko destructing krna 

//    const {name:userName,age:userAge} = user;

//    const arr = [10,20,30,40,50];

//    const[first ,second] = arr ;

//    console.log(userName,userAge);

// const temp = Object.keys(key);

// for(let keys of temp){

//     console.log(keys);
// }

    // const temp = Object.keys(key);
    // console.log(temp)
    // for(let keys of temp){
    //     console.log(keys);
    // }


    // for(let values of Object.values(key)){
    //     console.log(values);
    // }

    // for(let values of Object.entries(key)){
    //     console.log(values);
    // }


    // for(let [keys,values] of Object.entries(key)){
    //     console.log(keys ,values);
    // }

    


    


    // console.log(name,age,amount)


const person = {

    name : "Sharath",
    age:19,
    emailId:"sharathnalla026@gmail.com",
    amount:30000,
    address:{
    city:"khardha",    //object ke under object.
    state:"west Bengal"
    }
}

// const person2 =person;


console.log(person.address.city);



