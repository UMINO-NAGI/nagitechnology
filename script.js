document.addEventListener('DOMContentLoaded', () => {
    const explorarBtn = document.getElementById('explorarBtn');
    const contatoForm = document.getElementById('contatoForm');

    explorarBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('#sobre').offsetTop,
            behavior: 'smooth'
        });
    });

    contatoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        alert(`Email ${email} enviado com sucesso!`);
    });
});
