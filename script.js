function enviar() {
  // Tomar valores
  const nombre  = document.getElementById("nombre").value.trim();
  const email   = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Validaciones básicas
  if (!nombre) {
    alert("Por favor, ingresá tu nombre.");
    return;
  }
  if (!email) {
    alert("Por favor, ingresá tu email.");
    return;
  }

  if (!mensaje) {
    alert("Por favor, escribí un mensaje.");
    return;
  }

  // Si todo está bien, mostrar contenido
  alert(
    `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`
  );

  // limpiar los campos
  document.getElementById("form-contacto").reset();

  //scroll a inicio
  document.getElementById("inicio").scrollIntoView({ behavior: "smooth" });
}
