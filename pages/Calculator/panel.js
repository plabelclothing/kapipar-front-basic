var accord = document.getElementsByClassName("package-insure_wrapper");
var i;

for (i = 0; i < accord.length; i++) {
    accord[i].onclick = function() {
        this.nextElementSibling.classList.toggle("show");
    }
}
