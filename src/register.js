import '../src/style/template.css';
import Client from './Client'

let register = document.getElementById('register');
var username = document.getElementById('username');
var password = document.getElementById('password');
var validation = document.getElementById('validation');
var phone = document.getElementById('phone');
var isValid = [false,false,false,false];

phone.addEventListener('blur', function () {
    let number = phone.value;
    isValid[0] = false;
    if(number.length == 0) phone.setAttribute("class", "form-control");
    else if(number.length != 14) phone.setAttribute("class", "form-control is-invalid");
    else if(number[0] != '+') phone.setAttribute("class", "form-control is-invalid");
    else if(/\D/.test(number.slice(1))) phone.setAttribute("class", "form-control is-invalid");
    else{
        isValid[0] = true;
        phone.setAttribute("class", "form-control is-valid");
    }
    console.log("numero: " + isValid[0]);
});

username.addEventListener('blur', function () {
    isValid[1] = false;
    if (username.value === '') username.setAttribute("class", "form-control");
    else if (!Client.validUsername(username.value)) username.setAttribute("class", "form-control is-invalid");
    else {
        isValid[1] = true;
        username.setAttribute("class", "form-control is-valid");
    }
    console.log("username: " + isValid[1]);
});

password.addEventListener('blur', function () {
    isValid[2] = false;
    if (password.value === ''){
        password.setAttribute("class", "form-control");
        validation.value = '';
        validation.setAttribute("class", "form-control");
    } 
    else if (!Client.validPassword(password.value)) password.setAttribute("class", "form-control is-invalid");
    else{
        isValid[2] = true;
        password.setAttribute("class", "form-control is-valid");
    }
    console.log("password: " + isValid[2]);
});

validation.addEventListener('blur', function () {
    isValid[3] = false;
    if (validation.value === '') validation.setAttribute("class", "form-control");
    else if (validation.value != password.value) validation.setAttribute("class", "form-control is-invalid");
    else{
        isValid[3] = true;
        validation.setAttribute("class", "form-control is-valid");
    }
    console.log("validation: " + isValid[3]);
});

//Me falta aprender a utilizar los valores ingresados en la fecha de nacimiento
//Me falta hacer que no se pueda apretar el boton si no estan bien ingresados los datos
register.addEventListener('click', function () {
    const valid = isValid.find(element => element == false);
    if(valid === undefined){
        let client = new Client({
            username: username.value,
            password: password.value,
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
    }
});