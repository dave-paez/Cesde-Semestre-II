// cap formukario

const forRegistro = document.getElementById('signupForm');

forRegistro.addEventListener('submit',(e) => {
        e.preventDefault();

// cap de los datos insertados en los input
        const name = document.getElementById('name').value.trim().toLowerCase();
        const email = document.getElementById('email').value.trim().toLowerCase();
        const password = document.getElementById('password').value.trim();

        // validacion de datos ingresados
        if (!name || !email || !password){
            alert('Favor ingrese los datos completos');
            return;
             }

        if(password.length <8){
                alert('La contraseña debe tener como minimo 8 caracteres')
                return;

        }  
        
         const paswordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]||[^]){8,15}$/;

         if(!paswordRegex.test(password)){
                alert('Contraseña debil debe de tener 8 caracteres \n maximo 15 caracteres \n minimo una mayuscula \n minimo una minusculas \n  minimo un caracter especial \n minimo un numero');
         }

         // Generar almacenamiento local

         const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

         //Validacion de correo existente
         const validarCorreo = Usuarios.find(usuario => usuario.email === email);

         if(validarCorreo){
                alert('El usuario ya existe, no se puede registrar nuevamente');
                return;

         }else{
                Usuarios.push({
                        nombre: name,
                        email:email,
                        password:password,
                        rol: "Cliente"
                });
                // Enviar informacion al local Storage
                localStorage.setItem('usuarios', JSON.stringify(Usuarios));
                alert('Usuario registrado con exito');

                //Retornar a la siguiente pagina
                window.location.href='login.html';
         }
         
         

});
