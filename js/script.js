function showMsg() {
    alert('Message from external JS.')
}
/*
DATA TYPES
String: Text wrapped in quotes, e.g., "Hello"
Number: Integers or floats, e.g., 10, 3.14
Boolean: Represents true or false
Array: Collection of values, e.g., [1, 2, 3]
Object: Collection of key-value pairs, e.g., {name: "Alice", age: 25}
*/

let name = "Waliyat";   // String
let age = 18;           // Integer
let isStudent = false;  // Boolean
let hobbies = ["reading", "coding", "traveling"]; // Array
let person = {name: "Waliyat", age: 18};    // Object

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(person));

/*
Operators are used to perform operations on variables and values.
Arithmetic Operators: +, -, *, /, % (remainder)
Example: let total = 5 + 10;
Comparison Operators: ==, ===, !=, <, >, <=, >=
Example: let isEqual = (5 === 5); // true
Logical Operators: && (and), || (or), ! (not)
Example: (age >= 18 && isStudent)
*/

console.log(3 + 5);
let x = 10;
let y = 7;
console.log(x + y);
console.log(x > y);
console.log(x === 10 || y === 4);

/* Functions */
function greet(username) {
    return console.log('Good morning ' + username);
}
username = "Wakil";
greet(username);

function add(a, b) {
    return a + b
}

console.log(add(4, 7));