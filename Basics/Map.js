let arr = [45,26,85]
// Array map method

let a = arr.map((value)=>
{
  console.log(value)
  return value+1;
})

console.log(a);

// array filter method

let arr2 = [45,23,56,0,8,45]
let a2 = arr2.filter((a)=>
{
  return a<10;
})

console.log(a2);

// array reduce method

let arr3 = [1,2,3,6,5,8,90]
let newarr3 = arr3.reduce((h1,h2)=>
{
  return h1+h2;
})

console.log(newarr3);

// for each

const prices = [4,8,45,12,5,6]

prices.forEach((price,i,arr)=>
{
  arr[i] = price*0.5
})
console.log(prices);

const products = [
  {name : "Laptop", price : 499, color: "white"},
  {name : "Smartphone", price : 899, color: "black"},
  {name : "Headphone", price : 54, color: "gray"},
  {name : "Tablet", price : 894, color: "orange"},
  {name : "Monitor", price : 201, color: "blue"},
]

const discount = products.map((product)=>
{
  return product.price *0.5;
})

console.log(discount);

const affordableProdcuts = products.filter(product => product.price<200)
console.log(affordableProdcuts);

array for each method

const coding = ["C", "C++", "Php", "JS", "Java", "Python", "Ruby"];

const values = coding.forEach((item) => {
  return item.toUpperCase;
});

console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((item)=>
{
  return item>5;
})

const newNums = []
myNums.forEach((num)=>
{
  if(num>4)
  {
    newNums.push(num);
  }
})
console.log(newNums);

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map((num) => num+10)
console.log(newNums);