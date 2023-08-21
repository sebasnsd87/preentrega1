
// Inicializar emailjs 

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let telefono = document.getElementById("telefono").value;
  let email = document.getElementById("email").value;
  let mensaje = document.getElementById("mensaje").value;

  let parametros = {
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    email: email,
    mensaje: mensaje
  };

  emailjs.send("default_service", "template_5d3862p", parametros)
    .then(function(response) {
      Toastify({
        text: "Se envio el Email!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    });
    formulario.reset()
});

//const btn = document.getElementById("cesta-carrito")

//if (btn !== null) {
  
  //}
