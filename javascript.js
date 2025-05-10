document.getElementById("scriptform").addEventListener("submit", function(evento) {
    evento.preventDefault();

var nombre = document.getElementById("nombre").value.trim();
var apellido = document.getElementById("apellido").value.trim();
var email = document.getElementById("email").value.trim();
var emailCorrecto = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var mensaje = document.getElementById("mensaje").value.trim();

var errores = "Informacion incompleta o errada.<br>";

if (nombre === "") {
      errores += "El campo Nombre es obligatorio.<br>";
    }

if (apellido === "") {
      errores += "El campo Apellido es obligatorio.<br>";
    }


if (!emailCorrecto.test(email)) {
      errores += "El email no es válido.<br>";
    }

if (mensaje === "") {
      errores += "El campo Mensaje es obligatorio.<br>";
    }

 var divErrores = document.getElementById("mensajesError");
if (errores !== "") {
      divErrores.innerHTML = errores;
    } 
else {divErrores.innerHTML = "";
      alert("Formulario enviado correctamente.");
      // Aquí podrías enviar el formulario con: this.submit();
    }
  });