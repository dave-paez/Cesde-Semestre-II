/*
 Comcepto basicos
 declaracion de la funcion se hace con la palabra reservada function, luego el nombre de la funcion en infinitvo e incluyendo los parentesis.

    funcion con parametros

    function sumar(a,b){
    return a + b;
    } 
    console.log(sumar(5,10));

    funcion si mparametros

    function sumar(){
        a = 5;
        b = 10:
        let suma = a + b;
        return suma;
    }
*/

    // creacion de variables
    let nombre;
    let num1, num2;
    let resultado;
    let opcion;

    //creacion de funciones

    function sumar(num1,num2) {
        return resultado = num1 + num2;
    }

    function restar(num1,num2) {
        return resultado = num1 - num2;
    }

    function multiplicar(num1,num2) {
        return num1 * num2;
    }

    function dividir(num1,num2) {
        return num1 / num2;
    }

    function setNombre() {
        nombre = prompt(`Señor usuario favor ingresar su nombre`);
    }

    function promediar(num1,num2) {
        return sumar(num1,num2)/ 2;
    }

    function setVlores() {
        num1 = parseInt(prompt(`Ingrese el primer numero`));
        num2 = parseInt(prompt(`Ingrese el segundo numero`));
    }

    alert("Bienvenido a la calculadora XMegaPro");
    setNombre();

    do {
        alert(`Señor ${nombre} ingrese los valores a calcular`);
        setVlores();
        opcion = parseInt(prompt(`Señor ${nombre}, ingrese la operacion a realizar
            1. Suma
            2. Resta
            3. Multi
            4. Divi
            5. Promedio
            6. Salir`));

        switch (opcion) {
            case 1:
                sumar(num1,num2);
                alert(`${resultado}`);
                break;
            case 2:
                restar(num1,num2);
                alert(`${resultado}`);
                break;
            case 3:
                alert(multiplicar(num1,num2));
                break;
            case 4:
                alert(dividir(num1,num2));
                break;
            case 5:
                resultado = promediar(num1,num2);
                alert(`${resultado}`);
                break;
            case 6:
                alert(`Gracias ${nombre}, por usar nuestro sistema`);
                break;
            default:
                alert("El valor ingresado es incorrecto")
                break;
        }
        
    } while (opcion != 6);