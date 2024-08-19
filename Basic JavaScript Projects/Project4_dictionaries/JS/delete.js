//delete.js


//deleted KVP(Russia)



function World_Capitals(){
    var Country = {
        United_kingdom: "England",
        France: "Paris",
        Germany: "Berlin",
        Russia: "Moscow",
        USA: "Washington_DC",
        Nigeria: "Abuja",
        South_Africa: "Johanesboug",
        Ghana: "Accra",
        Egypt: "Cairo",
        Isreal: "Tel_Aviv",

    };
    delete Country.Russia;
    document.getElementById("Dictionary").innerHTML = Country.Russia;
}
