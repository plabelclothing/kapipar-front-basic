const iconMenu = document.querySelector('.menu-toggle');

if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    const HamMenu = document.querySelector('.hamburger-menu');
    document.body.classList.toggle('_lock');
  })
}
