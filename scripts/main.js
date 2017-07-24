  //Banner slides

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("banner-text-box");
  
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block";
}


  //Portfolio - show more on button click
  
$(document).ready(function(){
  $('.more').click(function(){
    $('.portfolio-images-more').toggleClass('active');
  });


});

    //What client says  jQuery slider

var textIndex = 1;
showText(textIndex);

function plusText(n) {
showText(textIndex += n);
}

function currentText(n) {
showText(textIndex = n);
}

function showText(n) {
  var j;
  var textBox = document.getElementsByClassName("clients-text-box");
  
  if (n > textBox.length) {textIndex = 1} 
  if (n < 1) {textIndex = textBox.length}
  for (j = 0; j < textBox.length; j++) {
      textBox[j].style.display = "none"; 
  }
  textBox[textIndex-1].style.display = "block";
}
