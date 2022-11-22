const accord = document.querySelector('.edit-btn');
const panel = document.querySelector('.panel');
const fullAddress = document.querySelector('.full-address');

const password = document.querySelector('.change-btn');
const hideItem = document.querySelector('.panel-password');
const passwordTitle = document.querySelector('.password-title');

accord.addEventListener('click', function() {
  panel.classList.toggle('panel-show');
  fullAddress.classList.toggle('address-hidden');
});

password.addEventListener('click', function() {
  hideItem.classList.toggle('panel-password_show');
  passwordTitle.classList.toggle('password-title_hidden');
});

