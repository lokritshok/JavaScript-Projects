//infinityAssignment.js


//calling negative and positive infinity using document.getElementById method


var a = (1.7976931348623157E308);
var b = (10);


//displaying a "p" element assigned an id name using the document.getElementById method

function myInfinity() {
    demo = a * b;
    document.getElementById("demo"). innerHTML = a * b; //returned infinity
}