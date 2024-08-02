document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada!');

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensagem enviada!');
        contactForm.reset();
    });
});
