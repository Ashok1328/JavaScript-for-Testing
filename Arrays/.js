// ------------------------ Arrays ------------------------------

let marks = [45, 65, 98, 35, 65];
console.log(marks);
console.log(marks.length);
console.log(marks[0]); // indices
marks[0] = 25; // change value
console.log(marks);

// Loopingo over an array ----------------------------------------
// for loop -------------------
let heroess = ["ironman", "batman", "spiderman", "antman", "hulk", "thor"];
for (let i = 0; i < heroess.length; i++) {
  console.log(heroess[i]);
}

// for-of ------
for (let hero of heroess) {
  console.log(hero);
}

let cities = ["Kathmandu", "Lalitpur", "Bhaktapur", "Thankot"];

for (let city of cities) {
  console.log(city.toUpperCase());
}
// ----------------------------------------------------------------------------
let mark = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of mark) {
  sum += val;
}

let avg = sum / mark.length;
console.log(`Average marks of the class = ${avg}`);

// --------------------------------------------------------------------------

let items = [250, 645, 300, 900, 50];
let i = 0;
for (let val of items) {
  let offer = val / 10;
  items[i] = items[i] - offer;
  console.log(`value after offer = ${items[i]}`);
  i++;
}
console.log(items);

for(let i=0; i<items.length; i++)
{
  let offer = items[i] / 10;
  items[i] -= offer;
}
console.log("Value after offer:",items);

// Array methods ----------------------------------------------------
// Push method
let foodItem = ["potato", "apple", "litchi", "tomato"];
let insertedItem = foodItem.push("chips");
console.log(foodItem);
console.log("Inserted item: ", insertedItem);

// Pop method
let deletedItem = foodItem.pop("chips");
console.log(foodItem);
console.log("Deleted item: ", deletedItem);

// toString
console.log(foodItem.toString());

// concat --- returns new array
let marvelHeroes = ["Thor", "IronMan", "SpiderMan"];
let dcHeroes = ["Batman", "SuperMan"];

let heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes);

// unshift
let unshiftItems = marvelHeroes.unshift("Hulk");
console.log(marvelHeroes);
console.log("Unshifted items: ", unshiftItems);

//shift
let shiftItems = dcHeroes.shift();
console.log(dcHeroes);
console.log("Shifted Item: ", shiftItems);

//slice
let marvelHero = ["thor", "spiderman", "ironman", "antman", "Dr.strange"];
console.log(marvelHero);
console.log(marvelHero.slice(1, 3));

//splice
let arr = [1, 2, 3, 4, 5, 6, 7];

arr.splice(2, 3, 101, 102); // add remove replace
console.log(arr);

arr.splice(2, 0, 105); // add element
console.log("Added Element: ", arr);

arr.splice(3, 1); // delete element
console.log("Deleted element: ", arr);

arr.splice(4, 1, 103); // replace element
console.log("Replaced Element: ", arr);

// ---------------------------------------------------------------------------------

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
let removedCompanies = companies.shift();
console.log("Removed Companies: ", removedCompanies);

let replacedCompanies = companies.splice(1, 1, "Ola");
console.log("Replaced Company: ", replacedCompanies);
console.log(companies);

let addedCompanies = companies.push("Amazon");
console.log("Added Companies: ", addedCompanies);
console.log(companies);
