
// Inicializar emailjs 

document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
  
    if (registrationForm) {
      registrationForm.addEventListener('submit', async function(event) {
        event.preventDefault();
  
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("tel").value;
  
        // Validar campos y lógica del formulario 
  
        if (nombre.trim() === "" || email.trim() === "" || telefono.trim() === "") {
          Swal.fire('Error', 'Por favor, completa todos los campos.', 'error');
          return;
        }
  
        const formData = {
          nombre: nombre,
          email: email,
          telefono: telefono
        };
  
        // Guardar el nuevo registro en LocalStorage
        let registrosGuardados = JSON.parse(localStorage.getItem("registros")) || [];
        registrosGuardados.push(formData);
        localStorage.setItem("registros", JSON.stringify(registrosGuardados));
  
        try {
          await enviarCorreoDeConfirmacion(email, nombre);
          Swal.fire('Éxito', 'Gracias por contactarnos te contestaremos a la brevedad.', 'success');

          
  
          // Limpiar formulario
          registrationForm.reset();
        } catch (error) {
          console.error("Error al enviar el correo de confirmación:", error);
          Swal.fire('Error', 'Hubo un problema al enviar el formulario.', 'error');
        }
      });
    }
  });
  
  async function enviarCorreoDeConfirmacion(destinatario, nombre) {
    emailjs.init("4bbCK443WVaRgg872"); 
  
    const mensaje = {
      to: destinatario,
      from: "sebasnsd13@gmail.com",
      subject: "Confirmación de recepción de formulario",
      text: `Hola ${nombre},\n\nHemos recibido tu formulario de contacto con éxito.\n\nSaludos`
      
    };
  
    await emailjs.send("default_service", "template_5d3862p", mensaje);
  }

  console.log("se envio formulario y mail con exito");

  document.getElementById('registration-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("tel").value;
  const comentario = document.querySelector(".text-area").value;

  // Validar campos (puedes agregar más validaciones aquí)
  if (nombre.trim() === "" || email.trim() === "" || telefono.trim() === "" || comentario.trim() === "") {
    Swal.fire('Error', 'Por favor, completa todos los campos correctamente', 'error');
    return;
  }

  // Comprobar si el email ya existe en el LocalStorage (necesitas implementar esta función)
  if (existeEmailEnLocalStorage(email)) {
    Swal.fire('Error', 'El email ya ha sido registrado.', 'error');
    return;
  }

  // Guardar en LocalStorage (necesitas implementar esta función)
  guardarEnLocalStorage(nombre, email, telefono, comentario);

  // Mostrar SweetAlert de éxito
  Swal.fire('Éxito', 'Formulario enviado correctamente', 'success');

  // Restablecer el formulario
  document.getElementById('registration-form').reset();
});