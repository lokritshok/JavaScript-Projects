//main.js


//concatenating strings using document.getElementById

function complete_sentence() {
    var sentence_1 = " I have";
    var sentence_2 = " booked";
    var sentence_3 = " my holidays";
    var sentence_4 = " for this";
    var sentence_5 = " year, 2024!";
    var full_sentence = sentence_1.concat(sentence_2 ,sentence_3, sentence_4, sentence_5);
    document.getElementById("concat").innerHTML = full_sentence;// returns full sentence
}