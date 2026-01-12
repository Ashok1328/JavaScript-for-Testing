// Define the parent class
class Person
{
  constructor(name,age)
  {
    this.name = name;
    this.age = age;
  }

  // method to get the person details
  getDetails()
  {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Export the person class
export default Person;