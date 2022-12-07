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

  let menuArrows = document.querySelectorAll('.clickable-touch');
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
const menuExitZone = document.querySelector('.menu-exit_zone');
if (iconMenu) {
  const menuBurger = document.querySelector('.menu-body_wrapper');
  iconMenu.addEventListener('click', function(e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBurger.classList.toggle('active');
    menuExitZone.classList.toggle('active');
  });
}

// menu exit zone

if (menuExitZone) {
  const menuBurger = document.querySelector('.menu-body_wrapper');
  menuExitZone.addEventListener('click', function(e) {
    document.body.classList.remove('lock');
    iconMenu.classList.remove('active');
    menuBurger.classList.remove('active');
    menuExitZone.classList.remove('active');
  });
}
