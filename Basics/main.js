// Create an inheritance relationship between a parent and child class. Invoke the parent constructor from the child class. Create main.js to call parent classs methods from a child class object ---- use of super and this code

// import the student class
import Student from "./student.js";


// create an object of the student class
const student = new Student("John Doe", 20, "A+");


// call the method to get the student details
console.log(student.getStudentDetails()); 

/* -------------------------------------------------------------------*/
// == and ===

console.log(5=="5"); // no type comparison

console.log(5 === "5"); // does type conversion

// null and undefine

let a =null;

console.log(a);

console.log(typeof a);

let b;
console.log(b);
console.log(typeof b)