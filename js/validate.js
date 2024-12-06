
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        return; // se detiene el envío del formulario
    }

   
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        return; // se detiene  el envío del formulario
    } else if (!emailPattern.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return; // se detiene  el envío del formulario
    }

    
    if (message.trim() === "") {
        alert("Por favor, ingresa un mensaje.");
        return; // se detiene  el envío del formulario
    }

   
    alert("Formulario enviado exitosamente!");
    form.submit(); 
});
