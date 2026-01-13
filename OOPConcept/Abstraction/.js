// Abstraction means showing only essential details and hiding internal implementation. User interact with methods without worrying about inner working - (Hiding Complexity) 

class Car
{
  startEngine()
  {
    console.log("Starting Engine...");
    this.#injectFuel();
    this.#igniteSpark();
  }

  // private methods
  #injectFuel()
  {
    console.log("Fuel Injected ...");
  }

  #igniteSpark()
  {
    console.log("Spark ignited ...");
  }
}

const myCar = new Car();
myCar.startEngine();

// User does not need to know fuel and spark details