// Seleccionamos el formulario
var formulario = document.getElementById("scriptform");

// Escuchamos el evento de envío
formulario.addEventListener("submit", function(evento) {
  evento.preventDefault(); // Evitamos que se envíe el formulario

  // Capturamos los valores ingresados
  let nombre = document.getElementById("nombre").value.trim();
  let apellido = document.getElementById("apellido").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();

  // Lista para errores
  var errores = [];

  // Validaciones básicas
  if (nombre.length < 3) {
    errores.push("El nombre debe tener al menos 3 caracteres.");
  }

  if (apellido.length < 3) {
    errores.push("El apellido debe tener al menos 3 caracteres.");
  }

  // Validación de email con expresión regular
  var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(email)) {
    errores.push("El email no es válido.");
  }

  if (mensaje === "") {
    errores.push("El mensaje no puede estar vacío.");
  }

  // Referencias a los elementos para mostrar resultado
  var divErrores = document.getElementById("errores");
  var divResultado = document.getElementById("resultado");

  // Si hay errores, los mostramos y abrimos una nueva pestaña con mensaje de error
  if (errores.length > 0) {
    divErrores.style.color = "red";
    divErrores.innerHTML = errores.join("<br>");
    divResultado.innerHTML = "";

    // Abrimos nueva pestaña con alerta de error
    let nuevaVentana = window.open("", "_blank");
    nuevaVentana.document.write("<h1 style='color:red;'>⚠️ Error en el formulario</h1>");
    nuevaVentana.document.write("<p>Por favor corrige los siguientes errores:</p><ul>");
    errores.forEach(function(error) {
      nuevaVentana.document.write("<li>" + error + "</li>");
    });
    nuevaVentana.document.write("</ul>");
  } else {
    // No hay errores: mostramos mensaje de bienvenida y nueva pestaña
    divErrores.innerHTML = "";
    divResultado.style.color = "green";
    divResultado.innerHTML = `¡Bienvenido ${nombre} ${apellido}! Tu mensaje ha sido enviado correctamente.`;

    // Abrimos nueva pestaña con mensaje de bienvenida
    let nuevaVentana = window.open("", "_blank");
    nuevaVentana.document.write(`<h1 style='color:green;'>✅ ¡Bienvenido ${nombre} ${apellido}!</h1>`);
    nuevaVentana.document.write("<p>Gracias por tu mensaje. Te responderé pronto.</p>");
  }
});