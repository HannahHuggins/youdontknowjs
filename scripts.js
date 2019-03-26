// Statements, variables, literal values and operators. 

// A group of words, numbers and operators that performs a specific task is a statement. 

a = b * 2;

/* a and b are variables, which are boxes you can store your stuff in. 
Variables hold values to be used by the program. 
The 2 is a literal value, it stands alone without being stored in a variable. 
= and * are operators. */

//------------------------------------------------------------------------------------------------//

// Expressions 

/* Statements are made up of one or more expressions. 
An expression is any reference to a variable, value, set of variable, and or values
combined with operators.*/

a = b * 2 

/* This has 4 expressions in it:
2 is a literal value expression
b is a variable expression
b * 2 is an arithmetic expression
a = b * 2 is an assignment expression */ 

b * 2 // this is an expression statement 

alert(a);
// this is a call expression statement 

//------------------------------------------------------------------------------------------------//

// Output

a = 21;

b = a * 2;

console.log(b);

/* Here we are giving the variable a the value of 21, and then giving the answer to a * 2
to variable b. The output is 42.
Console.log prints the output. */

//------------------------------------------------------------------------------------------------//

// Prompts and alerts 

age = prompt ("Please tell me your age:");

console.log(age);

// The age variable is whatever value you type into the console when the prompt asks 

b = 2 + 3;

alert(b)

// This will cause a popup to display the value stored in b. 

//------------------------------------------------------------------------------------------------//

// Operators 

* // multiplication
= // Assignment (first calculate the value on the right hand side (Source value) of == and then put it into the variable on the left(target variable))
+ // Addition
- // Subtraction
/ // division 
+= // Compound assignment
== // Equality == is loose equals, === is strict equals, != is loose not equals !== strict 
< // less than (comparison)
> //greater than (comparison)
< = // less than or equals to (comparison)
&& // and (logical)
|| // or (logical)

++ / -- // increment and decrement 
var a = 20;

a = a + 1;
a = a * 2;
// You should always declare the variable with var before using it. you only need to declare once for each scope 

/* Objects are values that hold other values at specific named locations called properties. 
*/
//------------------------------------------------------------------------------------------------//

// Values and types 

/* Literals = values inclued directly in the source code 
String literals = ("") or ('')
Number literals = 1 etc
Boolean literals = true or false
*/

"i am a string";
'i am also a string';

42;

true;
false;

//------------------------------------------------------------------------------------------------//

// Converting between types (coersion)

// Coercion = converting a number to a string. 
// implicit coercion = comparing two values that are not already of the same type 

var a = "42";

var b = Number(a);

console.log(a); // "42"
console.log(b); // 42

//Using number, a built in function, is an explicit coercion from any other type to the number type. 

"99" == 99; //js will convert the left hand side to it's number equivalent, which is true.

//------------------------------------------------------------------------------------------------//

// Code comments

// Single line comment

/* Multi
line
comment
*/

// Too many comments (one per line of code) is prob a sign of poorly written code 

//------------------------------------------------------------------------------------------------//

// Variables

