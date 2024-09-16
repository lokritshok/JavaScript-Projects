//objectAssignment.js//


let dog = {  //properties//
    Breed: "rottweiler",
    Weight: "48 kg",
    Height: "60 cm",
    color: "black",
    description : function() { //Adding the method//
        return "My dog is a " + this.Breed + " , she weighs " + this.Weight + " and is " + this.color + " . ";
    } ////using the return and this keyword//
    
}; 
document.getElementById("link").innerHTML = dog.description();