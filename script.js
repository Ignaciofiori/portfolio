function enviar(e) {
  e.preventDefault(); 

  const nombre  = document.getElementById("nombre").value.trim();
  const email   = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre) {
    alert("Por favor, ingresá tu nombre.");
    return;
  }
  if (!email) {
    alert("Por favor, ingresá tu email.");
    return;
  }
    //validación de formato de email con regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingresá un email válido (ej: nombre@dominio.com).");
    return;
  }
  if (!mensaje) {
    alert("Por favor, escribí un mensaje.");
    return;
  }


  emailjs.send("service_yj6yfl1", "template_uatoise", {
    nombre: nombre,
    email: email,
    mensaje: mensaje
  })
  .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Mensaje enviado correctamente.Me estaré comunicando con usted en breve ¡Gracias por contactarme!");
      
  
      document.getElementById("form-contacto").reset();
      

      document.getElementById("inicio").scrollIntoView({ behavior: "smooth" });
  })
  .catch(function(error) {
      console.error("FAILED...", error);
      alert(" Hubo un problema al enviar el mensaje. Intentalo de nuevo más tarde.");
  });
}