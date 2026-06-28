// creacion de variablies
/* 
var nombre = "alex villa"
let edad = 18
const documento = 1020722462

nombre = "Alexander"
edad = 25

console.log("Hola soy el desarrollador fronted "+ nombre +" tengo la edad de "+ edad +" y mi documento es "+ documento)

// Tipos de datos en javascript


numer : Numero enteros y punto flotante
ej: 58, 1.78

bigInt: Numeros de presicion abierta
ej: 91354321548654378

String: cadenas de carracteres
ej: "Hola", 'como estas?', `soy alexander villa y tengo ${edad}`

boolean: solo permite valores de verdad
ej: true o false

undefined: variable que se crea pero no se le asigna un valor
ej: let edad;

null: representa el estado vacio de la variable, que anteriormente tuvo un dato
ej: edad null

simbol: identificadores unicos e inmutables
ej:Symbol id
*/

// let number = 58;
// let bigInt = 874635123654385431854n;
// let String = "Hola mucho gusto";
// let boolean = true;
// let undefined;
// let frutas = null;
// // let Symbol = 1020722462;

// let numEstudiantes = 35;
// let masaSol = 3515874684358676854n;
// let nombreEstudiante = "Dave";
// let apellidoEstudiante = "Paez";
// let grupo = `Èl grupo de front I contiene ${numEstudiantes} estudiantes`;
// let pais = undefined;
// let horario = null;
// let id = Symbol(10201201);

// console.log(typeof numEstudiantes);
// console.log(typeof masaSol);
// console.log(typeof nombreEstudiante);
// console.log(typeof apellidoEstudiante);
// console.log(typeof grupo);
// console.log(typeof pais);
// console.log(typeof horario);
// console.log(typeof id);

// estructuras condicionales if

/*
un docente requiere crear un sistema que le permita gestionar las notas de un estudiante cesde de segundo nivel, el docente debe ingresar la nota final de cada submodulo(front I, Backend I y Metodologias) el programa debe calcular el promedio e indicar el desempeño segun las siguientes notas
0 - 2.9 deficiente
3 - 4 aceptable
4.1 - 4.5 sobresaliente
4.5 > exelente
*/

// creacion de variables
let notaFront = 0;
let notaBack = 0;
let notaMetodologias = 0;
let notaFinal = 0;
let nombreEstudiante ="";
let desempeño = "";
// Ingresar los datos

alert("Bienvenido al sistema de notas del cesde");
nombreEstudiante = prompt("Señor docente, favor ingresar el nombre del estudiante");
notaFront = Number(prompt(`Señor docente, favor ingresar la nota final del submodulo Front I ${nombreEstudiante}`));
notaBack = Number(prompt(`Señor docente, favor ingresar la nota final del submodulo Back I ${nombreEstudiante}`));
notaMetodologias = Number(prompt(`Señor docente, favor ingresar la nota final del submodulo Metodologias ${nombreEstudiante}`));

// Procesar los datos

notaFinal = (notaBack + notaFront + notaMetodologias) / 3;


if(notaFinal < 3){
    desempeño = "Deficiente"
}else if(notaFinal <= 4){
    desempeño = "Aceptable"
}else if(notaFinal <= 4.5){
    desempeño = "Sobresaliente"
}else{
    desempeño = "Excelente"
}
alert(`El desempeño del estudiante ${nombreEstudiante} es: ${notaFinal} por lo cual es ${desempeño}`)