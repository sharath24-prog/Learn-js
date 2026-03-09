const sym = Symbol("id");

const ser = {
    name: "rohit",
    age: 20,
    0: 100,
    2: "Mohan",
    [sym]: "Hello ji"   // symbol key
}

console.log(ser[sym]);  


// sym is store has string "sym" taht why we wirite [sym].