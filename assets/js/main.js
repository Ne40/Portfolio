const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
}

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || 'Portfolio visitor';
    const subject = data.get('subject') || 'Freelance project inquiry';
    const message = data.get('message') || '';
    const body = `Hi Ismail,%0D%0A%0D%0AMy name is ${encodeURIComponent(name)}.%0D%0A%0D%0A${encodeURIComponent(message)}`;
    window.location.href = `mailto:nerovirusismail@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    const status = document.querySelector('.form-status');
    if (status) status.textContent = 'Opening your email app…';
  });
}
