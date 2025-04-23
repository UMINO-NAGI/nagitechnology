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

// Função para carregar comentários do localStorage
function carregarComentarios() {
  const comentariosSalvos = JSON.parse(localStorage.getItem('comentariosNAGI')) || [];
  const comentariosDiv = document.getElementById('comentarios');
  comentariosDiv.innerHTML = '';

  comentariosSalvos.forEach(comentario => {
    const div = document.createElement('div');
    div.classList.add('comentario');
    div.innerHTML = `<strong>${comentario.nome}</strong><p>${comentario.mensagem}</p>`;
    comentariosDiv.prepend(div);
  });
}

// Função para salvar novo comentário no localStorage
function salvarComentario(nome, mensagem) {
  const comentariosSalvos = JSON.parse(localStorage.getItem('comentariosNAGI')) || [];
  comentariosSalvos.push({ nome, mensagem });
  localStorage.setItem('comentariosNAGI', JSON.stringify(comentariosSalvos));
}

// Evento de envio do formulário
document.getElementById('comentario-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (nome && mensagem) {
    salvarComentario(nome, mensagem);
    carregarComentarios(); // Reexibe com o novo
    document.getElementById('comentario-form').reset();
  }
});

// Carrega os comentários ao abrir a página
window.addEventListener('DOMContentLoaded', carregarComentarios);


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
