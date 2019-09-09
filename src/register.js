import Client from './Client'

let register = document.getElementById('register');
var username = document.getElementById('username');
var password = document.getElementById('password');

username.addEventListener('blur', function(){
    /*if(username.value === undefined){
        username.setAttribute("class", "form-control");
    }*/
    if(Client.searchUsername(username.value)){
        username.setAttribute("class", "form-control is-invalid");
        alert("Ya existe ese nombre de usuario");
        return;
    }
    else username.setAttribute("class", "form-control is-valid");
    if(!Client.validUsername(username.value)){
        username.setAttribute("class", "form-control is-invalid");
    }
    else username.setAttribute("class", "form-control is-valid");
});

password.addEventListener('blur', function(){
    /* Verifico que se ingrese la contraseña con las especificaciones dadas */
    if(Client.validPassword(password.value)){
        document.getElementById('password').value = '';
        console.log("la contraseña debe contener de 4 a 16 caracteres");
        return;
    }
    else alert("La contraseña esta bien escrita");
});

register.addEventListener('click', function () {
    let client = new Client({
        firstName: document.getElementById('firstName').value.toLowerCase(),
        lastName: document.getElementById('lastName').value.toLowerCase(),
        male: document.getElementById('male').checked,
        female: document.getElementById('female').checked,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value.toLowerCase(),
        address: document.getElementById('address').value.toLowerCase(),
        married: document.getElementById('married').checked,
        single: document.getElementById('single').checked,
        divorced: document.getElementById('divorced').checked,
        widowed: document.getElementById('widowed').checked,
        phone: document.getElementById('phone').value
    });
    client.Register();
    //location.href ="http://www.google.com"; Redireccionar a la pagina principal
});