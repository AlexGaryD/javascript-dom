// Seleccionar el formulario del DOM
const taskForm = document.getElementById("task-form");
// Se selecciona el formulario con el id "task-form" para manejar el evento de envío.

// Seleccionar la lista de tareas del DOM
const taskList = document.getElementById("task-list");
// Se selecciona el contenedor <ul> donde se agregarán las tareas.

// Cargar las tareas desde Local Storage al iniciar la aplicación
loadTasks();

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

    storeTaskInLocalStorage(task);
    // Se guarda la tarea en Local Storage.

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

    removeTaskFromLocalStorage(taskItem.firstChild.textContent);
    // Se elimina la tarea de Local Storage.
  }
}

// Función para editar una tarea
function editTask(taskItem) {
  const newTask = prompt("Edita la tarea:", taskItem.firstChild.textContent);
  // Se muestra un cuadro de diálogo para editar el contenido de la tarea.

  if (newTask !== null) {
    // Si el usuario ingresó un nuevo contenido:
    const oldTask = taskItem.firstChild.textContent;
    taskItem.firstChild.textContent = newTask;
    // Se actualiza el texto de la tarea.

    updateTaskInLocalStorage(oldTask, newTask);
    // Se actualiza la tarea en Local Storage.
  }
}

// Función para guardar una tarea en Local Storage
function storeTaskInLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  // Se obtienen las tareas existentes en Local Storage o se inicializa un arreglo vacío.

  tasks.push(task);
  // Se agrega la nueva tarea al arreglo.

  localStorage.setItem("tasks", JSON.stringify(tasks));
  // Se guarda el arreglo actualizado en Local Storage.
}

// Función para cargar las tareas desde Local Storage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  // Se obtienen las tareas almacenadas en Local Storage o se inicializa un arreglo vacío.

  tasks.forEach((task) => {
    taskList.appendChild(createTaskElement(task));
    // Se crea un elemento de tarea para cada tarea almacenada y se agrega al DOM.
  });
}

// Función para eliminar una tarea de Local Storage
function removeTaskFromLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  // Se obtienen las tareas existentes en Local Storage.

  const updatedTasks = tasks.filter((t) => t !== task);
  // Se filtran las tareas para eliminar la tarea especificada.

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  // Se guarda el arreglo actualizado en Local Storage.
}

// Función para actualizar una tarea en Local Storage
function updateTaskInLocalStorage(oldTask, newTask) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  // Se obtienen las tareas existentes en Local Storage.

  const taskIndex = tasks.indexOf(oldTask);
  // Se encuentra el índice de la tarea antigua.

  if (taskIndex !== -1) {
    tasks[taskIndex] = newTask;
    // Se actualiza la tarea con el nuevo contenido.
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  // Se guarda el arreglo actualizado en Local Storage.
}
