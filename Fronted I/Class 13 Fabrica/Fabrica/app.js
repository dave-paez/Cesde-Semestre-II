// capturar los lementos del html a utilizar 
const buenasInput = document.getElementById('buenasInput');
const defInput = document.getElementById('defInput');
const btnProd = document.getElementById('btnProd');
const prodResult = document.getElementById('prodResult');

function crearRegistro(){
    const numBuenas = parseInt(buenasInput.value);
    const numMalas = parseInt(defInput.value);
    const total = numBuenas + numMalas;
    const eficiencia = (numBuenas / total) * 100;

    let  nivel ="";
    let clase="";

    if(eficiencia <= 85){
        nivel = "bajo";
        clase = "low";
    }else{
        nivel = "alto";
        clase = "high";
    }

    console.log(`numero de piezas buenas:  ${numBuenas} y numero de piezas malas: ${
        numMalas}.`);
        console.log(`La eficicia de la maquina es: ${eficiencia}%`);


    const registro = document.createElement('li');
    //registro.classList.add('registro');
    registro.className = 'registro';  
        registro.classList.add(clase);

    const txtRegistro = document.createElement('p');
    txtRegistro.className = 'txtRegistro';
    

    txtRegistro.innerText= (`${eficiencia.toFixed(2)}% eficiencia ${nivel} | Buenas: ${numBuenas} | malas: ${numMalas}.`);

    const contAccion = document.createElement('div');
    contAccion.className = 'contAccion';

    const btnActualizar = document.createElement('button');
    btnActualizar.className = 'btn btnActualizar';

    btnActualizar._valBuenas = numBuenas;
    btnActualizar._valMalas = numMalas;



    const btnEliminar = document.createElement('button');
    btnEliminar.className ='btn btnEliminar';

    const iconActualizar = document.createElement('i');
    iconActualizar.className ='bi bi-arrow-repeat iconActualizar';

    const iconEliminar = document.createElement('i');
    iconEliminar.className = 'bi bi-trash-fill iconEliminar';

    registro.appendChild(txtRegistro);
    registro.appendChild(contAccion);
    contAccion.appendChild(btnActualizar);
    contAccion.appendChild(btnEliminar);
    btnActualizar.appendChild(iconActualizar);
    btnEliminar.appendChild(iconEliminar);
    prodResult.appendChild(registro);

        limpiarForm();

    }
prodResult.addEventListener('click', (evento)=>{
    const target = evento.target;

    const btnActualizar = target.closest('.btnActualizar');
    const btnEliminar = target.closest('.btnEliminar');
    const registro = target.closest('.registro');

    //Acción de eliminar
    if(btnEliminar){
        if(confirm("¿Esta seguro de eliminar este registro?:")){
           registro.remove(); 
        }
    }

    // acción de actualizar
    if(btnActualizar){
        buenasInput.value = btnActualizar._valBuenas;
        defInput.value = btnActualizar._valMalas;
        registro.remove();
        buenasInput.focus();
    }



})


function limpiarForm(){
    buenasInput.value="";
    defInput.value="";
    
}