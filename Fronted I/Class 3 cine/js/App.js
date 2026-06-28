/* La empresa cineCol requiere de un sistema de información que le permita administrar la ventas de boletas a las distintas sala y peliculas que ofrecen en cartelera.La cartelera es la siguiente:
sala 1: avatar 6:00
sala 2: duro de matar 7:00pm
sala 3: terminator 9 9:00pm

el valor de los boletos en general es de 20.000
Restricciones
!)Las salas de cine tienen una maxima capacidad de 10 
al llenar la capacidad maxima debe indicar un mensaje de que la sala se encuentra llena y no se pueden vender mas boletos 
2) la información a capturar de cada cliente es:
Nombre, Cedula, cantidad de boletos a comprar.  
3) se tiene un limite de tres clientes.
4) obtener un reporte de ventas y ocupacion de salas 
*/

// creación de variables 
 let nombreCliente1 ="";
 let nombreCliente2 ="";
 let nombreCliente3 ="";
 let cc1=0;
 let cc2=0;
 let cc3=0;
 let cantBoletos=0;
 const capacidadsala= 10;
 let capaMaxSala1 = 0;
 let capaMaxSala2 = 0;
 let capaMaxSala3 = 0;
 const valorBoleto = 20000;
 let totalVentas=0;
let opcion =0;
let validacion=0;
alert("Bienvenidos al sistemas de ventas de CineCol");
console.log("Bienvenidos al sistemas de ventas de CineCol");
 do{
   opcion = parseInt(prompt(`Favor seleccionar una de las siguientes opciones
                1) registrar usuarios
                2) compra de boletos
                3) Reporte de ventas
                4) salir
        `));

        switch(opcion){
            case 1:
                alert("Sección de registro de usuarios");
                for(let i=0; i<3;i++){
                   let nombre = prompt(`Favor ingresar el nombre el cliente ${i+1}`);
                   if(i == 0){
                    nombreCliente1 = nombre;
                   }else if(i==1){
                    nombreCliente2 = nombre;
                   }else{
                    nombreCliente3 = nombre;
                   }
                }
                let k=0;
                while(k<3){
                   let cedula = prompt(`Favor ingresar cedula del cliente ${k+1}`);
                   if(k == 0){
                    cc1 = cedula;
                   }else if(k==1){
                    cc2 = cedula;
                   }else{
                    cc3 = cedula;
                   }
                   k++;
                }
                // mostrar clientes
                alert(`Los clietes registrados son:
                        nombre: ${nombreCliente1} doc: ${cc1}
                        nombre: ${nombreCliente2} doc: ${cc2}
                        nombre: ${nombreCliente3} doc: ${cc3}

                    `)
                break;
            case 2:
                alert("Sistema de compra de boletos");
                    let cc = prompt("Favor ingresar el documeto del cliente");
                    
                    //dentificar usuario 
                    if(cc == cc1 || cc == cc2 || cc == cc3){
                        let opcionSala = prompt(`Favor seleccionar la pelicula que desea ver
                            1) sala 1: avatar 6:00
                            2) sala 2: duro de matar 7:00pm
                            3) sala 3: terminator 9 9:00pm`);

                        if(opcionSala == 1){
                           let cantidad = parseInt(prompt("La pelicula seleccionada es avatar, favor ingresar la cantidad de boletos"));
                           validacion = capaMaxSala1 + cantidad;
                           console.log(validacion);
                           if(validacion <= capacidadsala){
                            capaMaxSala1 += cantidad;
                            totalVentas += cantidad * valorBoleto;
                             alert(`Su compra se ha realizado con exito:
                                sala: 1 
                                pelicula: avatar
                                cantidad: ${cantidad}
                                valor venta: ${cantidad*valorBoleto}`);
                           }else{
                            alert("no es posible veder esta cantidad de boletos, supera la capacidad maxima de la sala1 ");
                           }
                        }else if(opcionSala == 2){
                       let cantidad = parseInt(prompt("La pelicula seleccionada es duro de matar, favor ingresar la cantidad de boletos"));
                           validacion = capaMaxSala1 + cantidad;
                           console.log(validacion);
                           if(validacion <= capacidadsala){
                            capaMaxSala1 += cantidad;
                            totalVentas += cantidad * valorBoleto;
                             alert(`Su compra se ha realizado con exito:
                                sala: 2 
                                pelicula: avatar
                                cantidad: ${cantidad}
                                valor venta: ${cantidad*valorBoleto}`);
                           }else{
                            alert("no es posible veder esta cantidad de boletos, supera la capacidad maxima de la sala2 ");
                           }
                        }
                           else if(opcionSala == 3){
                         let cantidad = parseInt(prompt("La pelicula seleccionada es terminator 9 favor ingresar la cantidad de boletos"));
                           validacion = capaMaxSala1 + cantidad;
                           console.log(validacion);
                           if(validacion <= capacidadsala){
                            capaMaxSala1 += cantidad;
                            totalVentas += cantidad * valorBoleto;
                             alert(`Su compra se ha realizado con exito:
                                sala: 3 
                                pelicula: avatar
                                cantidad: ${cantidad}
                                valor venta: ${cantidad*valorBoleto}`);
                           }else{
                            alert("no es posible veder esta cantidad de boletos, supera la capacidad maxima de la sala3 ");
                           }
                    }else{
                        alert("la sala elegida no se encuentra disponible");
                    }
                }
                    else{
                        alert("Usuario no registrado");
                    }
                
                break;
            case 3:
                break;
            case 4:
                break;
            default:
                alert(`La opcion elegida no es correcta
                        Favor intentar nuevamente.
                    `)
        }
 }while(opcion !=4);