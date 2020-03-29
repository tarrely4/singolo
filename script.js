let MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('linked'));
  event.target.closest('a').classList.add('linked');
})

function toTop() {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('linked'));
  MENU.querySelector('a').classList.add('linked');
}

window.onscroll = function() {
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop < 550) {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('linked'));
    MENU.querySelector('a').classList.add('linked');
  }
  if (scrollTop > 550 && scrollTop < 1000) {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('linked'));
    MENU.querySelectorAll('a')[1].classList.add('linked');
  }
  if (scrollTop > 1000 && scrollTop < 1950) {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('linked'));
    MENU.querySelectorAll('a')[2].classList.add('linked');
  }
  if (scrollTop > 1950 && scrollTop < 2400) {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('linked'));
    MENU.querySelectorAll('a')[3].classList.add('linked');
  }
  if (scrollTop > 2400 && scrollTop < 3200) {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('linked'));
    MENU.querySelectorAll('a')[4].classList.add('linked');
  }
}

function screenVertical() {
  let disp = document.getElementById('vertical-display')
  if (disp.style.filter == "brightness(0%)") {
    disp.style.filter = "brightness(100%)"} else {
    disp.style.filter = "brightness(0%)";
  }
}

function screenHorizontal() {
  let disp = document.getElementById('horizontal-display')
  if (disp.style.filter == "brightness(0%)") {
    disp.style.filter = "brightness(100%)";} else {
    disp.style.filter = "brightness(0%)";
  }
}

let SLIDER = document.getElementById('slider');

function sliderButton() {
  document.getElementById('sliderScreen').querySelectorAll('div').forEach(el => el.classList.toggle('slide_invisible'));
  let color = window.getComputedStyle(SLIDER).backgroundColor;
  SLIDER.style.backgroundColor = color == "rgb(240, 108, 100)" ? "rgb(100, 139, 240)" : "rgb(240, 108, 100)";
}

let PMENU = document.getElementById('portfolio-menu');
let PICTURES = document.getElementById('pictures');

PMENU.addEventListener('click', (event) => {
    PMENU.querySelectorAll('input').forEach(el => el.checked = false);
    event.target.checked = true;
    shufflePicture();
})

function shufflePicture() {
  let rand = Math.floor(Math.random() * 12);
  let randomPicture = PICTURES.removeChild(PICTURES.querySelectorAll('div')[rand]);
  PICTURES.appendChild(randomPicture);
  rand = Math.floor(Math.random() * 12);
  randomPicture = PICTURES.removeChild(PICTURES.querySelectorAll('div')[rand]);
  PICTURES.appendChild(randomPicture);
}

PICTURES.addEventListener('click', (event) => {
  PICTURES.querySelectorAll('div').forEach(el => el.classList.remove('clicked'));
  event.target.closest('div').classList.add('clicked');
})

function submitWindow() {
  let form = document.forms[0];
  let subject = form.elements.subject.value;
  let description = form.elements.description.value;
  let window = document.getElementById('modalWindow').querySelectorAll('p');
  window[1].innerHTML = subject.length > 0 ? "Subject: " + subject : "Without subject";
  window[2].innerHTML = description.length > 0 ? "Description: " + description : "Without description";
  document.getElementById('modalWindow').style.display = "block";
}

function modalOK() {
  document.getElementById('modalWindow').style.display = "none";
  document.forms[0].elements.name.value = "";
  document.forms[0].elements.email.value = "";
  document.forms[0].elements.subject.value = "";
  document.forms[0].elements.description.value = "";
}

let BURGERMENU = document.getElementById('burger-menu');
let BURGERICON = document.getElementById('burger-menu-icon');
let LOGO = document.getElementById('logo');

BURGERICON.onclick = function() {
  showMenu();
  rotateIcon();
  logoMove();
  overlay();
}

function rotateIcon() {BURGERICON.classList.toggle("burger-menu__icon_rotated");}

function showMenu() {BURGERMENU.classList.toggle("show-menu");}

function logoMove() {LOGO.classList.toggle("logo-burger");}

function overlay() {
  document.getElementById('overlay').classList.toggle("show-menu");
  document.body.style.overflow = BURGERMENU.classList.contains("show-menu") ? "hidden" : "auto";
}

BURGERMENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('linked'));
  showMenu();
  rotateIcon();
  logoMove();
  overlay();
})
