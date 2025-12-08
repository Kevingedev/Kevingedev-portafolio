document.addEventListener('DOMContentLoaded', function () {
    const navElement = document.getElementById('nav');

    if (!navElement) {
        console.error('Element with id "nav" not found');
        return;
    }

    function handleScroll() {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const thresholdDown = viewportHeight * 0.55; // 90vh
        const thresholdUp = viewportHeight * 0.50; // 80vh - Buffer to prevent flickering

        if (scrollPosition > thresholdDown) {
            // Scrolled down past 90vh
            if (navElement.classList.contains('nav-links')) {
                navElement.classList.remove('nav-links');
                navElement.classList.add('hidden-nav-links');
            }
        } else if (scrollPosition < thresholdUp) {
            // Scrolled up past 80vh
            if (navElement.classList.contains('hidden-nav-links')) {
                navElement.classList.remove('hidden-nav-links');
                navElement.classList.add('nav-links');
            }
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check in case the page is loaded scrolled down
    handleScroll();
});
