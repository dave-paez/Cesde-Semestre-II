//Capturar el formulario 
const formRegistro = document.getElementById('signupForm');

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //Capturar los valores de los campos del formulario
    const name = document.getElementById('name').value.trim().toLowerCase();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim();

    //Validación de datos
    if(!name || !email || !password) {
       alert('Por favor, completa todos los datos');
       return;
    }

    //validacion de password, minimo 8 caracteres

    if(password.length < 8) {
        alert('La contraseña es debil, debe tener al menos 8 caracteres');
        return;
    }

    //validacion de password, con politicas de seguridad

    const passwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/; 

    if(!passwRegex.test(password)) {
    alert('Contraseña debil, debe contener minimo 8 caracteres.\n Al menos una mayuscula.\n Al menos una minuscula.\n Al menos un numero.\n Al menos un caracter especial.');
        return;
    }

    //Generar almacenamiento local

    const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    //Validacion de correo existente

    const validarCorreo = Usuarios.find(usuario => usuario.email === email);

    if(validarCorreo) {
        alert('El usuario ya existe, no es posible registrarlo nuevamente');
        return;
    } else {
        Usuarios.push({
            name: name,
            email: email,
            password: password,
            rol: "cliente"
        });
        localStorage.setItem('usuarios', JSON.stringify(Usuarios));

        alert('Usuario registrado exitosamente');

        //Redireccionar al login
        window.location.href = 'login.html';
    }
});