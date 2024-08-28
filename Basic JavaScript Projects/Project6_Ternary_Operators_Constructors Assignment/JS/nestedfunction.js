//nestedfunction.js

//using document.getElementById

function Count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();

    function Count() {
        var Starting_point = 990;

        function Plus_ten() {Starting_point += 10;}  //nested function
         Plus_ten() ;
        
        return Starting_point;
    }
}