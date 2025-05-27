// Locked page access
function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const overlay = document.getElementById('passwordOverlay');
  const ghost = document.getElementById('passwordGhost');
  const errorElement = document.getElementById('passwordError');

  if (password == "ljhsphotos") {
    overlay.style.display = 'none';
    ghost.style.display = 'inline';
  } else {
    errorElement.textContent = 'Incorrect password! Please try again.';
    setTimeout(() => {
      errorElement.textContent = '';
    }, 3000);
  }
}

// Gallery Filter

// Setting the different filters
const eventFilter = document.getElementById('eventFilter');
const yearFilter = document.getElementById('yearFilter');
const galleryItems = document.querySelectorAll('.galleryItem');

function filterGallery() {
  const selectedEvent = eventFilter.value;
  const selectedYear = yearFilter.value;

  // turning each data value from the html when I designated each photos specifications to a const variable
  galleryItems.forEach(item => {
    const itemEvent = item.dataset.event;
    const itemYear = item.dataset.year;

    // Figuring out if the photo matches the correct event and year to show
    const eventMatch = selectedEvent === 'all' || itemEvent === selectedEvent;
    const yearMatch = selectedYear === 'all' || itemYear === selectedYear;

    // Shows the photo
    if (eventMatch && yearMatch) {
      item.style.display = 'block';
    // Hides the photo
    } else {
      item.style.display = 'none';
    }
  });
}

eventFilter.addEventListener('change', filterGallery);
yearFilter.addEventListener('change', filterGallery);

// Fancybox customization
Fancybox.bind("[data-fancybox='gallery']", {
  Thumbs: {
    autoStart: true,
  },
  Toolbar: {
    display: ['zoom', 'fullscreen', 'thumbs', 'close'],
  }
});