//typecoercion.js


//Type conversion and Coercion = change the datatype of a value to another
                 // (strings, numbers, booleans)


let age = window.prompt("How old are you?");
age = Number(age);//number conversion

age+= 1;

document.write(age); //returns user input + 1


//Coercion number and string


var y = 10;
var z = "ten";

var v = (y * z);
document.write(v); //returns NaN



//coercion string and number
var f = "15";
var s = 20; 
document.write(f + s); //returns 1520







