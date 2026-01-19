// ------------------------ Arrays ------------------------------

let marks = [45,65,98,35,65]
console.log(marks);
console.log(marks.length);
console.log(marks[0]);  // indices
marks[0] = 25;          // change value
console.log(marks);


// Loopingo over an array ----------------------------------------
// for loop -------------------
let heroes = ["ironman", "batman", "spiderman", "antman", "hulk", "thor"]
for(let i=0; i<heroes.length; i++)
{
  console.log(heroes[i]);
}

// for-of ------
for(let hero of heroes)
{
  console.log(hero);
}

let cities = ["Kathmandu", "Lalitpur", "Bhaktapur", "Thankot"];

for(let city of cities)
{
  console.log(city.toUpperCase());
}
// ----------------------------------------------------------------------------
let mark = [85,97,44,37,76,60]
let sum =0;
for(let val of  mark)
{
  sum += val;
}

let avg = sum/mark.length
console.log(`Average marks of the class = ${avg}`);

// --------------------------------------------------------------------------

let items = [250,645,300,900,50]
 for(let val of items)
 {
  console.log(val);
 }
