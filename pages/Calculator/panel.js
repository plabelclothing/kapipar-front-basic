const accord = document.getElementsByClassName('shipping-wrapper');

for (i = 0; i < accord.length; i++) {
  accord[i].onclick = function () {
    this.nextElementSibling.classList.toggle("show");
  };
}
