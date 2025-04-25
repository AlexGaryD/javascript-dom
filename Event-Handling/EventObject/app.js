// Seleccionar el botón en el DOM
const button = document.querySelector("button");
// Selecciona el primer elemento <button> que aparece en el documento HTML.

// Definir una función de callback para manejar el evento "click"
const buttonClicked = (event) => {
  // `event` es el objeto del evento que contiene información sobre el evento que ocurrió.

  console.log(event.target);
  // Muestra en la consola el elemento HTML que disparó el evento (en este caso, el botón).

  console.log(event.target.id);
  // Muestra el atributo `id` del elemento que disparó el evento.
  // Si el botón no tiene un `id`, imprimirá `undefined`.

  console.log(event.target.textContent);
  // Muestra el texto contenido dentro del botón que disparó el evento.
};

// Añadir un evento "click" al botón
button.addEventListener("click", buttonClicked);
// Escucha el evento "click" en el botón y ejecuta la función `buttonClicked` cuando ocurre.
