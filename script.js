// Alert of website construction
/*
function showAlert() {
  const currentTime = new Date().getTime();
  const lastDismissed = localStorage.getItem('lastDismissed');
  if (!lastDismissed || (currentTime - lastDismissed) >= 24 * 60 * 60 * 1000) {
    alert("This website is currently under construction. Please contact Malia if you run into any issues. Thanks!");
  }
}

function dismissAlert() {
  const currentTime = new Date().getTime();
  localStorage.setItem('lastDismissed', currentTime);
}

window.onload = function() {
  showAlert();
  setTimeout(dismissAlert, 0);
};
*/

// Shrink navbar on scroll
window.onscroll = function() { scrollFunction(
  ) };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.width = "50px";
  } else {
    document.getElementById("logo").style.width = "100px";
  }
}

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

// Toggle announcements dropdown
function toggleAnnouncements() {
  const content = document.getElementById('announcements-content');
  const button = document.querySelector('.dropdown-toggle');
  
  if (content.classList.contains('show')) {
    content.classList.remove('show');
    button.textContent = 'Learn More';
  } else {
    content.classList.add('show');
    button.textContent = 'Show Less';
  }
}