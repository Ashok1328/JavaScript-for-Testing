// Error - An object that is created to represent problem that occurs often with user input or establishing connection

/* try { } =   enclose code that might potentially cause an error
  catch { } = catch and handle any thrown errors from try block
  finally { } = (optional) always executes. Used mostly for clean up. Ex. close files, close connection, release resources
*/

try {
  console.log(x);
}
catch (error)
{
  console.error(error);
}
finally{
  console.log("This always executes")
}
console.log("You have reached the end!")

try {
  const dividend = Number(window.prompt("Enter a dividend"));
  const divisor = Number(window.prompt("Enter a divisior"));

  if (divisor == 0) {
    throw new Error("You cannot divide by zero");
  }

  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be number");
  }

  const result = dividend / divisor;
  console.log("Result:", result);
}
catch (error)
{
  console.error("Error: ", error.message);
}

console.log("You have reached the end! ");

setTimeout(() => {
  console.log("Hacking wifi.... please wait.....");
}, 1000);

try {
  console.log(rahul);
} catch (error) {
  console.log("Balle Balle eh eh saba saba");
}

setTimeout(() => {
  console.log("Fetching username and password.... please wait.....");
}, 2000);

setTimeout(() => {
  console.log("Hacking Rahul's faebook id.... please wait.....");
}, 3000);

setTimeout(() => {
  console.log(
    "Username and Password of Rahul (+941255221).... please wait....."
  );
}, 4000);

function getReactArea(w, h) {
  if (isNaN(w) || isNaN(h)) {
    throw "Parameter is not a number";
  }
}

try {
  getReactArea(10, "A");
} catch (e) {
  console.error(e);
}
console.log("I have no idea what's going on above");
