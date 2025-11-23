document.addEventListener('DOMContentLoaded', function () {
    const typingTextElement = document.getElementById('typing-text');

    // El texto que quieres que se "escriba"
    const textToType = "Kevin Ruiz";

    let charIndex = 0; // Índice para recorrer el texto
    const typingSpeed = 200; // Velocidad de escritura en milisegundos por caracter

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
});