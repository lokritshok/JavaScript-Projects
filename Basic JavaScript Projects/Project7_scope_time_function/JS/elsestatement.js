//elsestatement.js


// document.getElementById

function Depth_Function() {
    Depth = document.getElementById("Depth").value;
    if (Depth >= 20) {
        Swim = "You are qualified to swim beyond 20 meters!";
    }
    else {
        Swim = "You are not qualified to swim beyond 20 meters!";
    }
    document.getElementById("Can_you_swim?").innerHTML = Swim;
}