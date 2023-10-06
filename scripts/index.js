/**
Autor: Alfonso Reviejo Valle
GitHub:
 */

/*El nombre no puede quedar vacio*/ 
const validarNombre = nombre => {
    if(nombre === ''){
        alert('El nombre no puede estar vacío');
        return false;
    } 
    return true;
}

/*Validar apellido*/ 
const validarApellido = apellido => {
    if(apellido === ''){
        alert('El apellido no puede estar vacío');
        return false;
    } 
    return true;
}

/*Al menos 8 caracteres*/

const validarContraseña = (contraseña) => {
    if (contraseña.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres');
        return false;
    }
    return true;
}

const validarEmail = email => {
    if(!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)){
        alert("El email debe incluir un @ y un .");
        return false; // Evitar el envío del formulario
    }
    return true; // Permitir el envío del formulario si el correo electrónico no está vacío
}

const form = document.getElementById('form');

form.addEventListener("submit", (event) => {
    const nombre = document.getElementById('nom').value;
    const apellido = document.getElementById('apellido').value;
    const contraseña = document.getElementById('contraseña').value;
    const email =document.getElementById('email').value;

    if(!validarNombre(nombre) || !validarApellido(apellido) || !validarEmail(email) || !validarContraseña(contraseña) ){
        event.preventDefault();
    }

});


