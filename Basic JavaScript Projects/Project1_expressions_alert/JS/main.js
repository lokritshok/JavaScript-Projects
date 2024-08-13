
//window Alert
window.alert("Hello, World2!");

//document-write
document.write('Hello, World3!');

//adding variable
var v='This is how we roll!.';
document.write (v)

//Escape character assgmt-using backlash within quotes
var l="I requested Bobbys assistance, but he said, \'sorry, no thanks!\' so i turned to Jessy for help, and he said, \"my pleasure!\".";
document.write (l)

//double backlashes
var s="my.pitman-training.com\\courses\\77629.";
document.write (s)

//concatenation assgmt
var o="\"All power belongs to God," + " to Him alone belongs all the Glory," + " and blessed be His name forevermore\", Amen!"
document.write (o)

//miltiple var
var teammates = "TOM BEN", Lead ="Munis", GH ="Dovile", Clerk ="Ali", YM ="Victor";
document.write(Lead)

//Expression Assgmt
var t=(10 + 10);
document.write(t)

function My_First_Function() {                             //defining a function and naming it
    var str = "This is the button text";                   //defining a var and giving it a str value
    document.getElementById("Button_Text").innerHTML = str; //putting the value
}                                                           //of the var into the HTML element with the "button_Text" id 


//creating two variables
var sent1 = "This is the begining of the string";
var sent2 = " and this is the end of the string";

//displaying the variables using the document.write method
document.write(sent1 + sent2);