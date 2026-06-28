// cap formulario
const forLogin = document.getElementById('loginForm');
forLogin.addEventListener('submit',(e) => {
        e.preventDefault();
// cap de los datos insertados en los input
        const email = document.getElementById('email').value.trim().toLowerCase();
        const password = document.getElementById('password').value.trim(); 

        // validacion de datos ingresados
        if (!email || !password){
            alert('Favor ingrese los datos completos');
            return;
             }

        // obtener la lsita de usruarios registrados en el local storage
        const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        // validar si el correo y contraseña coinciden con un usuario registrado
        const validarUsuario = Usuarios.find(usuario => usuario.email === email && usuario.password === password);

        if(!validarUsuario){
                alert('Correo o contraseña incorrectos');
        }else{
                alert(`Bienvenido ${validarUsuario.nombre} ya puedes ingresar al sitio de trabajo`);
                //guardar los datos del usuario y registrar el inicio de sesion 
                sessionStorage.setItem('sesionUsuario', JSON.stringify(validarUsuario));
                // redireccionar a la pagina de inicio home.html
                window.location.href='home.html';

        }


});