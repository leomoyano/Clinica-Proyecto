import '../src/style/template.css';
import Usuario from './Usuario';
import Client from './Client';
import Doctor from './Doctor';

var login = document.getElementById('login');
var currentClient = Usuario.getClientID();
var currentDoctor = Usuario.getDoctorID();
console.log('currentClient: ' + currentClient);
console.log('currentDoctor: ' + currentDoctor);

if(currentClient != null && currentClient != -1){
    let clients = Client.getAll();
    login.innerHTML = `
        <div class="row justify-content-end">
            <div class="col-xs-5 mr-3">
                <span>${clients[currentClient].firstName[0].toUpperCase()+clients[currentClient].firstName.slice(1)}</span>
                <span class="mr-3">${clients[currentClient].lastName[0].toUpperCase()+clients[currentClient].lastName.slice(1)}</span>
                <a href="profile.html">Turnos</a>
                <span>/</span>
                <a id="closeClient" href="#">Cerrar sesión</a>
                <!-- <span>/</span> -->
            </div>
        </div>
    `;
    document.getElementById('closeClient').addEventListener('click', function(){
        Usuario.setClientID(-1);
        location.reload();
    });
}
else if(currentDoctor != null && currentDoctor != -1){
    let doctors = Doctor.getAll();
    login.innerHTML = `
        <div class="row justify-content-end">
            <div class="col-xs-5 mr-3">
                <span>${doctors[currentDoctor].firstName[0].toUpperCase()+doctors[currentDoctor].firstName.slice(1)}</span>
                <span class="mr-3">${doctors[currentDoctor].lastName[0].toUpperCase()+doctors[currentDoctor].lastName.slice(1)}</span>
                <a href="#">Turnos</a>
                <span>/</span>
                <a id="closeDoctor" href="#">Cerrar sesión</a>
            </div>
        </div>
    `;
    document.getElementById('closeDoctor').addEventListener('click', function(){
        Usuario.setDoctorID(-1);
        location.reload();
    });
}
else{
    login.innerHTML = `
        <div class="row justify-content-end">
            <div class="col-xs-4 mr-3">
                <a href="#" data-toggle="modal" data-target="#exampleModal">iniciar sesion</a>
            </div>
        </div>
    `;
}

document.getElementById("btnIngresar").addEventListener('click',function(){
    var user = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    Usuario.searchUsername(user,password);
})

