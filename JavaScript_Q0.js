// Q0
// Define class of Person.js with first name and last name and age
// Define class of Student.js with properties of first name and last name and grade and age
// Add method of print name
// Add method of print age
// Inherit details from Person class

// Person and Student should be in separate JavaScript files.
//  (Hint)
import {Person} from './Person';
export class Student extends Person {
    constructor(firstname,lastname, age, grade)
    {
        
        super(firstname, lastname,age);
        this.grade = grade;
    }
    method_1(firstname, lastname);
    method_2(age);

}
