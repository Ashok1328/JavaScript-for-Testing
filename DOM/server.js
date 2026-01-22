let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + "from Beastayy";

let box = document.querySelectorAll(".box");
let idx =1;
for(let boxes of box)
{
  boxes.innerText = `Unique value ${idx}`;
  idx++;
}

// Insert Element ---------------------------------------------------
let newBtn = document.createElement("button");
newBtn.innerText = "click me"
console.log(newBtn);

let div = document.querySelector("div");
div.after(newBtn);           // .append  .prepend  .before  .after  -- the selected elements

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new here!</i>"

document.querySelector("body").prepend(newHeading);
newBtn.remove(); // remove the added or existing element

// ------------------------------------------------------------------------------

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").before(newBtn);

let content = document.querySelector("p");
content.classList.add("newClass");
