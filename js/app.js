
// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
},{ threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mobile menu
const btn = document.querySelector('#menuBtn');
const menu = document.querySelector('#mobileMenu');
if (btn && menu) {
  btn.addEventListener('click', ()=> menu.classList.toggle('hidden'));
}
