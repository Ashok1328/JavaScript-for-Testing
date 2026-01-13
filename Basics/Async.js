console.log("Hi, I am the 1st program");
console.log("Hi, I am the 2nd program");
console.log("Hi, I am the 3rd program");
console.log("Hi, I am the 4th program");
console.log("Hi, I am the 5th program");
setTimeout(() => {
  console.log("HI, I am the 6th program");
}, 2000);
console.log("Hi, I am the 7th program");

//const { reject } = require("async");  

// callback function

function fetchData(callback) {
  // fetch data from server
  setTimeout(() => {
    console.log("Data Fetched!");
    const data = "Sample Data";
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log("Processing: ", data);
}

function modifyData(data) {
  console.log("Modifying: ", data);
}

fetchData(processData); // explicit callback
fetchData(modifyData);

// Promises in JS

function fetchData() {
  // fetch data from server resolve, pending, rejected

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data Fetched!");
      const data = "Sample Data";
      // reject("I am rejected");
      resolve(data);
    }, 2000);
  });
}

// can use then 
fetchData().then((data) => {
  console.log("Processing: ", data);
});

async function Data(data) {
  await fetchData("Processing:", data);
}


// // can use await also 
// const data = await fetchData();
// console.log("Processing: ", data);

let promise = new Promise((resolve, reject) =>
{
  let s = "Hello GFG";
  if(s)
  {
    resolve(s);
  }
  else
  {
    reject("Some error occured");
  }
});

promise.then((data) =>
  console.log(data)).catch((error) =>
  {
    console.log(error);
  })

