const accord = document.querySelector('.edit-btn');
const panel = document.querySelector('.panel');
const password = document.querySelector('.change-btn');
const hideItem = document.querySelector('.panel-password');

accord.addEventListener('click', function() {
  if(panel.style.display == 'none') {
    panel.style.display = 'block';
  } else {
    panel.style.display = 'none';
  }
})

password.addEventListener('click', function() {
  if(hideItem.style.display == 'none') {
    hideItem.style.display = 'block';
  } else {
    hideItem.style.display = 'none';
  }
})
