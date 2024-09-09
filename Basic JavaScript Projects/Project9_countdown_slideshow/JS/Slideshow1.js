//Slideshow1.js//



//Multiple Slideshows//

let slideIndex = [1,2,3];

//Class the members of each slideshow group with diff css classes//

let slideId = ["mySlides1","mySlides2","mySlides3"]
showSlides(1,0);
showSlides(2,1);
showSlides(3,2);

function plusSlides(n,no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].computedStyleMap.display = "none";
    }
    x[slideIndex[no] -1].computedStyleMap.display = "block";

}
