// const listItems = document.querySelectorAll("li");
// // Se seleccionan todos los elementos <li> dentro del documento.

// listItems.forEach((item) => {
//   // Se itera sobre cada elemento <li> encontrado.
//   item.addEventListener("click",
//     // Se añade un evento "click" a cada elemento <li>.
//     (event) => {
//       // `event` es el objeto del evento que contiene información sobre el evento.
//       event.target.classList.toggle
//       // `event.target` es el elemento que disparó el evento.
//         ("highlight");
//       // `classList.toggle("highlight")` agrega la clase "highlight" si no está presente,
//     });
// });

// Seleccionar la lista en el DOM
const list = document.querySelector("ul");
// Se selecciona el elemento <ul> que contiene los elementos <li> de la lista.

// Añadir un evento "click" al elemento padre (ul)
list.addEventListener("click", (event) => {
  // Escucha el evento "click" en el elemento <ul>.

  // Verificar si el elemento clickeado es un <li> o está dentro de un <li>
  const listItem = event.target.closest("li");
  // `event.target` es el elemento que disparó el evento.
  // `closest("li")` busca el elemento <li> más cercano al elemento clickeado.

  if (listItem) {
    // Si se encontró un elemento <li>, alternar la clase "highlight".
    listItem.classList.toggle("highlight");
    // `classList.toggle("highlight")` agrega la clase "highlight" si no está presente,
    // o la elimina si ya está presente.
  }
});
