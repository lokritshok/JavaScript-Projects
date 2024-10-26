//formChallenge.js

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
        y = document.forms["myForm"]["lname"].value;
        z = document.forms["myForm"]["email"].value;
        p = document.forms["myForm"]["phone"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    if (y == "") {
        alert("LastName must be filled out");
        return false;
    }
    if (z == "") {
        alert("email must be filled out");
        return false;
    }
    if (p == "") {
        alert("phone must be filled out");
        return false;
    }
}