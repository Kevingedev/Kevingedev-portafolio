document.addEventListener('DOMContentLoaded', function () {
    const typingTextElement = document.getElementById('typing-text');

    // El texto que quieres que se "escriba"
    const textToType = "Kevin Ruiz";

    let charIndex = 0; // Índice para recorrer el texto
    const typingSpeed = 50; // Velocidad de escritura en milisegundos por caracter

    function typeWriter() {
        if (charIndex < textToType.length) {
            // Añade el siguiente caracter al elemento
            typingTextElement.textContent += textToType.charAt(charIndex);
            charIndex++;

            // Llama a la función de nuevo después de un pequeño retraso
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Cuando todo el texto ha sido escrito, puedes parar el cursor si quieres
            // document.querySelector('.cursor').style.display = 'none'; 
        }
    }

    // Inicia la animación cuando la página esté cargada
    typeWriter();


    // 1. Selecciona todos los elementos que deseas observar
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    // 2. Define las Opciones del Observador
    const observerOptions = {
        // root: null significa que el viewport (ventana del navegador) es el área de intersección.
        root: null,
        // rootMargin: '0px' significa que el cálculo se hace en el borde exacto del viewport.
        rootMargin: '0px',
        // threshold: 0.1 significa que la función se ejecuta cuando el 10% del elemento es visible.
        threshold: 0.1
    };

    // 3. Crea la Función de Callback del Observador
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // entry.isIntersecting es true si el elemento está visible en el viewport
            if (entry.isIntersecting) {
                // Añade la clase que activa la animación CSS
                entry.target.classList.add('fade-in-up');

                // Opcional: Detener la observación una vez que el elemento ha sido animado
                observer.unobserve(entry.target);
            }
        });
    };

    // 4. Inicializa el Observador
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 5. Asigna el observador a cada elemento
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

const cards = document.querySelectorAll('.cards-section .card');

const options = {
    root: null,
    threshold: 0.2,
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('show');
                }, index * 100); // delay entre cada card
            });
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(callback, options);
const section = document.querySelector('.cards-section');
if (section) observer.observe(section);

