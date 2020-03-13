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
  if (scrollTop > 1950 && scrollTop < 2700) {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('linked'));
    MENU.querySelectorAll('a')[3].classList.add('linked');
  }
  if (scrollTop > 2700 && scrollTop < 3200) {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('linked'));
    MENU.querySelectorAll('a')[4].classList.add('linked');
  }
}

function screenOpacity() {
  let q = getComputedStyle(event.target.previousElementSibling);
  if (q.filter == "brightness(0)") {
    event.target.previousElementSibling.style.filter = "brightness(100%)"} else {
    event.target.previousElementSibling.style.filter = "brightness(0%)";
  }
}

function sliderButton() {
  document.getElementById('sliderScreen').querySelectorAll('div').forEach(el => el.classList.toggle('slide_visible'));
}

let PMENU = document.getElementById('portfolio-menu');
let PICTURES = document.getElementById('pictures');

PMENU.addEventListener('click', (event) => {
  PMENU.querySelectorAll('input').forEach(el => el.checked = false);
  event.target.checked = true;
  hidePicture(event.target.closest('input').getAttribute('name'));
})

function hidePicture (tag) {
  if (tag == "all") {
    PICTURES.querySelectorAll('div').forEach(el => el.classList.remove('hide-picture'));
    } else {
    let length = PICTURES.querySelectorAll('img').length;
    for (let i = 0; length - 1; i++) {
      if (PICTURES.querySelectorAll('div')[i].classList.contains(tag)) {
        PICTURES.querySelectorAll('div')[i].classList.remove('hide-picture');
        } else {
        PICTURES.querySelectorAll('div')[i].classList.add('hide-picture');
      }
    }
  }
}

PICTURES.addEventListener('click', (event) => {
  PICTURES.querySelectorAll('div').forEach(el => el.classList.remove('clicked'));
  event.target.closest('div').classList.add('clicked');
})

// document.getElementById("quote-form").submit() = function {
function submitWindow() {
   // let form = document.forms.quote.value;
   // let name = document.forms.elements.name.value;
  // let email = form.elements.email.value;
  // let subject = form.elements.subject.value;
  // let details = form.elements.message.value;
  alert(name);
}
