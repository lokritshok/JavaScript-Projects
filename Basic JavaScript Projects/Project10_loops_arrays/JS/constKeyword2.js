//constKeyword2.js//

function constant_function() { //an Object//
    const My_Car = {Brand: "Honda", type: "Hatchback", Model: "2010", Engine: "Petrol"};
    My_Car.color = "grey";
    My_Car.age = "ten years old";
    My_Car.price = "£750";
    document.getElementById("Constant").innerHTML = " My car cost " +  My_Car.price + " and is very durable.";
}