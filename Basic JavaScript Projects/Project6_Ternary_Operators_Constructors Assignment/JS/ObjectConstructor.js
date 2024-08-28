//ObjectConstructor.js


//constructor Function for  person object

function Person(first, last, age, eye ) {
    this.Person_firstName = first;
    this.Person_lastName = last;
    this.Person_age = age;
    this.Person_eyeColor = eye;
}

//create a person object
const myNiece = new Person("Abi", "Shok", 10, "brown");

//display age using document.getElementById
function myFunction() {
document.getElementById("Osi").innerHTML = "My Niece is " + myNiece.Person_age + " years old!";
}