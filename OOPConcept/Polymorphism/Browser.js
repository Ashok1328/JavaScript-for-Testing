class Browser 
{
  open()
  {
    console.log("Opening Browser .... ");
  }
}

class Chrome extends Browser
{
  open()
  {
    console.log("Opening Chrome ...");
  }
}

class FireFox extends Browser 
{
  open()
  {
    console.log("Opening FireFox ...");
  }
}

function startTest(browser)
{
  browser.open();
}

startTest(new Chrome());
startTest(new FireFox());