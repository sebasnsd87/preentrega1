const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('boton-eliminar')) {
        eliminarProductoCarrito(e.target.value)
    }
})

const btn1 = document.getElementById('btn1')

btn1.addEventListener('click', () => {
  Swal.fire({
    position: 'top-start',
    icon: 'success',
    title: 'GRACIAS POR SU COMPRA',
    showConfirmButton: false,
    timer: 1500
  })
})

const btn2 = document.getElementById('btn2')

btn2.addEventListener('click', () => {
  Swal.fire({
    title: 'Esta seguro?',
    text: "Se va a vaciar el carrito!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'SI',
    cancelButtonText: 'NO'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Se vacio el carrito',
        'success'
      )
    }
  })
})