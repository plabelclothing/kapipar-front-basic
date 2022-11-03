const iconMenu = document.querySelector('.menu-toggle');

if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
  })
}
