//innHTMLAssignment.js//

function array_Function() { //creating an array//

    var Car_type = [];
    Car_type[0] = "Vauxhall";
    Car_type[1] = "Mercedes";
    Car_type[2] = "Ford";
    Car_type[3] = "Lexus";
    Car_type[4] = "Honda";
    Car_type[5] = "Kia";
    Car_type[6] = "Renault";

    document.getElementById("Array").innerHTML = " My favourite car, "  +  " is a "  +  Car_type[4] + ".";
    //concacate strings//

}