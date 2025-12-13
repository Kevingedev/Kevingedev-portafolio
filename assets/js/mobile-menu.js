document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav');

    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function () {
            nav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function (event) {
            const isClickInsideNav = nav.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
});

