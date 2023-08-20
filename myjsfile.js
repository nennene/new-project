let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  
}


let blockIndex = 1;
showblock(blockIndex);

function plusBlock(n) {
  showBlock(blockIndex += n);
}


// Thumbnail image controls
function currentNlock(n) {
  showBlock(blockIndex = n);
}

function showBlock(n) {
  let i;
  let block = document.getElementsByClassName("myblock");
  if (n > block.length) {blockIndex = 1}
  if (n < 1) {blockIndex = block.length}
  for (i = 0; i < block.length; i++) {
    block[i].style.display = "none";
  }
  block[blockIndex-1].block.display = "block";
  
}


