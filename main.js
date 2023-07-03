// Definimos una variable numérica

let edad = Number(prompt("Ingrese su edad: "));

// Usamos un condicional para evaluar si la edad es mayor o igual a 18
if (edad >= 18) {
  alert("Eres mayor de edad");
} else {
  alert("Eres menor de edad");
}

// Usamos un ciclo for para imprimir los números del 1 al número ingresado por el usuario

let numero = Number(prompt("Ingrese un número:"));

for (let i = 1; i <= numero; i++) {
  alert(i);
}


//Simulador de compras

let productos = [
  { nombre: "Bulon", precio: 20 },
  { nombre: "Pintura", precio: 40 },
  { nombre: "Ruleman", precio: 60 },
  { nombre: "Alambre", precio: 10 },
];
// Creamos un objeto para representar el carrito de compras
let carrito = {
  items: [],
  total: 0,

  // Método para agregar un producto al carrito
  agregarProducto: function (producto) {
    this.items.push(producto);
    this.total += producto.precio;
  },
};
// Pedimos al usuario que seleccione los productos que desea comprar
let seleccion = "";
do {
  // Mostramos los productos disponibles al usuario
  alert("Productos disponibles:");
  for (let i = 0; i < productos.length; i++) {
    alert(i + ". " + productos[i].nombre + " - $" + productos[i].precio);
  }

  // Pedimos al usuario que seleccione un producto, o que escriba "fin" si ya no desea comprar más productos
  seleccion = prompt(
    "Seleccione un producto para agregar al carrito, o escriba 'fin' para terminar:"
  );

  // Se agrega el producto al carrito, si el producto existe en la lista
  if (seleccion >= 0 && seleccion < productos.length) {
    let productoSeleccionado = productos[seleccion];
    carrito.agregarProducto(productoSeleccionado);
    alert("Producto agregado al carrito:", productoSeleccionado.nombre);
  } else if (seleccion !== "fin") {
    alert(
      "Selección inválida. Por favor seleccione un número de la lista o escriba 'fin' para terminar."
    );
  }
} while (seleccion !== "fin");

// Mostramos el contenido final del carrito y el precio total
alert("Contenido del carrito:");
for (let i = 0; i < carrito.items.length; i++) {
  alert(carrito.items[i].nombre + " - $" + carrito.items[i].precio);
}
alert("Precio total: $" + carrito.total);
