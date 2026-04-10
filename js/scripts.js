function iniciarAnimaciones() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                // Removemos la clase cuando el elemento sale de la pantalla
                // para que la animación se repita al volver a bajar
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
    elementsToReveal.forEach(element => {
        observer.observe(element);
    });
}

// Ejecutar inmediatamente si el HTML ya cargó, de lo contrario esperar al evento.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarAnimaciones);
} else {
    iniciarAnimaciones();
}
