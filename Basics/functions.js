// function greeting() {
//   console.log("Hello, Good Morning!!");
// }

// greeting();

// let cars = ["Toyota", "BMW", "Ferrari"]

// console.log(cars[2]);  // accessing element

// cars[0] = "Volvo"  // changing value  
// console.log(cars);

// // we can store different variables in same array
// let arr = [100, "Hello!", 103.5, true]
// console.log(arr);

// // we can have object in array

// let person1 = {
//   name : "John",
//   age : 29
// };

// let person2 = {
//   name : "Bob",
//   age :30
// };

// let person = [person1, person2];
// console.log(person);


let fruits = ["Banana", "Apple", "Orange", "Guava"]
// console.log(fruits.length);

// // Looping elements for array
//  for(let i=0; i<=fruits.length-1;i++)
//   {
//       console.log(fruits[i]);
//   }
 

// // Looping elements for/of loop

// for(ele of fruits)
// {
//   console.log(ele);
// }

// toString() & join()

console.log(fruits.toString());
console.log(fruits.join("*"))

// pop

//console.log(fruits.pop());
//console.log(fruits);

// push 
fruits.push("Mango");
console.log(fruits);

// shift
