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

// Manejar eventos de clic en la lista de tareas
taskList.addEventListener("click", (event) => {
  // Se escucha el evento "click" en el contenedor <ul>.

  if (event.target.classList.contains("delete-btn")) {
    // Si el clic ocurrió en un botón con la clase "delete-btn":
    deleteTask(event.target.parentElement);
    // Se llama a la función para eliminar la tarea.
  } else if (event.target.classList.contains("edit-btn")) {
    // Si el clic ocurrió en un botón con la clase "edit-btn":
    editTask(event.target.parentElement);
    // Se llama a la función para editar la tarea.
  }
});

// Función para eliminar una tarea
function deleteTask(taskItem) {
  if (confirm("Estás segura / seguro de borrar este elemento?")) {
    // Se muestra un cuadro de confirmación antes de eliminar la tarea.
    taskItem.remove();
    // Se elimina el elemento <li> del DOM.
  }
}

// Función para editar una tarea
function editTask(taskItem) {
  const newTask = prompt("Edita la tarea:", taskItem.firstChild.textContent);
  // Se muestra un cuadro de diálogo para editar el contenido de la tarea.
  if (newTask !== null) {
    // Si el usuario ingresó un nuevo contenido:
    taskItem.firstChild.textContent = newTask;
    // Se actualiza el texto de la tarea.
  }
}
