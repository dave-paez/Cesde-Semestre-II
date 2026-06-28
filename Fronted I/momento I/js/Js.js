// Spa de Uñas "Glow & Polish"
// Objetivo: Gestionar citas con lógica de descuentos por fidelidad.
// •	Menú: 1. Registrar Servicio, 2. Ver Caja del Día, 3. Salir.
// •	Entradas: Nombre, Tipo de servicio (Manicura: $30,000, Pedicura: $40,000, Combo: $60,000).
// •	Lógica de Negocio: * Preguntar si el cliente es "Frecuente". Si es así, aplicar un 15% de descuento sobre el total.
// Si el servicio es "Combo", regalar un "Masaje de manos" (mostrar en el recibo).
// •	Salida: 1. Mostrar detalles del servicio, valor base, descuento aplicado y total por cada servicio registrado. 
// 2.	Mostrar el total de citas en general, total de citas por cada tipo de servicios.
// 3.	Al salir, mostrar el acumulado total de dinero recaudado.

let nombre;
let opcion;
let manicura = 30000, pedicura = 40000,combo = 60000;
let contManicura = 0, contPedicura = 0, contCombo = 0,  contManos = 0;
let clienteFrec = false;

nombre = prompt("Bienvenid@ a nuestro spa de uñas Glow & Polish, Ingrese su nombre por favor");
opcion = parseInt(prompt(`Señor ${nombre}, es usted un usuario frecuente?
                    1. Si
                    2. No`));
                    if (opcion == 1) {
                        alert("Se te aplicara el 15% de descuento")
                        clienteFrec = true;
                    } else{
                        alert("Al no ser cliente frecuente se te cobrara de manera normal");
                    }
do {  
    opcion = parseInt(prompt(`Este es nuestro menu de citas, usuario ${nombre}
        1. Registrar servicio
        2. Ver caja del Dia
        3. Salir`));
        switch (opcion) {
            case 1:
                    opcionM = parseInt(prompt(`Señor ${nombre}, eliga uno de los servicios
                        1. Manicura $30.000
                        2. Pedicura $40.000
                        3. combo $60.000 (Regalo de Masaje de manos)
                        4. Salir`));
                        switch (opcionM) {
                            case 1:
                                contManicura++;
                                alert("Servicio realizado");
                                break;
                            case 2:
                                contPedicura++;
                                alert("Servicio realizado");
                                break;
                            case 3:
                                contCombo++;
                                contManos++;
                                alert("Servicios realizados");
                                break;
                            case 4:
                                alert("Gracias por visitar nuestro sistema");
                                break;
                            default:
                                alert("El valor ingresado es incorrecto");
                                break;
                        }
                break;
            case 2:
                let totPedi = pedicura*contPedicura;
                let totMan = manicura*contManicura;
                let totComb = combo*contCombo;
                if (clienteFrec == true) {
                    alert(`Los servicios tomados por el cliente ${nombre} son
                    * Manicura ${contManicura} por ser cliente frecuente el valor es: ${totMan*0.85}
                    * Pedicura ${contPedicura} por ser cliente frecuente el valor es: ${totPedi*0.85}
                    * combo (Y servicio regalo) ${contCombo+contManos} por ser cliente frecuente el valor es: ${totComb*0.85}
                    * El total de citas generadas es de: ${contCombo+contManicura+contManos+contPedicura}`);
                } else {
                    alert(`Los servicios tomados por el cliente ${nombre} son
                    * Manicura ${contManicura} por ser cliente frecuente el valor es: ${totMan}
                    * Pedicura ${contPedicura} por ser cliente frecuente el valor es: ${totPedi}
                    * combo (Y servicio regalo) ${contCombo+contManos} por ser cliente frecuente el valor es: ${totComb}
                    * El total de citas generadas es de: ${contCombo+contManicura+contManos+contPedicura}`);
                }
                break;
            case 3:
                let totPediDia = pedicura*contPedicura;
                let totManDia = manicura*contManicura;
                let totCombDia = combo*contCombo;
                let dia = totManDia+totPediDia+totCombDia;
                if (clienteFrec == true) {
                    let diaDesc = dia*0.85;
                    alert(`Gracias usuario ${nombre} por visitar nuestro sistema
                    el dinero recaudado es de: ${diaDesc}`);
                } else {
                    alert(`Gracias usuario ${nombre} por visitar nuestro sistema
                    el dinero recaudado es de: ${dia}`);
                }
                break;
            default:
                alert("El valor ingresado es incorrecto");
                break;
        }
} while (opcion != 3);