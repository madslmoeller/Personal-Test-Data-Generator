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

// return all
function cpr() {
  // Generate CPR number (DDMMYY-1234)
  // DD
  let dd = Math.floor(Math.random() * 31) + 1;
  let ddString = dd.toString();
  if (ddString.length < 2) {
    dd = "0" + dd;
  } else {
    dd;
  }

  // MM
  let mm = Math.floor(Math.random() * 12) + 1;
  let mmString = mm.toString();
  if (mmString.length < 2) {
    mm = "0" + mm;
  } else {
    mm;
  }

  // YY
  let yy = Math.floor(Math.random() * 99) + 1;
  let yyString = yy.toString();
  if (yyString.length < 2) {
    yy = "0" + yy;
  } else {
    yy;
  }

  // LAST 4 DIGITS
  let fd = Math.floor(Math.random() * 9999) + 1;
  let fdString = fd.toString();
  if (fdString.length === 1) {
    fd = "000" + fd;
  } else if (fdString.length === 2) {
    fd = "00" + fd;
  } else if (fdString.length === 3) {
    fd = "0" + fd;
  } else {
    fd;
  }

  const cprToString = (dd + mm + yy + fd).toString();
  console.log(cprToString);
}

cpr();

function fullnameAndGender() {}

function fullnameGenderAndBirth() {}

function cprFullnameAndGender() {}

function cprFullnameGenderAndBirth() {}

function address() {}

function phoneNumber() {}

function allInformation() {}

function informationInBulk() {}
