// seleccionar variables

const taskInput = document.getElementById('task-input');
const addTask = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const clearStyle = document.getElementById('clear-style-btn');

// creacion de variables 

function agregarTarea() {
    let tarea = taskInput.value.trim();
    
    if (tarea === "") {
        alert('Favor ingresar tarea');
        return;
    } else {
        // crear un elemento nuevo para la tarea
        const nuevaTarea = document.createElement('li');

        // le asigno el contenido del texto
        nuevaTarea.innerText = tarea;

        // le asigno un nuevo elemento a una etiqueta html ya existente
        taskList.appendChild(nuevaTarea);

        // limpiar input
        document.getElementById('taskInput').reset();
    }
}