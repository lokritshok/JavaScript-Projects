//slicemethod.js

//slicing a string using document.getElementById


function slice_method() {
    var sentence = "Hardwork is tough, but it pays!";
    var section = sentence.slice(12,32);
    document.getElementById("slice").innerHTML = section;//returns selected elements in an array,  as new array
} 