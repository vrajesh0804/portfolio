document.addEventListener('DOMContentLoaded', function(){
  const nav = document.querySelector('.nav-menu');
  document.querySelector('.logo').addEventListener('click', () => {
    nav.classList.toggle('show');
  });
});
