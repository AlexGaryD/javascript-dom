// // Seleccionar el elemento con id "parent"
// const parent = document.getElementById("parent");
// console.log(parent); // Imprime el elemento <ul> con id "parent"

// // Obtener todos los elementos hijos directos del elemento "parent"
// const children = parent.children;
// console.log(children); // Imprime una HTMLCollection con los elementos <li> hijos directos

// // Obtener el primer elemento hijo del elemento "parent"
// const firstChild = parent.firstElementChild;
// console.log(firstChild); // Imprime el primer <li> dentro del <ul>

// // Obtener el último elemento hijo del elemento "parent"
// const lastChild = parent.lastElementChild;
// console.log(lastChild); // Imprime el último <li> dentro del <ul>

// // Obtener el elemento hermano anterior del elemento "parent"
// const previousSibling = parent.previousElementSibling;
// console.log(previousSibling); // Imprime el elemento hermano anterior (si existe)

// // Obtener el elemento hermano siguiente del elemento "parent"
// const nextSibling = parent.nextElementSibling;
// console.log(nextSibling); // Imprime el elemento hermano siguiente (si existe)

// // Nota: Las siguientes propiedades son colecciones o nodos en vivo o no en vivo del DOM
// children; // live HTMLCollection (actualiza automáticamente si el DOM cambia)
// childNodes; // live NodeList (incluye nodos de texto, comentarios y elementos)
// firstChild; // live NodeList (incluye nodos de texto)
// firstElementChild; // non-live HTMLCollection (solo incluye elementos)
// lastChild; // live NodeList (incluye nodos de texto)
// lastElementChild; // non-live HTMLCollection (solo incluye elementos)
// previousSibling; // live NodeList (incluye nodos de texto)
// previousElementSibling; // non-live HTMLCollection (solo incluye elementos)
// nextSibling; // live NodeList (incluye nodos de texto)
// nextElementSibling; // non-live HTMLCollection (solo incluye elementos)

// Seleccionar el primer elemento <li> dentro del documento
const children2 = document.querySelector("li");
console.log(children2); // Imprime el primer <li> encontrado en el DOM

// Obtener el nodo padre del elemento <li>
const parent2 = children2.parentNode;
console.log(parent2); // Imprime el nodo padre del <li> (en este caso, el <ul>)

// Obtener el elemento padre del elemento <li>
const grandParent = children2.parentElement;
console.log(grandParent); // Imprime el elemento padre del <li> (en este caso, el <ul>)

// Obtener el ancestro más cercano que coincida con el selector "menu"
const grandGrandParent = children2.closest("menu");
console.log(grandGrandParent); // Imprime el elemento <menu> más cercano que contiene al <li>

// Comentarios sobre las propiedades de navegación
// parentNode; // live NodeList (incluye nodos de texto y elementos)
// parentElement; // non-live HTMLCollection (solo incluye elementos)
// closest(selector); // Busca el ancestro más cercano que coincida con el selector (muy útil)
