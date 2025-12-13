document.addEventListener('DOMContentLoaded', function () {
    const navElement = document.getElementById('nav');

    if (!navElement) {
        console.error('Element with id "nav" not found');
        return;
    }

    function handleScroll() {
        // No aplicar cambios si el menú móvil está activo
        if (navElement.classList.contains('active')) {
            return;
        }

        // No aplicar cambios en pantallas móviles
        if (window.innerWidth <= 768) {
            return;
        }

        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const thresholdDown = viewportHeight * 0.55;
        const thresholdUp = viewportHeight * 0.50;

        if (scrollPosition > thresholdDown) {
            if (navElement.classList.contains('nav-links')) {
                navElement.classList.remove('nav-links');
                navElement.classList.add('hidden-nav-links');
            }
        } else if (scrollPosition < thresholdUp) {
            if (navElement.classList.contains('hidden-nav-links')) {
                navElement.classList.remove('hidden-nav-links');
                navElement.classList.add('nav-links');
            }
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Handle window resize
    window.addEventListener('resize', function() {
        // Si se redimensiona a móvil, asegurar que el nav vuelva a su estado normal
        if (window.innerWidth <= 768) {
            if (navElement.classList.contains('hidden-nav-links')) {
                navElement.classList.remove('hidden-nav-links');
                navElement.classList.add('nav-links');
            }
        }
    });

    // Initial check in case the page is loaded scrolled down
    handleScroll();
});
