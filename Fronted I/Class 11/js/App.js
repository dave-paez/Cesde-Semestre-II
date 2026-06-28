// seleccionar variables

const username = document.getElementById('username');
const profession = document.getElementById('profession');
const exp = document.getElementById('exp');
const mainContainer = document.getElementById('main-container');
const colorPicker = document.getElementById('colorPicker');
const btnUpdate = document.getElementById('btn-update');
const parrafo = document.getElementById('parrafo');
const displayArea = document.getElementById('display-area');


//creacion de funciones

function CrearTarjeta() {
    let nombre = username.value.trim();
    let color = colorPicker.value;
    let profesion = profession.value.trim();
    let experiencia = exp.value.trim();
    if (nombre === "") {
        alert('Favor ingresar su nombre');
        return;
    } else {
        parrafo.innerText = `hola soy el desarrollador ${nombre}
        Ejerzo la profesion ${profesion}
        y cuento con ${experiencia} años de experiencia`;

        displayArea.style.backgroundColor = color;
        mainContainer.style.background = color;
    }
}