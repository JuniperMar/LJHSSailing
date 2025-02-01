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