// declarar variables

let paciente = "";
let documento = 0;
let altura = 0;
let peso = 0;
let ritmo = 0;
let imc = 0;
let estado = "";
let estadoImc = "";
let estadoPresion = "";
let opcion = 0;
let PAM = 0;
let sistolica = 0;
let diatolica = 0;

// solicitud de datos

console.log('Bienvenido al sistema del consultorio medico Mata Sanos');
alert('Bienvenido al sistema del consultorio medico Mata Sano');

paciente = prompt("Señor usuari favor ingresar su nombre");
documento = prompt(`Señ@r ${paciente} favor ingresar su documento`);
do{ 
    opcion = parseInt(prompt(`Señ@r ${paciente}, favor ingrese una opcion del menu\n 
                    1. Calcular IMC \n 
                    2. Calcular presion arteria\n 
                    3. Salir`));

    switch (opcion) {
        case 1:
            alert('Ingresando al sistema del calculo del imc...');
            peso = parseFloat(prompt(`Señor ${paciente}, favor ingrese su peso`));
            altura = parseFloat(prompt(`Señor ${paciente}, favor ingrese su altura`));
            //calcular imc
            imc = peso / (altura**2);
            if (imc < 18.5) {
                estadoImc = 'Anguila';
            } else if (imc < 24.9) {
                estadoImc = 'Normal';
            } else if (imc < 29.9) {
                estadoImc = 'Sobrepeso';
            }else {
                estadoImc = 'Obeso';
            }
            alert(`Señor ${paciente}, su imc es de: ${imc}, por lo que su estado de nutricion es: ${estadoImc}`);
            break;
        case 2:
            alert('Ingresando al sistema del calculo de presion arterial...');
            sistolica = parseFloat(prompt(`Señor ${paciente}, favor ingrese su presion sistolica`));
            diatolica = parseFloat(prompt(`Señor ${paciente}, favor ingrese su presion diatolica`));
            PAM = (sistolica + (diatolica*2)) / 3;
            if (PAM < 60) {
                estadoPresion = 'Hipotension';
            } else if (PAM < 100) {
                estadoPresion = 'Normal';
            } else {
                estadoPresion = 'Hipertension';
            }
            alert(`Señor ${paciente}, su PAM es de: ${PAM}, por lo que su estado es: ${estadoPresion}`);
            break;
        case 3:
            alert('Gracias por usar nuestro sistema...')
            break;
        default:
            alert('Papi usted es muy estupido, elija un valor de los que se muestran')
            break;
    }
} while (opcion != 3);