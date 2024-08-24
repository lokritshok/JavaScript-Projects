//negative infinityAssignment.js


//calling negative and positive infinity using document.getElementById method


var a = (1.7976931348623157E308);
var b = (-3E310);


//displaying a "p" element assigned an id name using the document.getElementById method

function myInfinity() {
    divide = a * b;
    document.getElementById("divide"). innerHTML = a * b; //returned negative infinity
}