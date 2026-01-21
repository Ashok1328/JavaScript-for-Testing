// // loops ----------------------------------------------------
// // for loop --------------------------

// for(i=0; i<5; i++)
// {
//   console.log("Apna College");
// }
// console.log("Loop has ended");

// let sum =0;
// for(i=0; i<5; i++)
// {
//   sum += i;
// }

// console.log("Sum =",sum);

// // // infinite loop -------------------------------
// for(i=1; i>=0;i++)
// {
//   console.log("i =", i);
// }

// // while loop---------------------------------
// let j=1;
// while(j<=5)
// {
//   console.log("j = ", j);
//   i++;
// }

// // do-while loop -------------------------------
// let i=11;
// do{
//   console.log("Beastay")
//   i++;
// }
// while(i<=10);

// for-of loop -----------------------------------

let str = "Beastay";
let size =0;
for(let i of str)   // iteration -> characater
{
  console.log(i);
  size ++;
}

console.log("Size of string:",size);

// for-in loop -----------------------------------

let student = {
  name : "Beast Bhai",
  age : 23,
  cgpa: "A",
  isPass: true,
}

for(let key in student)  // return key in output 
{
  console.log("Key =", key , "value = ", student[key]);
}


// // -----------------------------------------------------------------------------

// for(let num=0; num<=100; num++)
// {
//   if(num %2 !== 0)
//   {
//     console.log("Even number is : ", num);
//   }
// }

// // ----------------------------------------------------------------------------

// let gameNum = 25;
// let userNum = prompt("Guess the number: ");

// while(userNum != gameNum)
// {
//   userNum = prompt("You entered wrong number. Guess Again: ");
// }

// console.log("Congratulation!! you entered the right number")

