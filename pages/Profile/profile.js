const accord = document.querySelector('.edit-btn');
const panel = document.querySelector('.panel');
const fullAddress = document.querySelector('.full-address');

const password = document.querySelector('.change-btn');
const hideItem = document.querySelector('.panel-password');
const passwordInput = document.querySelector('.password-input');

accord.addEventListener('click', function() {
  panel.classList.toggle('panel-show');
  fullAddress.classList.toggle('address-hidden');
});

password.addEventListener('click', function() {
  hideItem.classList.toggle('panel-password_show');
  passwordInput.classList.toggle('password-input_hidden');
});
