// script.js — NAGI TECHNOLOGY

// Alternância de Tema Claro/Escuro
const toggleButton = document.getElementById('theme-toggle');
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
      toggleButton.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      toggleButton.textContent = '🌙';
    }
  });
}

// Aplicar tema salvo ao carregar
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    if (toggleButton) toggleButton.textContent = '☀️';
  } else {
    if (toggleButton) toggleButton.textContent = '🌙';
  }

  // Fade-in para seções ao rolar
  const sections = document.querySelectorAll('main section, main article');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  sections.forEach(section => {
    section.classList.add('fade');
    observer.observe(section);
  });
});

// Scroll suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Alerta para links inativos
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    alert("Este link ainda não está disponível.");
  });
});

// Validação do formulário de contato
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.elements['name'] ? form.elements['name'].value.trim() : '';
    const email = form.elements['email'] ? form.elements['email'].value.trim() : '';
    const message = form.elements['message'] ? form.elements['message'].value.trim() : '';
    const formMessage = document.getElementById('form-message');

    if (!name || !email || !message) {
      formMessage.textContent = 'Por favor, preencha todos os campos.';
      formMessage.style.color = 'red';
    } else {
      formMessage.textContent = 'Mensagem enviada com sucesso. Obrigado pelo contato!';
      formMessage.style.color = 'green';
      form.reset();
    }
  });
}
