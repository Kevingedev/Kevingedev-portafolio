// Ejemplo BÁSICO en JavaScript
const body = document.body;
const iconMode = document.getElementById('dark-mode-icon');
const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {

    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        iconMode.classList.remove('fa-sun');
        iconMode.classList.add('fa-moon');
    } else {
        iconMode.classList.remove('fa-moon');
        iconMode.classList.add('fa-sun');
    }
    // Aquí también guardarías la preferencia en localStorage
    // localStorage.setItem('darkMode', body.classList.contains('light-mode'));
});