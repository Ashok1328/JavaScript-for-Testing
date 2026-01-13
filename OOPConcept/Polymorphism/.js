// Polymorphism means the same method can behave differently depending on the object calling it 

class Animal 
{
  speak()
  {
    console.log("Animal makes sound!!");
  }
}

class Dog extends Animal
{
  speak()
  {
    console.log("Dog Barks!!");
  }
}

class Cat extends Animal
{
  speak()
  {
    console.log("Cat Meows!!");
  }
}

const dog = new Dog();
const cat = new Cat();

dog.speak();
cat.speak();