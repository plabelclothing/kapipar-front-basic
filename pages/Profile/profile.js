const password = document.querySelector('.change-btn');
const hideItem = document.querySelector('.panel-password');
const passwordTitle = document.querySelector('.password-title');
const UserPopup = document.querySelector('.user-popup');

password.addEventListener('click', function() {
  hideItem.classList.toggle('panel-password_show');
  passwordTitle.classList.toggle('password-title_hidden');
});

hideItem.addEventListener('click', function() {
  UserPopup.classList.toggle('show');
  hideItem.classList.toggle('panel-password_show');
  passwordTitle.classList.toggle('password-title_hidden');
})
