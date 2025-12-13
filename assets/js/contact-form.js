document.addEventListener('DOMContentLoaded', function () {
    // Verificar si el formulario se envió correctamente (Netlify redirige con parámetro)
    const urlParams = new URLSearchParams(window.location.search);
    const successParam = urlParams.get('success');
    
    if (successParam === 'true') {
        showSuccessMessage();
        // Limpiar la URL sin recargar la página
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Función para mostrar el mensaje de éxito
    function showSuccessMessage() {
        const successMessage = document.getElementById('success-message');
        const contactForm = document.getElementById('contact-form');
        
        if (successMessage && contactForm) {
            // Ocultar el formulario
            contactForm.style.display = 'none';
            
            // Mostrar el mensaje de éxito
            successMessage.style.display = 'block';
            
            // Scroll suave al mensaje de éxito
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

