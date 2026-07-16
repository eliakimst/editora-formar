// Comportamento compartilhado do cabeçalho (sombra ao rolar + menu mobile),
// usado em todas as páginas do site (index.html, colecoes.html, autores.html, sobre.html).
document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('siteHeader');
  var menuToggle = document.getElementById('menuToggle');
  var mainNav = document.getElementById('mainNav');

  function handleScroll() {
    if (window.scrollY > 8) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  menuToggle.addEventListener('click', function () {
    var isOpen = mainNav.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
});
