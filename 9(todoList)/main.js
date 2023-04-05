const input = document.querySelector(".input-text");
const agregarForm = document.querySelector(".agregarForm");
const ulTareas = document.querySelector(".listaTareas");
const borrarTodo = document.querySelector(".borrarTodo");

// traer del localStorage
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

// guardar en localStorage
const guardarLocalStorage = (ulTareas) => {
  localStorage.setItem("tareas", JSON.stringify(ulTareas));
};

// crear template html para cada tarea
const crearTarea = (tarea) => {
  return `<li>${tarea.nombre} <img class="borrar" src="./img/borrar.png" alt="botonDeBorrar" data-nombre="${tarea.nombre}"></li>`;
};

// renderizar el template anterior para mostrar la lista en el dom
// todoList: es la lista que va recibir para renderizar
const renderizarTareas = (todoList) => {
  ulTareas.innerHTML = todoList.map((tarea) => crearTarea(tarea)).join("");
};

// ocultar boton de borrar todo cuando no tengamos nada que borrar
const onOffBorrarTodo = (ulTareas) => {
  if (!ulTareas.length) {
    borrarTodo.classList.add("ocultar");
    return;
  }
  borrarTodo.classList.remove("ocultar");
};

const agregarTarea = (e) => {
  // evito que se refresque la pagina y se borre todo
  e.preventDefault();
  // constante para el valor dentro del input
  const tareaNombre = input.value.trim().replace(/\s+/g, " ");
  // si no ingresan texto , mostramos msj
  if (!tareaNombre.length) {
    alert("Por favor, ingrese una tarea");
    return;
    // comparamos que no exista en la lista con some
  } else if (
    tareas.some((tarea) => {
      tarea.nombre.toLowerCase() === tareaNombre.toLowerCase();
    })
  ) {
    alert("La tarea ingresada, ya existe");
    return;
  }
  // si es nueva la agregamos al array tareas como objeto
  tareas = [...tareas, { nombre: tareaNombre }];
  // vaciamos el input una vez guardada la tarea
  input.value === "";
  renderizarTareas(tareas);
  guardarLocalStorage(tareas);
  onOffBorrarTodo(tareas);
};

// borrar una tarea con el tachito
const borrarTarea = (e) => {
  if (!e.target.classList.contains("borrar")) {
    return;
  }
  const filtrarNombre = e.target.dataset.nombre;
  tareas = tareas.filter((tarea) => tarea.nombre !== filtrarNombre);
  renderizarTareas(tareas);
  guardarLocalStorage(tareas);
  onOffBorrarTodo(tareas);
};

const vaciarLista = (e) => {
  if (!e.target.classList.contains("borrarTodo")) {
    return;
  }
  tareas = [];
  renderizarTareas(tareas);
  guardarLocalStorage(tareas);
  onOffBorrarTodo(tareas);
};
const init = () => {
  renderizarTareas(tareas);
  agregarForm.addEventListener("submit", agregarTarea);
  onOffBorrarTodo(tareas);
  ulTareas.addEventListener("click", borrarTarea);
  borrarTodo.addEventListener("click", vaciarLista);
};

init();
