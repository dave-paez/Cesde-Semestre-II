/*  
    se requiere desarrollar una calculadora que permita ingresar el nombre del usuario, luego le permita seleccionar el area de la figura geometrica a calcular
    luego debe solicitar los datos de la figura a calcular, al finalizar, debe mostar el nombre, la figura seleccionada y el area de la figura.
*/

let nombre;
let a,b;
let opcion;
let reslultado;

function cuadrado(a,b) {
    return reslultado = a * b;
}

function triangulo(a,b) {
    return reslultado = (a * b)/ 2;
}

function circulo(a) {
    return reslultado = Math.PI*(a*a);
}

function setVlores() {
        num1 = parseInt(prompt(`Ingrese el primer numero`));
        num2 = parseInt(prompt(`Ingrese el segundo numero`));
}

function setNombre() {
    nombre = prompt(`Señor usuario favor ingresar su nombre`);
}

    alert("Bienvenido a la calculadora XMegaPro");
    setNombre();

    do {
        alert(`Señor ${nombre} ingrese los valores a calcular`);
        setVlores();
        opcion = parseInt(prompt(`Señor ${nombre}, ingrese la operacion a realizar
            1. Cuadrado
            2. Triangulo
            3. Circulo
            4. Salir`));
        switch (opcion) {
            case 1:
                cuadrado(num1,num1);
                alert(`${reslultado}`)
                break;
            case 2:
                triangulo(num1,num1);
                alert(`${reslultado}`)
                break;
            case 3:
                circulo(num1,num1);
                alert(`${reslultado}`)
                break;
            case 4:
                alert(`Gracias ${nombre}, por usar nuestro sistema`);
                break;
            default:
                alert("El valor ingresado es incorrecto")
                break;
        }
    } while (opcion != 4);