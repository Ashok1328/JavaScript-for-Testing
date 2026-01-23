function calculator(a, b, sumCallBack) {
  sumCallBack(a, b);
}
function sum(a, b) {
  console.log(a + b);
}

calculator(1, 2, sum);

function greet(name, callback) {
  console.log("Hello" + name);
  callback();
}

function sayBye() {
  console.log("GoodBye!");
}

greet("Ashok", sayBye);

// nesting
let age = 18;
if (age >= 18) {
  if (age >= 60) {
    console.log("Senior");
  } else {
    console.log("Middle");
  }
} else {
  console.log("Child");
}

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

//call back hell
getData(1, () => {
  console.log("getting data2 .....");
  getData(2, () => {
    console.log("getting data3 ....");
    getData(3, () => {
      console.log("getting data4 ....");
      getData(4);
    });
  });
});

// callback hell ------------------------------------------
//when callbacks are nested
getData(function (a) {
  processData(a, function (b) {
    saveData(b, function (c) {
      console.log(c);
    });
  });
});
