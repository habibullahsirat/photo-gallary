const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {

    const img = item.querySelector('img');
    const title = item.querySelector('h3').innerText;
    const description = item.querySelector('p').innerText;

    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalTitle.innerText = title;
    modalDescription.innerText = description;
  });
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
