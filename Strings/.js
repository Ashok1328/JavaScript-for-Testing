// template literal

let obj = {
  item: "pen",
  price: 25,
};

console.log(`The cost of ${obj.item} is: ${obj.price} rupees`);

// string --------------------------------------------

let str = "Beast Bhai "; // to uppercase lowercase trim
newStr = str.toUpperCase();
console.log(newStr);

// slice gives the output of the specific range you define

let num = "hello";
console.log(num.slice(1));

// concat ----------------------------------------------

let result = str.concat(num);
console.log(result);

// replace ----------------------------

console.log(num.replace("hello", "Kemcho! Bhalobasi"));

num = num.replace("h", "i");
console.log(num);

// ------------------------------------------------------------------------------------

let fullName = prompt("Enter your fullname without spaces: ");

let username = "@" + fullName + fullName.length;
console.log(fullName);
