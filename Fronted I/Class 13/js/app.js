// capturar los elementos del html a utilizar

const buenasInput = document.getElementById('buenasInput');
const defInput = document.getElementById('defInput');
const btnProd = document.getElementById('btnProd');
const prodResult = document.getElementById('prodResult');

function crearRegistro() {
    const numBuenas = parseInt(buenasInput.value);
    const numMalas = parseInt(defInput.value);
    const total = numBuenas + numMalas;
    const eficiencia = (numBuenas / total) * 100;

    let nivel = "";
    let clase = "";

    if (eficiencia <= 85) {
        nivel = "bajo";
        clase = "low";
    } else {
        nivel = "alto";
        clase = "high";
    }


    console.log(`numero de piezas buenas: ${numBuenas} y numero de piezas malas: ${defInput}`);

    console.log(`la eficiencia de la maquina es: ${eficiencia}%`);

    const registro = document.createElement('li');
    // registro.classList.add = ('registro');
    registro.className = 'registro';
    registro.classList.add(clase);
    
    const txtregistro = document.createElement('p');
    txtregistro.className = 'txtregistro';
   

    txtregistro.innerText = (`${eficiencia.toFixed(2)}% eficiencia ${nivel} | Buenas: ${numBuenas} | malas: ${numMalas}`)

    const btnActualizar = document.createElement('button');
    btnActualizar.className = 'btnActualizar';
    const iconActualizar = document.createElement('i');
    iconActualizar.className = 'iconActualizar'


    registro.appendChild(txtregistro);
    prodResult.appendChild(registro);

    limpiarForm();
}

function limpiarForm() {
    buenasInput.value = '';
    defInput.value = '';
}