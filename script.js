 let MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
  event.target.closest('a').classList.add('selected');
})
