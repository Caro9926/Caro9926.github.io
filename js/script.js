// =========================================================
// Carolina Saavedra — Portafolio
// script.js compartido por todas las páginas del sitio
// =========================================================

(function () {
  const root = document.documentElement;

  const savedTheme = localStorage.getItem('cs-theme') || 'light';
  const savedLang = localStorage.getItem('cs-lang') || 'es';

  applyTheme(savedTheme);
  applyLang(savedLang);

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('cs-theme', theme);
    document.querySelectorAll('.theme-toggle').forEach((btn) => {
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a modo día' : 'Cambiar a modo noche');
    });
  }

  function applyLang(lang) {
    root.setAttribute('lang', lang);
    localStorage.setItem('cs-lang', lang);
    document.querySelectorAll('[data-' + lang + ']').forEach((el) => {
      el.textContent = el.getAttribute('data-' + lang);
    });
    document.querySelectorAll('.lang-switch button').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  document.querySelectorAll('.theme-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  });

  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  document.querySelectorAll('.hotspot[data-href]').forEach((btn) => {
    btn.addEventListener('click', () => {
      window.location.href = btn.dataset.href;
    });
  });

  // Menú mobile (hamburguesa)
  const toggler = document.querySelector('.navbar-toggler');
  const navList = document.getElementById('navlist');
  if (toggler && navList) {
    toggler.addEventListener('click', () => navList.classList.toggle('open'));
  }
})();
