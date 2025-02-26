function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const overlay = document.getElementById('passwordOverlay');
  const ghost = document.getElementById('passwordGhost');
  const errorElement = document.getElementById('passwordError');

  if (password == "ljhsphotos") {
    overlay.style.display = 'none';
    ghost.style.display = 'inline';
  } else {
    errorElement.textContent = 'Incorrect password. Please try again.';
    setTimeout(() => {
      errorElement.textContent = '';
    }, 3000);
  }
}

const eventFilter = document.getElementById('eventFilter');
const yearFilter = document.getElementById('yearFilter');
const galleryItems = document.querySelectorAll('.galleryItem');

function filterGallery() {
  const selectedEvent = eventFilter.value;
  const selectedYear = yearFilter.value;

  galleryItems.forEach(item => {
    const itemEvent = item.dataset.event;
    const itemYear = item.dataset.year;

    const eventMatch = selectedEvent === 'all' || itemEvent === selectedEvent;
    const yearMatch = selectedYear === 'all' || itemYear === selectedYear;

    if (eventMatch && yearMatch) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

eventFilter.addEventListener('change', filterGallery);
yearFilter.addEventListener('change', filterGallery);