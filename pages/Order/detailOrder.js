const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const body = document.querySelector('body');
const exitArea = document.querySelector('.popup-area');

modalClose.addEventListener('click', function () {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
});

exitArea.addEventListener('click', function () {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
});

document.addEventListener('click', function (e) {
  if (e.target.className.indexOf('photo-image') !== -1) {
    const img = e.target;
    const modalImg = document.getElementById('modal-content');
    modal.style.display = 'block'
    modalImg.src = img.src;
    body.style.overflow = 'hidden';
  }
});

