document.getElementById("demo1").innerHTML = "This is dynamic text message";
document.getElementById("demo2").innerHTML = "Hello Javascript!";
document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("myDate").innerHTML = Date();
}

