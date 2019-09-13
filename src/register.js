import '../src/style/template.css';
import Client from './Client'

let register = document.getElementById('register');
var username = document.getElementById('username');
var password = document.getElementById('password');
var phone = document.getElementById('phone');

phone.addEventListener('blur', function () {
    let number = phone.value;
    if(number.length < 14) {
        phone.value = '';
        return;
    }
    if (number[0] != '+') {
        phone.value = '';
        return;
    }
    else {
        for (var i = 1; i < number.length; i++) {
            console.log(isNaN(number[i]));
            if (isNaN(number[i])) {
                phone.value = '';
                return;
            }
        }
    }
});

username.addEventListener('blur', function () {
    if (Client.searchUsername(username.value)) {
        username.setAttribute("class", "form-control is-invalid");
        alert("Ya existe ese nombre de usuario");
        return;
    }
    else username.setAttribute("class", "form-control is-valid");
    if (!Client.validUsername(username.value)) {
        username.setAttribute("class", "form-control is-invalid");
    }
    else username.setAttribute("class", "form-control is-valid");
    if (username.value === '') username.setAttribute("class", "form-control");
});

password.addEventListener('blur', function () {
    /* Verifico que se ingrese la contraseña con las especificaciones dadas */
    if (Client.validPassword(password.value)) {
        document.getElementById('password').value = '';
        //console.log("la contraseña debe contener de 4 a 16 caracteres");
        return;
    }
    else //alert("La contraseña esta bien escrita");
        if (password.value === '') password.setAttribute("class", "form-control");
});

register.addEventListener('click', function () {
    let client = new Client({
        firstName: document.getElementById('firstName').value.toLowerCase(),
        lastName: document.getElementById('lastName').value.toLowerCase(),
        sex: document.getElementById('sex').value,
        birthdate: document.getElementById('birthdate').value,
        email: document.getElementById('email').value.toLowerCase(),
        address: document.getElementById('address').value.toLowerCase(),
        martialStatus: document.getElementById('martialStatus').value,
        phone: phone.value
    });
    event.preventDefault();
    client.register();
    location.href = "index.html"; //Redireccionar a la pagina principal
});