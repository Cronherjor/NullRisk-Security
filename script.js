// Animación de entrada (Fade In)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Función para el formulario con EmailJS
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector("button");
  btn.innerText = "Enviando...";
  btn.disabled = true;

  // Reemplaza con tus IDs reales de EmailJS
  const serviceID = "service_232tqrb"; 
  const templateID = "template_0vla1eg";

  emailjs.sendForm(serviceID, templateID, e.target)
    .then(() => {
      document.getElementById('contacto-form').reset();
      document.getElementById('contacto-form').style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    }, (err) => {
      btn.innerText = "Enviar Solicitud";
      btn.disabled = false;
      alert("Error en el envío. Por favor, intenta por WhatsApp.");
    });
}

// Función de Desofuscación de WhatsApp
function decodeWA(e) {
  // Fragmentamos el número para evitar el scraping automático
  const country = "57"; //codigo pais
  const area = "311"; //primeros 3 numeros
  const phone = "2731786"; //resto de numero
  
  const targetNumber = country + area + phone;
  const message = encodeURIComponent("Hola NullRisk Security, necesito una evaluación de seguridad para mi negocio.");
  
  // Se construye el enlace final dinámicamente al hacer clic
  document.getElementById('wa-secure-link').href = `https://wa.me/${targetNumber}?text=${message}`;
}