//main.js


//using document.getElementById

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short": "You are tall enough"; //Ternary operation
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}