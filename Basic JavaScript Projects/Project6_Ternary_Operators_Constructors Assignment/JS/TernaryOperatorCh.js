//TernaryOperatorCh.js

function Voter_Function() {
    var Age, Exempt;
    Age = document.getElementById("Age").value;
    Exempt = ( Age > 17 ) ? "You can": "You are too young to";
    document.getElementById("Voter").innerHTML = Exempt + " vote!";
}