import '../src/style/template.css';
import Usuario from './Usuario';
import Client from './Client';

var cliente = Usuario.getClientID();
var users = Client.getAll();
var nombre = users[cliente].firstName;
var apellido = users[cliente].lastName;
var sexo = users[cliente].sex;
var nacimiento = users[cliente].birthdate;
var direccion = users[cliente].address;
var nacimiento = users[cliente].birthdate;
var estadocivil = users[cliente].martialStatus;
var correo = users[cliente].email;
var telefono = users[cliente].phone;

var profile1 = document.getElementById("content").innerHTML = `                <div class="user container font-weight-bold">Bienvenido `+ nombre.toUpperCase() +`. <div class="container d-flex justify-content-end"><button type="button" class="btn btn-primary btn-sm" >Cerrar sesion</button>
</div></div>
<br><br>

<div class="container d-flex justify-content-end"><button type="button" class="btn btn-info radius btn-sm" data-toggle="modal" data-target="#modalEditardatos">Modificar datos</button>
</div>

<p style="font-size: 20px;"><strong>Nombre:</strong> `+ nombre.toUpperCase() + `</p>
<p style="font-size: 20px;"><strong>Apellido:</strong> `+ apellido.toUpperCase() + `</p>
<p style="font-size: 20px;"><strong>Sexo:</strong> `+ sexo + `</p>
<p style="font-size: 20px;"><strong>Nacimiento:</strong> `+ nacimiento + `</p>
<p style="font-size: 20px;"><strong>Direccion:</strong> `+ direccion + `</p>
<p style="font-size: 20px;"><strong>Estado civil:</strong> `+ estadocivil + `</p>
<p style="font-size: 20px;"><strong>Correo:</strong> `+ correo + `</p>
<p style="font-size: 20px;"><strong>Telefono:</strong> `+ telefono + `</p>

<!-- Modal -->
<div class="modal fade" id="modalEditardatos" tabindex="-1" role="dialog" aria-labelledby="modalEditardatosTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLongTitle">Modificar datos</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
        
        <div class="form-group row">
            <label for="firstName" class="text-center col-lg-3 col-form-label">Nombre</label>
            <div class="col-lg-8">
                <input type="firstName" class="form-control" id="firstName" value="`+ nombre + `" required>
            </div>
        </div>
        <div class="form-group row">
            <label for="lastName" class="text-center col-lg-3 col-form-label">Apellido</label>
            <div class="col-lg-8">
                <input type="lastName" class="form-control" id="lastName" value="`+ apellido + `" required>
            </div>
        </div>
        <div class="form-group row">
            <label for="sex" class="text-center col-lg-3 col-form-label">Sexo</label>
            <div class="col-lg-5">
                <select class="form-control" value="`+ sexo + `" id="sex">
                    <option>Hombre</option>
                    <option>Mujer</option>
                </select>
            </div>
        </div>
        <div class="form-group row">
            <label for="birthdate" class="text-center col-lg-3 col-form-label">Nacimiento</label>
            <div class="col-lg-5">
                <input id="birthdate" type="date" name="bday" max="2020-12-31" min="2019-09-26"
                    class="form-control" value="`+ nacimiento + `" required>
            </div>
        </div>
        <div class="form-group row">
            <label for="email" class="text-center col-lg-3 col-form-label" >Email</label>
            <div class="col-lg-8">
                <input type="email" class="form-control" id="email"
                value="`+ correo + `" required>
            </div>
        </div>
        <div class="form-group row">
            <label for="address" class="text-center col-lg-3 col-form-label">Direccion</label>
            <div class="col-lg-8">
                <input type="text" class="form-control" id="address" value="`+ direccion + `" 
                    required>
            </div>
        </div>
        <div class="form-group row">
            <label for="Martial status" class="text-center col-lg-3 col-form-label">Estado civil</label>
            <div class="col-lg-4">
                <select class="form-control" value="`+ estadocivil + `" id="martialStatus">
                    <option>Soltero</option>
                    <option>Casado</option>
                    <option>Divorciado</option>
                    <option>Viudo</option>
                </select>
            </div>
        </div>
        <div class="form-group row">
            <label for="phone" class="text-center col-lg-3 col-form-label">Celular</label>
            <div class="col-lg-6">
                <input type="tel" data-toggle="tooltip" data-placement="top"
                    title="El celular ingresado debe seguir el siguiente modelo +549-(codigo local)-(7 digitos)"
                    class="form-control" id="phone" name="phone" value="`+ telefono + `"  required>
            </div>
        </div>
    

  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Salir</button>
    <button type="button" class="btn btn-primary" data-dismiss="modal" id="saveChanges">Guardar cambios</button>
  </div>
</div>
</div>
</div>
`;

var saveChanges = document.getElementById("saveChanges").addEventListener('click', function () {
    var nuevonombre = document.getElementById("firstName").value;
    var nuevoapellido = document.getElementById("lastName").value;
    var nuevosexo = document.getElementById("sex").value;
    var nuevonacimiento = document.getElementById("birthdate").value;
    var nuevadireccion = document.getElementById("address").value;
    var nuevoestadocivil = document.getElementById("lastName").value;
    var nuevocorreo = document.getElementById("email").value;
    var nuevotelefono = document.getElementById("phone").value;
    var cliente2 = Usuario.getClientID();
    var users = Client.getAll();

    console.log(cliente2);
    var nuevosDatos = {
        username :  users[cliente2].username,
        password : users[cliente2].password,
        firstName : nuevonombre,
        lastName : nuevoapellido,
        sex : nuevosexo,
        birthdate : nuevonacimiento,
        address : nuevadireccion,
        marrialStatus : nuevoestadocivil,
        email : nuevocorreo,
        phone : nuevotelefono
    }
    //console.log(nuevosDatos);


var cambio = users.splice(cliente2,1,nuevosDatos);
localStorage.setItem("client", JSON.stringify(users));

var cliente = Usuario.getClientID();
var users = Client.getAll();
var nombre = users[cliente].firstName;
var apellido = users[cliente].lastName;
var sexo = users[cliente].sex;
var nacimiento = users[cliente].birthdate;
var direccion = users[cliente].address;
var nacimiento = users[cliente].birthdate;
var estadocivil = users[cliente].martialStatus;
var correo = users[cliente].email;
var telefono = users[cliente].phone;
var profile1 = document.getElementById("content").innerHTML = `          <br>
<div class="container d-flex justify-content-around">
    <div class="user " style="font-family: times, serif; font-size:14pt;">Bienvenido <b>`+ nombre +`</b></div>
    <button type="button" class="btn btn-primary btn-sm " >Cerrar sesion</button>
</div>
 
<br><br>


<div class="container d-flex justify-content-end"><button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalEditardatos">Modificar datos</button>
</div>

<p style="font-size: 20px;">Nombre: `+ nombre + `</p>
<p style="font-size: 20px;">Apellido: `+ apellido + `</p>
<p style="font-size: 20px;">Sexo: `+ sexo + `</p>
<p style="font-size: 20px;">Nacimiento: `+ nacimiento + `</p>
<p style="font-size: 20px;">Direccion: `+ direccion + `</p>
<p style="font-size: 20px;">Estado civil: `+ estadocivil + `</p>
<p style="font-size: 20px;">Correo: `+ correo + `</p>
<p style="font-size: 20px;">Telefono: `+ telefono + `</p>

<!-- Modal -->
<div class="modal fade" id="modalEditardatos" tabindex="-1" role="dialog" aria-labelledby="modalEditardatosTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLongTitle">Modificar datos</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
        
        <div class="form-group row">
            <label for="firstName" class="text-center col-lg-3 col-form-label">Nombre</label>
            <div class="col-lg-8">
                <input type="firstName" class="form-control" id="firstName" value="`+ nombre + `" required>
            </div>
        </div>
        <div class="form-group row">
            <label for="lastName" class="text-center col-lg-3 col-form-label">Apellido</label>
            <div class="col-lg-8">
                <input type="lastName" class="form-control" id="lastName" value="`+ apellido + `" required>
            </div>
        </div>
        <div class="form-group row">
            <label for="sex" class="text-center col-lg-3 col-form-label">Sexo</label>
            <div class="col-lg-5">
                <select class="form-control" value="`+ sexo + `" id="sex">
                    <option>Hombre</option>
                    <option>Mujer</option>
                </select>
            </div>
        </div>
        <div class="form-group row">
            <label for="birthdate" class="text-center col-lg-3 col-form-label">Nacimiento</label>
            <div class="col-lg-5">
                <input id="birthdate" type="date" name="bday" max="2020-12-31" min="2019-09-26"
                    class="form-control" value="`+ nacimiento + `" required>
            </div>
        </div>
        <div class="form-group row">
            <label for="email" class="text-center col-lg-3 col-form-label" >Email</label>
            <div class="col-lg-8">
                <input type="email" class="form-control" id="email"
                value="`+ correo + `" required>
            </div>
        </div>
        <div class="form-group row">
            <label for="address" class="text-center col-lg-3 col-form-label">Direccion</label>
            <div class="col-lg-8">
                <input type="text" class="form-control" id="address" value="`+ direccion + `" 
                    required>
            </div>
        </div>
        <div class="form-group row">
            <label for="Martial status" class="text-center col-lg-3 col-form-label">Estado civil</label>
            <div class="col-lg-4">
                <select class="form-control" value="`+ estadocivil + `" id="martialStatus">
                    <option>Soltero</option>
                    <option>Casado</option>
                    <option>Divorciado</option>
                    <option>Viudo</option>
                </select>
            </div>
        </div>
        <div class="form-group row">
            <label for="phone" class="text-center col-lg-3 col-form-label">Celular</label>
            <div class="col-lg-6">
                <input type="tel" data-toggle="tooltip" data-placement="top"
                    title="El celular ingresado debe seguir el siguiente modelo +549-(codigo local)-(7 digitos)"
                    class="form-control" id="phone" name="phone" value="`+ telefono + `"  required>
            </div>
        </div>
    

  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Salir</button>
    <button type="button" class="btn btn-primary" data-dismiss="modal" id="saveChanges">Guardar cambios</button>
  </div>
</div>
</div>
</div>
`;
})

var profile = document.getElementById("profile").addEventListener('click', function () {
    var cliente = Usuario.getClientID();
    var users = Client.getAll();
    var nombre = users[cliente].firstName;
    var apellido = users[cliente].lastName;
    var sexo = users[cliente].sex;
    var nacimiento = users[cliente].birthdate;
    var direccion = users[cliente].address;
    var nacimiento = users[cliente].birthdate;
    var estadocivil = users[cliente].martialStatus;
    var correo = users[cliente].email;
    var telefono = users[cliente].phone;


    var profile1 = document.getElementById("content").innerHTML = `                <br>
    <div class="container d-flex justify-content-around">
        <div class="user " style="font-family: times, serif; font-size:14pt;">Bienvenido <b>`+ nombre +`</b></div>
        <button type="button" class="btn btn-primary btn-sm " >Cerrar sesion</button>
    </div>
     
    <br><br>
    
<div class="container d-flex justify-content-end"><button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalEditardatos">Modificar datos</button>
</div>

<p style="font-size: 20px;">Nombre: `+ nombre + `</p>
<p style="font-size: 20px;">Apellido: `+ apellido + `</p>
<p style="font-size: 20px;">Sexo: `+ sexo + `</p>
<p style="font-size: 20px;">Nacimiento: `+ nacimiento + `</p>
<p style="font-size: 20px;">Direccion: `+ direccion + `</p>
<p style="font-size: 20px;">Estado civil: `+ estadocivil + `</p>
<p style="font-size: 20px;">Correo: `+ correo + `</p>
<p style="font-size: 20px;">Telefono: `+ telefono + `</p>

<!-- Modal -->
<div class="modal fade" id="modalEditardatos" tabindex="-1" role="dialog" aria-labelledby="modalEditardatosTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modificar datos</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            
            <div class="form-group row">
                <label for="firstName" class="text-center col-lg-3 col-form-label">Nombre</label>
                <div class="col-lg-8">
                    <input type="firstName" class="form-control" id="firstName" value="`+ nombre + `" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="lastName" class="text-center col-lg-3 col-form-label">Apellido</label>
                <div class="col-lg-8">
                    <input type="lastName" class="form-control" id="lastName" value="`+ apellido + `" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="sex" class="text-center col-lg-3 col-form-label">Sexo</label>
                <div class="col-lg-5">
                    <select class="form-control" value="`+ sexo + `" id="sex">
                        <option>Hombre</option>
                        <option>Mujer</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="birthdate" class="text-center col-lg-3 col-form-label">Nacimiento</label>
                <div class="col-lg-5">
                    <input id="birthdate" type="date" name="bday" max="2020-12-31" min="2019-09-26"
                        class="form-control" value="`+ nacimiento + `" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="text-center col-lg-3 col-form-label" >Email</label>
                <div class="col-lg-8">
                    <input type="email" class="form-control" id="email"
                    value="`+ correo + `" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="address" class="text-center col-lg-3 col-form-label">Direccion</label>
                <div class="col-lg-8">
                    <input type="text" class="form-control" id="address" value="`+ direccion + `" 
                        required>
                </div>
            </div>
            <div class="form-group row">
                <label for="Martial status" class="text-center col-lg-3 col-form-label">Estado civil</label>
                <div class="col-lg-4">
                    <select class="form-control" value="`+ estadocivil + `" id="martialStatus">
                        <option>Soltero</option>
                        <option>Casado</option>
                        <option>Divorciado</option>
                        <option>Viudo</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="phone" class="text-center col-lg-3 col-form-label">Celular</label>
                <div class="col-lg-6">
                    <input type="tel" data-toggle="tooltip" data-placement="top"
                        title="El celular ingresado debe seguir el siguiente modelo +549-(codigo local)-(7 digitos)"
                        class="form-control" id="phone" name="phone" value="`+ telefono + `"  required>
                </div>
            </div>
        

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Salir</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" id="saveChanges">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>
`;
var saveChanges = document.getElementById("saveChanges").addEventListener('click', function () {
    var nuevonombre = document.getElementById("firstName").value;
    var nuevoapellido = document.getElementById("lastName").value;
    var nuevosexo = document.getElementById("sex").value;
    var nuevonacimiento = document.getElementById("birthdate").value;
    var nuevadireccion = document.getElementById("address").value;
    var nuevoestadocivil = document.getElementById("lastName").value;
    var nuevocorreo = document.getElementById("email").value;
    var nuevotelefono = document.getElementById("phone").value;
    var cliente2 = Usuario.getClientID();
    var users = Client.getAll();

    console.log(cliente2);
    var nuevosDatos = {
        username :  users[cliente2].username,
        password : users[cliente2].password,
        firstName : nuevonombre,
        lastName : nuevoapellido,
        sex : nuevosexo,
        birthdate : nuevonacimiento,
        address : nuevadireccion,
        marrialStatus : nuevoestadocivil,
        email : nuevocorreo,
        phone : nuevotelefono
    }
    //console.log(nuevosDatos);
    console.log(users);
    var cambio = users.splice(cliente2,1,nuevosDatos);
    localStorage.setItem("client", JSON.stringify(users));
    
    var cliente = Usuario.getClientID();
    var users = Client.getAll();
    var nombre = users[cliente].firstName;
    var apellido = users[cliente].lastName;
    var sexo = users[cliente].sex;
    var nacimiento = users[cliente].birthdate;
    var direccion = users[cliente].address;
    var nacimiento = users[cliente].birthdate;
    var estadocivil = users[cliente].martialStatus;
    var correo = users[cliente].email;
    var telefono = users[cliente].phone;
    var profile1 = document.getElementById("content").innerHTML = `               <br>
    <div class="container d-flex justify-content-around">
        <div class="user " style="font-family: times, serif; font-size:14pt;">Bienvenido <b>`+ nombre +`</b></div>
        <button type="button" class="btn btn-primary btn-sm " >Cerrar sesion</button>
    </div>
     
    <br><br>
    
    
    <div class="container d-flex justify-content-end"><button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalEditardatos">Modificar datos</button>
    </div>
    
    <p style="font-size: 20px;">Nombre: `+ nombre + `</p>
    <p style="font-size: 20px;">Apellido: `+ apellido + `</p>
    <p style="font-size: 20px;">Sexo: `+ sexo + `</p>
    <p style="font-size: 20px;">Nacimiento: `+ nacimiento + `</p>
    <p style="font-size: 20px;">Direccion: `+ direccion + `</p>
    <p style="font-size: 20px;">Estado civil: `+ estadocivil + `</p>
    <p style="font-size: 20px;">Correo: `+ correo + `</p>
    <p style="font-size: 20px;">Telefono: `+ telefono + `</p>
    
    <!-- Modal -->
    <div class="modal fade" id="modalEditardatos" tabindex="-1" role="dialog" aria-labelledby="modalEditardatosTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modificar datos</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            
            <div class="form-group row">
                <label for="firstName" class="text-center col-lg-3 col-form-label">Nombre</label>
                <div class="col-lg-8">
                    <input type="firstName" class="form-control" id="firstName" value="`+ nombre + `" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="lastName" class="text-center col-lg-3 col-form-label">Apellido</label>
                <div class="col-lg-8">
                    <input type="lastName" class="form-control" id="lastName" value="`+ apellido + `" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="sex" class="text-center col-lg-3 col-form-label">Sexo</label>
                <div class="col-lg-5">
                    <select class="form-control" value="`+ sexo + `" id="sex">
                        <option>Hombre</option>
                        <option>Mujer</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="birthdate" class="text-center col-lg-3 col-form-label">Nacimiento</label>
                <div class="col-lg-5">
                    <input id="birthdate" type="date" name="bday" max="2020-12-31" min="2019-09-26"
                        class="form-control" value="`+ nacimiento + `" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="text-center col-lg-3 col-form-label" >Email</label>
                <div class="col-lg-8">
                    <input type="email" class="form-control" id="email"
                    value="`+ correo + `" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="address" class="text-center col-lg-3 col-form-label">Direccion</label>
                <div class="col-lg-8">
                    <input type="text" class="form-control" id="address" value="`+ direccion + `" 
                        required>
                </div>
            </div>
            <div class="form-group row">
                <label for="Martial status" class="text-center col-lg-3 col-form-label">Estado civil</label>
                <div class="col-lg-4">
                    <select class="form-control" value="`+ estadocivil + `" id="martialStatus">
                        <option>Soltero</option>
                        <option>Casado</option>
                        <option>Divorciado</option>
                        <option>Viudo</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="phone" class="text-center col-lg-3 col-form-label">Celular</label>
                <div class="col-lg-6">
                    <input type="tel" data-toggle="tooltip" data-placement="top"
                        title="El celular ingresado debe seguir el siguiente modelo +549-(codigo local)-(7 digitos)"
                        class="form-control" id="phone" name="phone" value="`+ telefono + `"  required>
                </div>
            </div>
        
    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Salir</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" id="saveChanges">Guardar cambios</button>
      </div>
    </div>
    </div>
    </div>
    `;
    })

})


var profile = document.getElementById("appointments").addEventListener('click', function () {
    var cliente = Usuario.getClientID();
    var users = Client.getAll();
    var nombre = users[cliente].firstName;
    var apellido = users[cliente].lastName;
    var sexo = users[cliente].sex;
    var nacimiento = users[cliente].birthdate;
    var direccion = users[cliente].address;
    var nacimiento = users[cliente].birthdate;
    var estadocivil = users[cliente].martialStatus;
    var correo = users[cliente].email;
    var telefono = users[cliente].phone;
    var profile1 = document.getElementById("content").innerHTML = `              <br>
    <div class="container d-flex justify-content-around">
        <div class="user " style="font-family: times, serif; font-size:14pt;">Bienvenido <b>`+ nombre +`</b></div>
        <button type="button" class="btn btn-primary btn-sm " >Cerrar sesion</button>
    </div>
     
    <br><br>
    
    <form class="container">
        <div class="form-row">
            <div class="form-group col-md-3">
                <label for="inputState">Area</label>
                <select id="area" class="form-control" >
                    <option selected>Elegir...</option>
                    <option>Cirugia</option>
                    <option>Internacion</option>
                    <option>Neonatologia</option>
                    <option>Neurocirugia</option>
                    <option>Nutricion</option>
                </select>
            </div>
            <div class="form-group col-md-3">
                <label for="inputState2">Profesional</label>
                <select id="profesional" class="form-control" >
                    <option selected>Elegir...</option>
                    <option>Lopez, Facundo</option>
                    <option>Juarez, Diego</option>
                    <option>Druck, Alon (recomendado)</option>
                </select>
            </div>
        </div>
        
        <div class="form-row">
        <div class="form-group col-md-3">
        <label for="inputState" class="text-center col-lg-3 col-form-label">Fecha</label>
        <div class="col-lg-12">
            <input id="fecha" type="date" max="2020-12-31" min="2019-09-26" class="form-control" value="2019-09-26" required>
        </div>
    </div>
    <div class="form-group col-md-3">
    <label for="inputState2">Hora</label>
    <select id="hora" class="form-control" >
        <option selected>Elegir...</option>
        <option>10:00</option>
        <option>12:00</option>
        <option>14:00</option>
        <option>16:00</option>
        <option>18:00</option>
        <option>20:00</option>
    </select>

</div>
        </div>
        <button type="" class="btn btn-primary" id="btnturn">Sacar turno</button>
        <button type="" class="btn btn-primary" id="btnViewTurns">Ver mis turnos</button>
    </form>
    <br><br>
    <table class=" container table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Dia</th>
      <th scope="col">Hora</th>
      <th scope="col">Area</th>
      <th scope="col">Medico</th>
    </tr>
  </thead>
  <tbody id="turnosConfirmados">


    
  </tbody>
</table>
    
    `;
    var btnturn = document.getElementById("btnturn").addEventListener('click', function () {

        var turns = JSON.parse(localStorage.getItem("turns")) || [];
        console.log(turns);
        var area = document.getElementById("area").value;
        var profesional = document.getElementById("profesional").value;
        var fecha = document.getElementById("fecha").value;
        var hora = document.getElementById("hora").value;

        var turnosConfirmados = document.getElementById("turnosConfirmados");

        var datosTurno = {
            area: area,
            profesional: profesional,
            fecha: fecha,
            hora: hora
        }



        function funcion(item, index) {
            turnosConfirmados.innerHTML += `<tr>
            <th scope="row">1</th>
            <td>`+ item.fecha + `</td>
            <td>`+ item.hora + `</td>
            <td>`+ item.area + `</td>
            <td>`+ item.profesional + `</td>
          </tr>`;
        }
        if (area == "Elegir...") {
            document.getElementById("area").setAttribute("class", "form-control is-invalid");
        }
        else {
            document.getElementById("area").setAttribute("class", "form-control is-valid");
        }

        if (profesional == "Elegir...") {
            document.getElementById("profesional").setAttribute("class", "form-control is-invalid");
        }
        else {
            document.getElementById("profesional").setAttribute("class", "form-control is-valid");
        }

        if (hora == "Elegir...") {
            document.getElementById("hora").setAttribute("class", "form-control is-invalid");
        }
        else {
            document.getElementById("hora").setAttribute("class", "form-control is-valid");
        }

        if (area != "Elegir..." && profesional != "Elegir..." && hora != "Elegir...") {
            var r = confirm("Estas seguro que queres ese turno?");
            if (r == true) {
                alert("Turno agendado!")
                turns.push(datosTurno);
                localStorage.setItem("turns", JSON.stringify(turns));
                turnosConfirmados.innerHTML = '';
                turns.forEach(funcion);
            }

        }
    })
    var btnViewTurns = document.getElementById("btnViewTurns").addEventListener('click', function () {
        var turns = JSON.parse(localStorage.getItem("turns")) || [];
        turnosConfirmados.innerHTML = '';
        turns.forEach(funcion);

        function funcion(item, index) {
            turnosConfirmados.innerHTML += `<tr>
            <th scope="row">1</th>
            <td>`+ item.fecha + `</td>
            <td>`+ item.hora + `</td>
            <td>`+ item.area + `</td>
            <td>`+ item.profesional + `</td>
          </tr>`;
        }
    })
})
var profile = document.getElementById("history").addEventListener('click', function () {

    var cliente = Usuario.getClientID();
    var users = Client.getAll();
    var nombre = users[cliente].firstName;
    var apellido = users[cliente].lastName;
    var sexo = users[cliente].sex;
    var nacimiento = users[cliente].birthdate;
    var direccion = users[cliente].address;
    var nacimiento = users[cliente].birthdate;
    var estadocivil = users[cliente].martialStatus;
    var correo = users[cliente].email;
    var telefono = users[cliente].phone;
    var profile1 = document.getElementById("content").innerHTML = `      <br>
    <div class="container d-flex justify-content-around">
        <div class="user " style="font-family: times, serif; font-size:14pt;">Bienvenido <b>`+ nombre +`</b></div>
        <button type="button" class="btn btn-primary btn-sm " >Cerrar sesion</button>
    </div>
     
    <br><br>
    
    <p class="text-center" style="font-size: 40px;">Historial clinico</p>

    <table class=" container table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Dia</th>
      <th scope="col">Hora</th>
      <th scope="col">Opcion??</th>
      <th scope="col">Medico</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>15/10/2018</td>
      <td>18:30</td>
      <td>Turno</td>
      <td>Druck, Alon</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>18/11/2018</td>
      <td>15:30</td>
      <td>Internacion</td>
      <td>Druck, Alon</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>05/03/2019</td>
      <td>10:00</td>
      <td>Operacion</td>
      <td>Druck, Alon</td>
    </tr>

  </tbody>
</table>
`;
})
var profile = document.getElementById("doctors").addEventListener('click', function () {
    var cliente = Usuario.getClientID();
    var users = Client.getAll();
    var nombre = users[cliente].firstName;
    var apellido = users[cliente].lastName;
    var sexo = users[cliente].sex;
    var nacimiento = users[cliente].birthdate;
    var direccion = users[cliente].address;
    var nacimiento = users[cliente].birthdate;
    var estadocivil = users[cliente].martialStatus;
    var correo = users[cliente].email;
    var telefono = users[cliente].phone;
    var profile1 = document.getElementById("content").innerHTML = `              <br>
    <div class="container d-flex justify-content-around">
        <div class="user " style="font-family: times, serif; font-size:14pt;">Bienvenido <b>`+ nombre +`</b></div>
        <button type="button" class="btn btn-primary btn-sm " >Cerrar sesion</button>
    </div>
     
    <br><br>
    
    <form class="container">
    <p class="text-center" style="font-size: 30px;">Ginecologia</p>
        <div class="container">
            <div class="row">
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>Juan Lopez</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://frasesdelavida.com/wp-content/uploads/2018/05/Frases-de-me%CC%81dicos.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>Valentina Juarez</b></h4>
                    <p>Ginecologa</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRtSYf8nJyV1anMHpeRsW_0v-XJTrjqB7P3zy_tSJevFG-GgmQA" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>Marcos Teran</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcoxmKYtWOXlF_5G-K8E8DlGDxVVbAG9alJywfvunIKZlbvPE7ag" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>Facundo Gimenez</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
            </div>
        </div>

        <p class="text-center" style="font-size: 30px;">Traumatologia</p>
        <div class="container">
            <div class="row">
                <div class="col-3 card">
                    <img src="http://www.cosale.cl/wp-content/uploads/2017/05/doc1a.png" alt="Avatar" style="width:100%; height: 170px;"">
                    <div class="container">
                    <h4><b>Facundo Velez</b></h4>
                    <p>Traumatologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="http://argentinosenirlanda.ie/wp-content/uploads/2017/06/Trabajar-de-m%C3%A9dico-en-Irlanda.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Traumatologa</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="http://argentinosenirlanda.ie/wp-content/uploads/2017/06/Trabajar-de-m%C3%A9dico-en-Irlanda.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Traumatologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Traumatologo</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-center" style="font-size: 30px;">Neonatologia</p>
        <div class="container">
            <div class="row">
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-center" style="font-size: 30px;">Neurocirugia</p>
        <div class="container">
            <div class="row">
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
            </div>
        </div>




    
    `;


})
var profile = document.getElementById("familiargroup").addEventListener('click', function () {
    console.log("Hola4");
})

