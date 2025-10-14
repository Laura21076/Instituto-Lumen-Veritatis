// Actualizar año en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simulación de envío de formulario
const contactForm = document.getElementById('contactForm');
const formSuccessMessage = document.getElementById('form-success');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formSuccessMessage.classList.remove('hidden');
    formSuccessMessage.classList.add('visible'); // Muestra el mensaje
    contactForm.reset();
    setTimeout(() => {
        formSuccessMessage.classList.remove('visible'); // Oculta después de 5s
        // Opcional: contactForm.classList.add('hidden'); si quieres ocultar el formulario
    }, 5000);
});

// Menú móvil
const mobileMenuButton = document.getElementById('mobile-menu-button');
const navLinks = document.getElementById('nav-links');

mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.getElementById('mobile-menu-button').addEventListener('click', function() {
        var navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace (solo en móviles)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                document.getElementById('nav-links').classList.remove('active');
            }
        });
    });
});
