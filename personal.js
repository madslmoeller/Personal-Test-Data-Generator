
class Personal {
  constructor(cpr, fullName, gender, dateOfBirth, address, phoneNumber) {
    this.cpr = cpr;
    this.fullName = fullName;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
}

const person = new Personal();

function cpr() {}



function fullnameAndGender() {
  //reading json file to varible --- Think we need a method for this. it is repeated more then once.
  const fs = require('fs')
  let json = fs.readFileSync("./personname.json")
  let jsonify = JSON.parse(json)

  //Need random number method here - to pase in to the next section

  //Taking the randomNumber variable from method and getting first name, last name and gender
  // Gender is set to object, where first name and last name are added together to make fullname in object
  const firstName = jsonify.persons[randomNumber].name;
  const lastName = jsonify.persons[randomNumber].surname;
  person.gender = jsonify.persons[randomNumber].gender;
  person.fullName = firstName + " " + lastName;
  
  //writing result to console 
  console.log(person.fullName + " " + person.gender);

  // returning the result as a string
  return firstName + " " + lastName + " " + person.gender;

}

function fullnameGenderAndBirth() {
    
    //calling fullnameAndGender() for fullname and gender, then adding cpr method, where only the first 6 charaters af taken.
    const fullnameGenderBirth = fullnameAndGender() + " " + cpr().slice(0, 6);

    console.log(fullnameGenderBirth)

    return fullnameGenderAndBirth;
}

function cprFullnameAndGender() {}

function cprFullnameGenderAndBirth() {}

function address() {}

function phoneNumber() {}

function allInformation() {}

function informationInBulk() {}
