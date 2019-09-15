import '../src/style/template.css';
import Client from './Client'

let register = document.getElementById('register');
var username = document.getElementById('username');
var password = document.getElementById('password');
var validation = document.getElementById('validation');
var phone = document.getElementById('phone');

phone.addEventListener('blur', function () {
    let number = phone.value;
    if (number.length == 0) return phone.setAttribute("class", "form-control");
    else if(number.length < 14) {
        return phone.setAttribute("class", "form-control is-invalid");
    }
    if (number[0] != '+') {
        return phone.setAttribute("class", "form-control is-invalid");
    }
    else {
        for (var i = 1; i < number.length; i++) {
            console.log(isNaN(number[i]));
            if (isNaN(number[i])) {
                return phone.setAttribute("class", "form-control is-invalid");
            }
            else return phone.setAttribute("class", "form-control is-valid");
        }
    }
});

username.addEventListener('blur', function () {
    if (!Client.validUsername(username.value)) {
        username.setAttribute("class", "form-control is-invalid");
    }
    else username.setAttribute("class", "form-control is-valid");
    if (username.value === '') username.setAttribute("class", "form-control");
});

password.addEventListener('blur', function () {
    if (!Client.validPassword(password.value)) {
        password.setAttribute("class", "form-control is-invalid");
    }
    else password.setAttribute("class", "form-control is-valid");
    if (password.value === '') password.setAttribute("class", "form-control");
});

validation.addEventListener('blur', function () {
    if (validation.value != password.value){
        validation.setAttribute("class", "form-control is-invalid");
    }
    else validation.setAttribute("class", "form-control is-valid");
    if (validation.value === '') validation.setAttribute("class", "form-control");
});

//Me falta aprender a utilizar los valores ingresados en la fecha de nacimiento
//Me falta hacer que no se pueda apretar el boton si no estan bien ingresados los datos
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