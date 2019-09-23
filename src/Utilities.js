import Client from './Client';
import Doctor from './Doctor';

function validations(){
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var validation = document.getElementById('validation');
    var phone = document.getElementById('phone');
    var isValid = [false, false, false, false, false, false];

    phone.addEventListener('blur', function () {
        let number = phone.value;
        isValid[0] = false;
        if (number.length == 0) phone.setAttribute("class", "form-control");
        else if (number.length != 14) phone.setAttribute("class", "form-control is-invalid");
        else if (number[0] != '+') phone.setAttribute("class", "form-control is-invalid");
        else if (/\D/.test(number.slice(1))) phone.setAttribute("class", "form-control is-invalid");
        else {
            isValid[0] = true;
            phone.setAttribute("class", "form-control is-valid");
        }
    });

    username.addEventListener('blur', function () {
        isValid[1] = false;
        if (username.value === '') username.setAttribute("class", "form-control");
        else if (!Client.validUsername(username.value)) username.setAttribute("class", "form-control is-invalid");
        else {
            isValid[1] = true;
            username.setAttribute("class", "form-control is-valid");
        }
    });

    password.addEventListener('blur', function () {
        isValid[2] = false;
        if (password.value === '') {
            password.setAttribute("class", "form-control");
            validation.value = '';
            validation.setAttribute("class", "form-control");
        }
        else if (!Client.validPassword(password.value)) password.setAttribute("class", "form-control is-invalid");
        else {
            isValid[2] = true;
            password.setAttribute("class", "form-control is-valid");
        }
    });

    validation.addEventListener('blur', function () {
        isValid[3] = false;
        if (validation.value === '') validation.setAttribute("class", "form-control");
        else if (validation.value != password.value) validation.setAttribute("class", "form-control is-invalid");
        else {
            isValid[3] = true;
            validation.setAttribute("class", "form-control is-valid");
        }
    });

    firstName.addEventListener('blur', function () {
        isValid[4] = false;
        if (firstName.value === '') {
            firstName.setAttribute("class", "form-control");
            firstName.value = '';
            firstName.setAttribute("class", "form-control");
        }
        else if (!Client.validName(firstName.value)) firstName.setAttribute("class", "form-control is-invalid");
        else {
            isValid[4] = true;
            firstName.setAttribute("class", "form-control is-valid");
        }
    });

    lastName.addEventListener('blur', function () {
        isValid[5] = false;
        if (lastName.value === '') {
            lastName.setAttribute("class", "form-control");
            lastName.value = '';
            lastName.setAttribute("class", "form-control");
        }
        else if (!Client.validName(lastName.value)) lastName.setAttribute("class", "form-control is-invalid");
        else {
            isValid[5] = true;
            lastName.setAttribute("class", "form-control is-valid");
        }
    });

    return isValid;
}

function clientRegister(){
    let register = document.getElementById('register');
    var isValid = validations();
    //Me falta aprender a utilizar los valores ingresados en la fecha de nacimiento
    register.addEventListener('click', function () {
        const valid = isValid.find(element => element == false);
        if (valid === undefined) {
            let client = new Client({
                username: username.value,
                password: password.value,
                firstName: firstName.value.toLowerCase(),
                lastName: lastName.value.toLowerCase(),
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
}

var formBox = document.getElementById('formBox');
function drawFormClient(){
    formBox.innerHTML = '';
    formBox.innerHTML = `
        <form class="my-4">
            <div class="form-group row">
                <label for="username" class="text-center col-lg-3 col-form-label">Usuario</label>
                <div class="col-lg-8">
                <input type="text" data-toggle="tooltip" data-placement="top" title="Debes ingresar de 4 a 32 caracteres. 
                    No se pueden ingresar espacios." class="form-control" id="username"
                    placeholder="Carlos_123" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="text-center col-lg-3 col-form-label">Contraseña</label>
                <div class="col-lg-8">
                <input type="password" data-toggle="tooltip" data-placement="top" title="Ingrese al menos 8 caracteres los 
                    cuales deben contener al menos una letra mayuscula, un numero y un caracter especial (!, _ , -, @). 
                    No se pueden ingresar espacios" class="form-control" id="password"
                    placeholder="Contraseña" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="text-center col-lg-3 col-form-label">Confirmacion</label>
                <div class="col-lg-8">
                <input type="password" data-toggle="tooltip" data-placement="top"
                    title="Aqui debe ingresar la misma contraseña ingresada anteriormente"
                    class="form-control" id="validation" placeholder="Confirmacion" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="firstName" class="text-center col-lg-3 col-form-label">Nombre</label>
                <div class="col-lg-8">
                    <input type="firstName" class="form-control" id="firstName" placeholder="Carlos" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="lastName" class="text-center col-lg-3 col-form-label">Apellido</label>
                <div class="col-lg-8">
                    <input type="lastName" class="form-control" id="lastName" placeholder="Rodriguez" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="sex" class="text-center col-lg-3 col-form-label">Sexo</label>
                <div class="col-lg-4">
                    <select class="form-control" id="sex">
                        <option>Hombre</option>
                        <option>Mujer</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="birthdate" class="text-center col-lg-3 col-form-label">Fecha de nacimiento</label>
                <div class="col-lg-4">
                    <input id="birthdate" type="date" name="bday" max="3000-12-31" min="1000-01-01"
                        class="form-control" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="text-center col-lg-3 col-form-label">Email</label>
                <div class="col-lg-8">
                    <input type="email" class="form-control" id="email"
                        placeholder="carlosrodriguez@gmail.com" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="address" class="text-center col-lg-3 col-form-label">Direccion</label>
                <div class="col-lg-8">
                    <input type="text" class="form-control" id="address" placeholder="Gral. Paz 564"
                        required>
                </div>
            </div>
            <div class="form-group row">
                <label for="Martial status" class="text-center col-lg-3 col-form-label">Estado civil</label>
                <div class="col-lg-4">
                    <select class="form-control" id="martialStatus">
                        <option>Soltero</option>
                        <option>Casado</option>
                        <option>Divorciado</option>
                        <option>Viudo</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="phone" class="text-center col-lg-3 col-form-label">Celular</label>
                <div class="col-lg-4">
                    <input type="tel" data-toggle="tooltip" data-placement="top"
                        title="El celular ingresado debe seguir el siguiente modelo +549-(codigo local)-(7 digitos)"
                        class="form-control" id="phone" name="phone" placeholder="+5493815958645" required>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-med-3">
                    <button type="submit" class="btn btn-primary" id="register">Register</button>
                </div>
            </div>
        </form>
    `;

    clientRegister();

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
}

function doctorRegister(){
    let register = document.getElementById('register');
    var isValid = validations();
    register.addEventListener('click', function () {
        const valid = isValid.find(element => element == false);
        if (valid === undefined) {
            let doctor = new Doctor({
                username: username.value,
                password: password.value,
                firstName: firstName.value.toLowerCase(),
                lastName: lastName.value.toLowerCase(),
                sex: document.getElementById('sex').value,
                birthdate: document.getElementById('birthdate').value,
                email: document.getElementById('email').value.toLowerCase(),
                address: document.getElementById('address').value.toLowerCase(),
                martialStatus: document.getElementById('martialStatus').value,
                phone: phone.value,
                specialism: document.getElementById('specialism').value,
                experience: document.getElementById('experience').value
            });
            event.preventDefault();
            doctor.register();
            location.href = "index.html"; //Redireccionar a la pagina principal
        }
    });
}

function drawFormDoctor(){
    formBox.innerHTML = '';
    formBox.innerHTML = `
        <form class="my-4">
            <div class="form-group row">
                <label for="username" class="text-center col-lg-3 col-form-label">Usuario</label>
                <div class="col-lg-8">
                <input type="text" data-toggle="tooltip" data-placement="top" title="Debes ingresar de 4 a 32 caracteres. 
                    No se pueden ingresar espacios." class="form-control" id="username"
                    placeholder="Carlos_123" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="text-center col-lg-3 col-form-label">Contraseña</label>
                <div class="col-lg-8">
                <input type="password" data-toggle="tooltip" data-placement="top" title="Ingrese al menos 8 caracteres los 
                    cuales deben contener al menos una letra mayuscula, un numero y un caracter especial (!, _ , -, @). 
                    No se pueden ingresar espacios" class="form-control" id="password"
                    placeholder="Contraseña" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="text-center col-lg-3 col-form-label">Confirmacion</label>
                <div class="col-lg-8">
                <input type="password" data-toggle="tooltip" data-placement="top"
                    title="Aqui debe ingresar la misma contraseña ingresada anteriormente"
                    class="form-control" id="validation" placeholder="Confirmacion" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="firstName" class="text-center col-lg-3 col-form-label">Nombre</label>
                <div class="col-lg-8">
                    <input type="firstName" class="form-control" id="firstName" placeholder="Carlos" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="lastName" class="text-center col-lg-3 col-form-label">Apellido</label>
                <div class="col-lg-8">
                    <input type="lastName" class="form-control" id="lastName" placeholder="Rodriguez" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="sex" class="text-center col-lg-3 col-form-label">Sexo</label>
                <div class="col-lg-4">
                    <select class="form-control" id="sex">
                        <option>Hombre</option>
                        <option>Mujer</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="birthdate" class="text-center col-lg-3 col-form-label">Fecha de nacimiento</label>
                <div class="col-lg-4">
                    <input id="birthdate" type="date" name="bday" max="3000-12-31" min="1000-01-01"
                        class="form-control" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="text-center col-lg-3 col-form-label">Email</label>
                <div class="col-lg-8">
                    <input type="email" class="form-control" id="email"
                        placeholder="carlosrodriguez@gmail.com" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="address" class="text-center col-lg-3 col-form-label">Direccion</label>
                <div class="col-lg-8">
                    <input type="text" class="form-control" id="address" placeholder="Gral. Paz 564"
                        required>
                </div>
            </div>
            <div class="form-group row">
                <label for="Martial status" class="text-center col-lg-3 col-form-label">Estado civil</label>
                <div class="col-lg-4">
                    <select class="form-control" id="martialStatus">
                        <option>Soltero</option>
                        <option>Casado</option>
                        <option>Divorciado</option>
                        <option>Viudo</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="phone" class="text-center col-lg-3 col-form-label">Celular</label>
                <div class="col-lg-4">
                    <input type="tel" data-toggle="tooltip" data-placement="top"
                        title="El celular ingresado debe seguir el siguiente modelo +549-(codigo local)-(7 digitos)"
                        class="form-control" id="phone" name="phone" placeholder="+5493815958645" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="specialism" class="text-center col-lg-3 col-form-label">Especialidad</label>
                <div class="col-lg-4">
                    <select class="form-control" id="specialism">
                        <option>Odontologia</option>
                        <option>Cardiologia</option>
                        <option>Fonoaudiologia</option>
                        <option>Oftamologia</option>
                        <option>Psicologia</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="experience" class="text-center col-lg-3 col-form-label">Experiencia</label>
                <div class="col-lg-4">
                    <input type="number" class="form-control" id="experience" min="1" max="60" step="1" placeholder="5" required>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-med-3">
                    <button type="submit" class="btn btn-primary" id="register">Register</button>
                </div>
            </div>
        </form>
    `;

    doctorRegister();

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

}

export { drawFormClient, drawFormDoctor };