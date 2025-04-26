// Seleccionar el formulario en el DOM
const form = document.getElementById("myForm");
// Se selecciona el formulario con el id "myForm" para poder manejar sus eventos y datos.

// Añadir un evento "submit" al formulario
form.addEventListener("submit", (event) => {
  // Evitar el comportamiento por defecto del formulario (enviar datos automáticamente)
  event.preventDefault();

  // Obtener el valor del campo "name" del formulario
  const name = form.elements["name"].value;
  console.log(name); // Mostrar el valor del campo "name" en la consola

  // Validar que el nombre tenga al menos 3 caracteres
  if (name.length < 3) {
    alert("El nombre necesita más de 3 letras");
    return; // Detener la ejecución si la validación falla
  }

  // Obtener el valor del campo "email" del formulario
  const email = form.elements["email"].value;
  console.log(email); // Mostrar el valor del campo "email" en la consola

  // Validar que el correo contenga un "@" (validación básica)
  if (!email.includes("@")) {
    alert("Please enter a valid email address");
    return; // Detener la ejecución si la validación falla
  }

  // Mostrar un mensaje de éxito si todas las validaciones pasan
  alert("Formulario enviado exitosamente!");

  // Mostrar en la consola los datos del usuario
  console.log(`El nombre del usuario es: ${name} y su correo es: ${email}`);

  // Crear un objeto con los datos del formulario
  const formData = {
    name: name,
    email: email,
  };

  // Mostrar el objeto con los datos del formulario en la consola
  console.log(formData);
});
