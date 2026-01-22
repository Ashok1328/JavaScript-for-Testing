// function --------------------------------------------------------
function myFunction() {
  console.log("I am a Basketball Player");
}
myFunction();

function message(msg, n) {
  // ---------- variable inside function definiton is parameter
  console.log(msg, n);
}
message("Weekend goes by playing basketball", 650); // ----- varaible inside function call is argument

// withiut using return keyword
function sum(a, b) {
  console.log("Added value: ", a + b);
}
sum(6, 8);

// using return keyword
function multiply(x, y) {
  m = x * y;
  return m;
}
let val = multiply(3, 4);
console.log("Multiplied value: ", val);

// Arrow Function -------------------------------------------------------------
// without using return keyword
const divide = (x,y)=>
{
  console.log("Divided Value: ",x/y)
}
divide(10,2);

// using return keyword
const subtract = (a,b)=>
{
  return a-b
}
let s = subtract(8,3)
console.log("Subtracted Value: ",s);

// without use of parenthesis value
const printHello = ()=> console.log("Hello Beautiful People!!")
printHello();

// -------------------------------------------------------------------------------

function countVowels(str)
{
  let count =0;
  for(const char of str)
  {
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
    {
      count ++;
    }
  }
  console.log(count);
}
countVowels("Basketball");

// using arrow function
const countVow = (str)=>
{
  let count =0;
  for(const char of str)
  {
     if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
    {
      count ++;
    }
  }
  console.log(count);
}
countVow("Dare To Say No");

