
// Inicializar emailjs 



document.getElementById('form')
 document.addEventListener('submit', function(event) {
   event.preventDefault();


   /*const serviceID = 'default_service';
   const templateID = 'template_5d3862p';*/

   /*emailjs.sendForm(serviceID, templateID, this)*/
    /*.then(() => {
      btnEnviar.value = 'Enviando Email';
      Swal.fire({
        title: 'Email enviado correctamente!!!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }, (err) => {
      btnEnviar.value = 'Send Email';
      alert(JSON.stringify(err));
    });*/
  })

document.addEventListener('DOMContentLoaded', function() {
  const registrationForm = document.getElementById('registration-form');
  
  if (registrationForm) {
    registrationForm.addEventListener('submit', async function(event) {
      event.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const telefono = document.getElementById("tel").value;
      const comentario = document.getElementById("comentario").value;

      // Validar campos
      if (nombre.trim() === "" || email.trim() === "" || telefono.trim() === "" || comentario.trim() === "") {
        Swal.fire('Error', 'Por favor, completa todos los campos correctamente', 'error');
        return;
      }

      // Comprobar si el email ya existe en el LocalStorage
      if (existeEmailEnLocalStorage(email)) {
        Swal.fire('Error', 'El email ya ha sido registrado.', 'error');
        return;
      }

      // Guardar en LocalStorage
      guardarEnLocalStorage(nombre, email, telefono, comentario);

      // Inicializar EmailJS con tu ID de usuario
      emailjs.init("4bbCK443WVaRgg872");

      const serviceID = 'default_service';
      const templateID = 'template_5d3862p';

      try {
        const response = await emailjs.sendForm(serviceID, templateID, this);
        if (response.status === 200) {
          Swal.fire('Éxito', 'Formulario enviado correctamente', 'success');
          registrationForm.reset();
        } else {
          Swal.fire('Error', 'Hubo un problema al enviar el formulario. Por favor, intenta nuevamente más tarde.', 'error');
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        Swal.fire('Error', 'Hubo un problema al enviar el formulario. Por favor, intenta nuevamente más tarde.', 'error');
      }
    });
  }
});

// Función para verificar si el email ya existe en LocalStorage
function existeEmailEnLocalStorage(email) {
  const contactosGuardados = obtenerContactosLocalStorage();
  return contactosGuardados.some(contacto => contacto.email === email);
}

// Función para guardar el contacto en LocalStorage
function guardarEnLocalStorage(nombre, email, telefono, comentario) {
  const nuevoContacto = { nombre, email, telefono, comentario };
  const contactosGuardados = obtenerContactosLocalStorage();
  contactosGuardados.push(nuevoContacto);
  localStorage.setItem("contactos", JSON.stringify(contactosGuardados));
}

// Función para obtener los contactos almacenados en LocalStorage
function obtenerContactosLocalStorage() {
  const contactosJSON = localStorage.getItem("contactos");
  return contactosJSON ? JSON.parse(contactosJSON) : [];
}

const btnEnviar = document.getElementById('button');

btnEnviar.addEventListener('click', () => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Email enviado!!',
    showConfirmButton: false,
    timer: 1500
  })
})
