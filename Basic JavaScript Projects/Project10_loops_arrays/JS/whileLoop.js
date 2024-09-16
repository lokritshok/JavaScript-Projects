//whileLoop.js//

//while loop//
function Call_Loop() {}
    var Digit = "";
    var x = 1;
    while (x < 11) {//conditional statement//
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;

