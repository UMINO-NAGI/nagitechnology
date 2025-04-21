const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('sidebar');
const themeToggle = document.getElementById('theme-toggle');
const tabLinks = document.querySelectorAll('nav a');
const tabs = document.querySelectorAll('.tab');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
    nav.classList.remove('active');
  }
});

document.getElementById('comentario-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (nome && mensagem) {
    const div = document.createElement('div');
    div.classList.add('comentario');
    div.innerHTML = `<strong>${nome}</strong><p>${mensagem}</p>`;

    document.getElementById('comentarios').prepend(div); // Mostra o mais recente no topo

    document.getElementById('comentario-form').reset();
  }
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Troca de abas
tabLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const tabId = link.getAttribute('data-tab');
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    nav.classList.remove('active');
  });
});
