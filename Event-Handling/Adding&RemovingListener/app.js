// Seleccionar el contenedor con la clase "container"
const container = document.querySelector(".container");

// Seleccionar el botón
const button = document.querySelector("button");

// Añadir un evento "mouseover" al contenedor
container.addEventListener("mouseover", () => {
  container.style.backgroundColor = "MediumVioletRed"; // Cambiar el fondo del contenedor a azul cuando el mouse pasa por encima
});

// Añadir un evento "mouseout" al contenedor
container.addEventListener("mouseout", () => {
  container.style.backgroundColor = "Crimson"; // Cambiar el fondo del contenedor a rojo cuando el mouse sale
});

const buttonClickCallback = () => {
  alert("Button Clicked!"); // Mostrar una alerta cuando se hace clic en el botón
};
// Añadir el evento "click" al botón
button.addEventListener("click", buttonClickCallback);


// // Definir una función de callback para el evento "click" del botón
// const buttonClickCallback = () => {
//   alert("Button Clicked!"); // Mostrar una alerta cuando se hace clic en el botón
// };

// // Añadir el evento "click" al botón
// button.addEventListener("click", buttonClickCallback);

// Quitar el evento "click" del botón después de 2 segundos
setTimeout(() => {
button.removeEventListener("click", buttonClickCallback); // Eliminar el evento "click" asociado al botón
}, 6000);
