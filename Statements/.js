// conditional statement  -------------------------------------

let age = 16;

if (age < 18) {
  console.log("Not eligible for vote");
} else {
  console.log("Eligible for vote");
}

// odd or even

let num = 7;

if(num % 2 == 0)
{
  console.log(num , "is even")
}
else
{
  console.log(num, "is odd")
}

// if statement ------------------

let mode = "light";
let color;

if (mode === "dark") {
  color = "black";
}

if (mode === "light") {
  color = "white";
}

console.log(color);

// if-else statement -----------------------------

if (mode === "dark") {
  color = "black";
} else {
  color = "white";
}

console.log(color);

// else-if-statement ----------------------------------------

if(age<18)
{
  console.log("Junior")
}
else if (age>60)
{
  console.log("Senior")
}
else
{
  console.log("Middle")
}

// ternary operator ------------------------------------

let result = age>18 ? "adult":"not adult";
console.log(result);