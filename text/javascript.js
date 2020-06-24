console.log("hola mundo!");


var ipad = window.matchMedia("screen and (max-width: 767)");
var menu = document.querySelector('.menu');
var burgerButton = document.querySelector("#burger-menu");

console.log(menu);
console.log(burgerButton);


burgerButton.addEventListener("click", hideShow);

ipad.addListener(validation);

function validation(event) {
  console.log(event);
}

validation(ipad);

function hideShow() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove('is-active');

  }
  else {
    menu.classList.add('is-active');

  }
}
