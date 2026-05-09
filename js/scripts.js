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
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
    elementsToReveal.forEach(element => {
        observer.observe(element);
    });
}

function iniciarMenuMovil() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const menuOverlay = document.getElementById('menu-overlay');
    
    if (menuToggle && mainNav) {
        const toggleMenu = () => {
            const isOpen = mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active', isOpen);
            if (menuOverlay) {
                menuOverlay.classList.toggle('active', isOpen);
            }
        };

        menuToggle.addEventListener('click', toggleMenu);

        if (menuOverlay) {
            menuOverlay.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                menuOverlay.classList.remove('active');
            });
        }

        // Cerrar menú al hacer clic en un enlace
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                if (menuOverlay) {
                    menuOverlay.classList.remove('active');
                }
            });
        });
    }
}

// Ejecutar cuando el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {
    iniciarAnimaciones();
    iniciarMenuMovil();
});


