const btn = document.getElementById('btn')
const nav = document.getElementById('nav')

btn.addEventListener('click', () => { /*nav-btn active */
  nav.classList.toggle('active');
  btn.classList.toggle('active');
});