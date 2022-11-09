const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return (
      navigator.userAgent.match(/IEMobile/i) ||
      navigator.userAgent.match(/WPDesktop/i)
    );
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

// arrows

if (isMobile.any()) {
  document.body.classList.add('touch');

  let menuArrows = document.querySelectorAll('.burger-arrow');
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index]
      menuArrow.addEventListener('click', function(e) {
        menuArrow.parentElement.classList.toggle('active');
      });
    }
  }

} else {
  document.body.classList.add('pc');
}

// menu burger

const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
  const menuBurger = document.querySelector('.menu-body_wrapper');
  iconMenu.addEventListener('click', function(e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBurger.classList.toggle('active');
  });
}
