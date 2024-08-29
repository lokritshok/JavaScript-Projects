//method.js




//using document.write

if (100 < 400) {
    document.write("The number on the left is greater than the number on the right!")
}

//using get_Date

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Today").innerHTML = "Do have a good day!"; 
    }//if hour is before 6pm, it returns Do have a good day, but after 6pm nothing returns
}