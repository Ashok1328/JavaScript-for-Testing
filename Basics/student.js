// Import the person class
import Person from "./person.js";

// Define the child class that inherit from the parent class

class Student extends Person
{
  constructor(name, age, grade)
  {
    //call the parent class constructor using super
    super(name,age);
    this.grade = grade;
  }

  // method to get the student details
  getStudentDetails()
  {
    // call the parent class method
    const parentDetails = super.getDetails();
    return `${parentDetails},  Grade: ${this.grade}`;
  }
}

// export the student details

export default Student;