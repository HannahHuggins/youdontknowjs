// typeof - this can examine a value 

var a = 55;

typeof a; 

//number
//------------------------------------------------------------------------------------------------//

// Objects 

var obj = {
    a: "hello world",
    b: 42,
    c: true
}

obj.a; //hello world
obj.b; // 42
obj.c; // true
//dot notation

obj["a"]; // hello world
obj["b"]; 42
obj["c"]; true 
//bracket notation

/* properties can be accessed with either dot notation or bracket notation. 
Dot notation is generally easier to read, whereas bracket notation is useful if you have a property name 
that has special characters in it 
*/

var obj = {
    a: "hello world",
    b: 42
};

var b = "a";

obj[b]; // "hello world"
obj["b"]; // 42

//------------------------------------------------------------------------------------------------//

// Arrays 

var arr = [
    "hello world",
    42,
    true
];

arr[0]; // "hello world"
arr[1]; // 42 
arr [2]; // true 
arr.length; // 3
// length property 

typeof arr; // object 

//languages start counting at 0, 0 is the index of the first element in the array. 
//------------------------------------------------------------------------------------------------//
