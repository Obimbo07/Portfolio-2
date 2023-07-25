const popup = document.getElementById('mobile-menu');

function openMenu() {
  popup.classList.add('dropdown_show');
}
openMenu();

function closeMenu() {
  popup.classList.remove('dropdown_show');
}
closeMenu();