//object.js//

let car = {   //properties//
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    description: function() {    //Adding the method//
        return "The car is a " +  this.year  +  this.color +  this.make  +  this.model;
    }//using the return and this keyword//
};
document.getElementById("Car_Object").innerHTML = car.description();