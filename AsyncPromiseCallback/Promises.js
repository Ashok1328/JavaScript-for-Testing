let promises = new Promise((res,rej)=>
{
  console.log("I am a promise")
  rej("some error");
})
console.log(promises);

//----------------------------------------------------------------------

let promise = new Promise((resolve, reject) => {
  let sucess = false;
  if (sucess) {
    resolve("Task is completed successfully");
  } else {
    reject("Task failed");
  }
});
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise Chaining ---------------------------------------

function step1() {
  return Promise.resolve("Step1 completed");
}

function step2(msg) {
  return Promise.resolve(msg + " -> Step 2 completed");
}

step1()
  .then(step2)
  .then((result) => console.log(result));

// Error handling in promises ------------------------------------
function divide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Cannot divide by zero");
    } else {
      resolve(a / b);
    }
  });
}

divide(10, 2)
.then(result => console.log(result))
.catch(error => console.log(error));

// Promises Method -------------------------------------------
//Promise.all
Promise.all([
  Promise.resolve("API 1"),
  Promise.resolve("API 2")
]).then(results => console.log(results));


// Promise.race()
Promise.race([
  new Promise(res => setTimeout(()=> res("Fast"),1000)),
  new Promise(res => setTimeout(()=> res("Slow"),2000))
]).then(result => console.log(result));

//Promise.allSettled()
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failed")
]).then(results => console.log(results));