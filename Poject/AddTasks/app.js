// Seleccionar el formulario del DOM
const taskForm = document.getElementById("task-form");
// Se selecciona el formulario con el id "task-form" para manejar el evento de envío.

// Seleccionar la lista de tareas del DOM
const taskList = document.getElementById("task-list");
// Se selecciona el contenedor <ul> donde se agregarán las tareas.

// Manejar el evento "submit" del formulario
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Se evita el comportamiento por defecto del formulario (recargar la página).

  const taskInput = document.getElementById("task-input");
  // Se selecciona el campo de entrada donde el usuario escribe la tarea.

  const task = taskInput.value;
  // Se obtiene el valor ingresado por el usuario en el campo de entrada.

  console.log(task);
  // Se imprime la tarea en la consola para depuración.

  if (task) {
    // Si el campo no está vacío:
    taskList.append(createTaskElement(task));
    // Se crea un nuevo elemento de tarea y se agrega a la lista de tareas.

    taskInput.value = "";
    // Se limpia el campo de entrada después de agregar la tarea.
  }
});

// Función para crear un elemento de tarea
function createTaskElement(task) {
  const li = document.createElement("li");
  // Se crea un nuevo elemento <li> para representar la tarea.

  li.textContent = task;
  // Se asigna el texto de la tarea al elemento <li>.

  li.append(createButton("❌", "delete-btn"), createButton("✏️", "edit-btn"));
  // Se agregan botones de eliminar y editar al elemento <li>.

  return li;
  // Se devuelve el elemento <li> creado.
}

// Función para crear un botón
function createButton(text, className) {
  const btn = document.createElement("span");
  // Se crea un nuevo elemento <span> para el botón.

  btn.textContent = text;
  // Se asigna el texto del botón (por ejemplo, "❌" o "✏️").

  btn.className = className;
  // Se asigna una clase al botón para estilizarlo o identificarlo.

  return btn;
  // Se devuelve el botón creado.
}
