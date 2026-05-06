// Animación de entrada (Fade In)
const elements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
elements.forEach(el => observer.observe(el));

// Función de envío con EmailJS
function handleSubmit(event) {
  event.preventDefault();

  const btn = event.target.querySelector('button');
  const originalText = btn.textContent;
  
  // Feedback visual de carga
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  // REEMPLAZA ESTOS VALORES CON TUS IDs DEL PANEL DE EMAILJS
  const serviceID = 'service_232tqrb';
  const templateID = 'template_0vla1eg';

  // Envío del formulario completo
  emailjs.sendForm(serviceID, templateID, event.target)
    .then(() => {
      // Éxito: Ocultar formulario y mostrar mensaje de confirmación
      document.getElementById('contacto-form').style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    }, (err) => {
      // Error: Reactivar el botón para reintentar
      btn.textContent = originalText;
      btn.disabled = false;
      console.error("Fallo en el envío:", err);
      alert("Hubo un error al enviar el mensaje. Por favor, revisa tu conexión e intenta de nuevo.");
    });
}

// Scroll suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});