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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function openForm1() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm1() {
  document.getElementById("myForm").style.display = "none";
}

function openForm2() {
  document.getElementById("myForm1").style.display = "block";
}

function closeForm2() {
  document.getElementById("myForm1").style.display = "none";
}
