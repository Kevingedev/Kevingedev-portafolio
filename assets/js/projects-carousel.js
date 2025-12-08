// Carrusel de Proyectos Minimalista
// Desliza las tarjetas de proyectos a izquierda/derecha

document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const cards = track.querySelectorAll('.project-card');
    const visibleCards = window.innerWidth < 900 ? 1 : 3;
    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 32; // 32px gap
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function showPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    function showNext() {
        if (currentIndex < cards.length - visibleCards) {
            currentIndex++;
            updateCarousel();
        }
    }

    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    // Responsive: actualizar visibleCards y resetear índice
    window.addEventListener('resize', () => {
        // No reinicia el índice, solo actualiza el carrusel
        updateCarousel();
    });

    // Inicializar
    updateCarousel();
});
