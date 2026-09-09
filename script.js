/* ================================================================
   NAVIGATION — HEADER STICKY
   ================================================================ */
const header   = document.getElementById('header');
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
  header.classList.toggle('solid', window.scrollY > 30);
}, { passive: true });

navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});

/* Fermer le menu en cliquant un lien */
navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* Fermer en cliquant en dehors */
document.addEventListener('click', e => {
  if (!header.contains(e.target)) {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
  }
}, { passive: true });

/* ================================================================
   ÉTOILES DANS LE HERO
   ================================================================ */
(function spawnStars() {
  const container = document.getElementById('heroStars');
  if (!container) return;

  const count = window.innerWidth < 600 ? 55 : 110;

  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() < 0.15 ? 3 : Math.random() < 0.5 ? 2 : 1;
    s.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `left:${(Math.random() * 100).toFixed(2)}%`,
      `top:${(Math.random() * 100).toFixed(2)}%`,
      `--dur:${(2.5 + Math.random() * 4).toFixed(2)}s`,
      `--delay:${(Math.random() * 5).toFixed(2)}s`,
      `opacity:${(Math.random() * 0.6 + 0.1).toFixed(2)}`
    ].join(';');
    container.appendChild(s);
  }

  /* quelques "pixels" colorés façon PA */
  const colors = ['rgba(59,111,228,0.7)', 'rgba(245,158,11,0.6)', 'rgba(34,197,94,0.5)', 'rgba(124,58,237,0.5)'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'star';
    const side = (Math.floor(Math.random() * 2) + 1) * 3; /* 3 ou 6 px */
    p.style.cssText = [
      `width:${side}px`,
      `height:${side}px`,
      `border-radius:1px`,
      `background:${colors[Math.floor(Math.random() * colors.length)]}`,
      `left:${(Math.random() * 100).toFixed(2)}%`,
      `top:${(Math.random() * 100).toFixed(2)}%`,
      `--dur:${(3 + Math.random() * 5).toFixed(2)}s`,
      `--delay:${(Math.random() * 6).toFixed(2)}s`,
      `opacity:0.4`
    ].join(';');
    container.appendChild(p);
  }
})();

/* ================================================================
   SCROLL REVEAL
   ================================================================ */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('shown');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

/* Ajouter la classe reveal + délais aux éléments cibles */
function attachReveal() {
  /* En-têtes de section */
  document.querySelectorAll('.app-header, .app-desc').forEach(el => {
    el.classList.add('reveal');
    revealObs.observe(el);
  });

  /* Cartes de fonctionnalités */
  document.querySelectorAll('.feat').forEach((el, i) => {
    el.classList.add('reveal', `reveal-d${(i % 6) + 1}`);
    revealObs.observe(el);
  });

  /* Galeries */
  document.querySelectorAll('.phone-card, .game-card').forEach((el, i) => {
    el.classList.add('reveal', `reveal-d${(i % 3) + 1}`);
    revealObs.observe(el);
  });

  /* CTAs */
  document.querySelectorAll('.app-cta, .free-badge, .gallery-heading, .pa-splash-btn').forEach(el => {
    el.classList.add('reveal');
    revealObs.observe(el);
  });

  /* Section support */
  document.querySelectorAll('.support-icons, .support-title, .support-body, .support-section .btn, .support-note').forEach((el, i) => {
    el.classList.add('reveal', `reveal-d${i + 1}`);
    revealObs.observe(el);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', attachReveal);
} else {
  attachReveal();
}

/* ================================================================
   LIGHTBOX
   ================================================================ */
const lightbox        = document.getElementById('lightbox');
const lightboxImg     = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');

function openLightbox(src, caption) {
  lightboxImg.src = src;
  lightboxImg.alt = caption || '';
  lightboxCaption.textContent = caption || '';
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  lightbox.querySelector('.lightbox-close').focus();
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => { lightboxImg.src = ''; }, 300);
}

/* Fermer avec Echap */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
});

/* Swipe bas pour fermer sur mobile */
let touchY0 = 0;
lightbox.addEventListener('touchstart', e => { touchY0 = e.touches[0].clientY; }, { passive: true });
lightbox.addEventListener('touchend', e => {
  if (Math.abs(e.changedTouches[0].clientY - touchY0) > 70) closeLightbox();
}, { passive: true });

/* Rendre openLightbox / closeLightbox accessibles globalement (appelés depuis le HTML) */
window.openLightbox  = openLightbox;
window.closeLightbox = closeLightbox;

/* ================================================================
   SMOOTH SCROLL — ancres internes
   ================================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = header.offsetHeight + 8;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  });
});
