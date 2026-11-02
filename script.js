// Language toggle (runs immediately to avoid flash)
(function(){
  try{document.documentElement.setAttribute('data-lang',localStorage.getItem('grobio-lang')||'en')}catch(e){}
})();

document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  function onScroll() {
    if (window.scrollY > 40) header.classList.add('solid');
    else header.classList.remove('solid');
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  // Language toggle
  function setLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    try { localStorage.setItem('grobio-lang', lang); } catch(e) {}
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }
  window.setLang = setLang;

  // init button active state
  var cur = document.documentElement.getAttribute('data-lang') || 'en';
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === cur);
  });
});
