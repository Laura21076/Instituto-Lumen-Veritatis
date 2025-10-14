<script>
    // ==============================================
    // 1. FUNCIONALIDAD DEL MODAL (Ampliación de Imágenes)
    // ==============================================
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("imgModalContent");
    
    // Función para abrir el modal
    function openModal(imageSrc, altText) {
        modal.style.display = "block";
        modalImg.src = imageSrc;
        modalImg.alt = altText;
        // Opcional: añade la descripción si la necesitas en el modal
        // document.getElementById("caption").innerHTML = altText; 
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Cerrar el modal al hacer clic en la X (asegúrate de que el span con clase 'close' tenga onclick="closeModal()")
    
    // Cerrar el modal al hacer clic fuera de la imagen (en el fondo oscuro)
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }


    // ==============================================
    // 2. FUNCIONALIDAD DEL HEADER (Menú Móvil)
    // ==============================================
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuButton && navLinks) {
        // Alternar la clase 'active' para mostrar/ocultar el menú
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace (solo en móviles/tabletas)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                // Se cierra si la pantalla es menor o igual a 992px (estilo CSS)
                if (window.innerWidth <= 992) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // ==============================================
    // 3. FUNCIONALIDAD DEL FOOTER (Año actual)
    // ==============================================
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // ==============================================
    // 4. FUNCIONALIDAD DEL FORMULARIO DE CONTACTO (Simulación)
    // ==============================================
    const contactForm = document.getElementById('contactForm');
    const formSuccessMessage = document.getElementById('form-success');
    
    if (contactForm && formSuccessMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 1. Muestra el mensaje de éxito
            formSuccessMessage.classList.remove('hidden');
            formSuccessMessage.classList.add('visible'); 
            
            // 2. Limpia el formulario
            contactForm.reset();
            
            // 3. Oculta el mensaje después de 5 segundos
            setTimeout(() => {
                formSuccessMessage.classList.remove('visible'); 
                formSuccessMessage.classList.add('hidden'); 
            }, 5000);
        });
    }

</script>
