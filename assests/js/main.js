//start slide show
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// end slide show 
// // Get the  modalImage
// var modalImage = document.getElementById("myImg");

// // Get the image and insert it inside the  modalImage - use its "alt" text as a caption
// // var img = $(".myImg");
// var modalImageImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");

// function image(event) {
//     modalImage.style.display = "block";
//     modalImageImg.src = event.target.src;
//     captionText.innerHTML = event.target.alt;
// }

// // Get the <span> element that closes the  modalImage
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the  modalImage
// span.onclick = () => {
//         modalImage.style.display = "none";
//     }
//     //end images model