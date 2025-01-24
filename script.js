// Navigation Bar Functionality
const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

// Super fun image slider
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let slider = document.querySelector(".slider");

next.addEventListener('click', function(){
    let slides = document.querySelectorAll(".slides");
    slider.appendChild(slides[0]);
})

prev.addEventListener('click', function(){
    let slides = document.querySelectorAll(".slides");
    slider.prepend(slides[slides.length - 1 ]);
})

// Update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();
