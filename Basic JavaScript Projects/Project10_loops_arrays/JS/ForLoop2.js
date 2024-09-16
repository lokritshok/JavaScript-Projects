//ForLoop2.js//


var Instruments = ["Cello", "Bass Drums", "Banjo", "Bell", "Bugle", "Trumpet", "Harp"];//an Object//
var Content = "";
var Y;
function for_Loop() {// conditional statement//
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}