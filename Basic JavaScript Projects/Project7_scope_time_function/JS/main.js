//main.js

//global variable

var X = 20;
function Multiply_numbers_1() {
    document.write(40*X+ "<br>");
}
function Add_numbers_2() {
    document.write(X + 100+"<br>");
}
Multiply_numbers_1();
Add_numbers_2();


//local variable

function Divide_numbers_3() {
    var Y = 10;
    document.write(50/Y+ "<br>");
}
function Subtract_numbers_4() {
    document.write(Y - 5);
}
Divide_numbers_3();
Subtract_numbers_4();   //undefined - no output