//JSON_stringify.js

var obj = {"school": "BTH", "student": "year 7", "sex": "female"};
var myJSON = JSON.stringify(obj);
document.getElementById("return").innerHTML = myJSON;