const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('#mobile-view');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});
