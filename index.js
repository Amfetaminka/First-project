let menu = document.querySelector(".header_nav-list");
let menuOpen = document.querySelector(".menu-btn");
menuOpen.addEventListener("click", function(event) {
    menu.classList.add("menu-js");
});
menuOpen.addEventListener("click", function(event) {
    menuOpen.classList.remove("menu-js");
})

window.onload = function () {
    setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 2000);
  }