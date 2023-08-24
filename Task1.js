// Create a variable isStudent and assign it a boolean value indicating whether you are a
// student or not.

var isStudent=true;
console.log(isStudent);
// if(isStudent){
//     console.log("I am a student");
// }
// else{
//     console.log("i am not a student")
// }

// Declare a variable myArray and assign it an array containing three different data types (e.g.,
//     string, number, boolean).
var myArray=["heyy", 1, true];
console.log(myArray)


// Create a variable name and assign it a string value representing your full name. Use string
// manipulation techniques to extract your first name, last name, and any middle names if present.


var fullname = "Tehreem Zahra ABC";
var nameparts = fullname.split(" ");
var firstname = nameparts[0];
var lastname = nameparts[nameparts.length - 1];
var middlenames = nameparts.slice(1,nameparts.length-1).join(" ");
console.log("First Name:", firstname);
console.log("Middle Name:", middlenames);
console.log("Last Name:", lastname);

// 4. Create a variable myObject and assign it an object with properties representing your name,
// age, and student status.
let myObject = {
    name: 'Tehreem',age: 22,studentStatus: 'Graduated'
  };

// 5. Declare a variable x without assigning any value and log its value to the console. What do
// you see?

var x;
console.log(x) //undefined
// Declare a variable birthYear and assign it a number representing your birth year. Calculate
// your current age by considering leap years. Take into account if your birthday hasn't occurred
// yet in the current year.
const birthYear = 2001;
const currentYear = new Date().getFullYear();
console.log(currentYear)
const age = currentYear - birthYear - (new Date().getMonth() < 5);
console.log(age);

// 7. Declare a variable message and assign it a string value. Later, update the variable with a new
// string value.

let message="Hello";
 message="hey";
console.log(message);
// 8. Create a variable fullName by concatenating two separate variables containing your first and
// last names.
var firstName="Tehreem ";
var secondName="Zahra";
var fullName=firstName+secondName;
console.log(fullName)
// 9. Create an object representing a person with properties like name, age, and hobbies. Add a
// new hobby to the person's hobbies array and update their age.
// Output :
// Before: { name: 'John', age: 25, hobbies: [ 'Reading','Swimming', 'Painting' ]}
// Create the person object
let person = {
    name: 'John',age: 25,hobbies: ['Reading', 'Swimming']
  };
  console.log('Before:', person);
  person.hobbies.push('Painting');
  person.age = 26;
  console.log('After:', person);

// 10. Implement a function that takes a string as input and returns the string reversed.
// Output:
// Original String: Hello, world!
// Reversed String: !dlrow ,olleH
const reverseString = str => str.split('').reverse().join('');
const reversed = reverseString("Hello, world!");

// Create variables num1 and num2 and assign them floating-point number values. Implement
// a function that performs addition, subtraction, multiplication, and division with precision up to a
// specified decimal place.
var num1=12.90007875;
var num2=13.6677544434;

var func=()=>{
var addition=num1+num2
console.log(addition.toPrecision(3));
var subtraction=num1-num2;
console.log(subtraction.toPrecision(3));
var  multiplication=num1*num2;
console.log(multiplication.toPrecision(3));
var division=num1/num2;
console.log(division.toPrecision(3));


}
func();

// 12. Create variables title, FirstName, and LastName with various titles and names. Use
// template literals and string manipulation to create a variable fullName with different title options.
// Create variables
const title = "Title";
const firstName1 = "Tehreem";
const lastName = "Zahra";
const fullNameDefault = `${firstName1} ${lastName}`;
const fullNameWithTitle = `${title} ${fullNameDefault}`;
const fullNameWithLastNameFirst = `${lastName}, ${firstName}`;

// 13.Create a variable result and assign it the value of the square root of a negative number using
// the Math.sqrt() function. Check if result is NaN.
var result=Math.sqrt(-64);
console.log(result)
// 14. Declare a variable myFunction and assign it a function value. Use the typeof operator to
// check the type of the variable.
var myFunction;
