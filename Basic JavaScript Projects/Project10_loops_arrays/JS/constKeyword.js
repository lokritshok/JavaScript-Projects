//constKeyword.js//

function constant_function() {
    const My_Car = {Brand: "Honda", type: "Hatchback", Model: "2010", Engine: "Petrol"};
    My_Car.color = "grey";
    My_Car.age = "ten years old";
    My_Car.price = "£750";
    document.getElementById("Constant").innerHTML = " My car is " +  My_Car.age + " and it's " + My_Car.color + ".";
}