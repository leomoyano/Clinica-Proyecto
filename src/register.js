import '../src/style/template.css';
import { drawFormClient, drawFormDoctor } from './Utilities';
import Usuario from './Usuario';

document.getElementById("btnIngresar").addEventListener('click',function(){
    var user = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    Usuario.searchUsername(user,password);
})

var btnClients = document.getElementById('btnClients');
var btnDoctors = document.getElementById('btnDoctors');

drawFormClient();

btnClients.addEventListener('click', function () {
    btnClients.setAttribute("class", "list-group-item list-group-item-action active text-center");
    btnDoctors.setAttribute("class", "list-group-item list-group-item-action text-center");
    drawFormClient();
});

btnDoctors.addEventListener('click', function () {
    btnClients.setAttribute("class", "list-group-item list-group-item-action text-center");
    btnDoctors.setAttribute("class", "list-group-item list-group-item-action active text-center");
    drawFormDoctor();    
});

