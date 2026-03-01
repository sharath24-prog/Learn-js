// (condition) ? expression1 : expression2

/*
condition	Required.
The condition to be tested.
An expression that evaluates to true or false.
?	Required.

The operator separating the condition from the expressions.
expression1	Required.
The value to return if the condition is true.
:	Required.

The operator separating the expressions.
expression2	Required.
The value to return if the condition is false.

*/


let age = 18 ;
let text = (age < 18) ? "Minor" : "Adult";

console.log(text);