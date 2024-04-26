const arrow = document.getElementById("arrow-button");
const aboutUs = document.getElementById("about-us");
const home = document.getElementById("main");
const content = document.getElementById("content");
const dogImage = document.getElementById("dog-image");

const jumpToHome = () => {
  home.scrollIntoView(true);
};

arrow.addEventListener("click", jumpToHome);

function scrollCheck() {
  if (window.scrollY > 300) {
    content.classList.add("slideUp");
    dogImage.classList.add("slideUp");
  }
  if (window.scrollY < 400) {
    arrow.classList.remove("scroll-nav-bottom");
  }
  if (window.scrollY > 800) {
    arrow.classList.add("scroll-nav-bottom");
  }
}
window.onscroll = function () {
  scrollCheck();
};

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

setInterval(() => {
  plusSlides(1);
}, 5000);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

document.getElementById("prev").addEventListener("click", () => plusSlides(-1));
document.getElementById("next").addEventListener("click", () => plusSlides(1));
