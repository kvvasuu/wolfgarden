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
  console.log(window.scrollY);
}
window.onscroll = function () {
  scrollCheck();
};
