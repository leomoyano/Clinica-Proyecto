import '../src/style/template.css';
import Usuario from './Usuario';



document.getElementById("btnIngresar").addEventListener('click',function(){
    var user= document.getElementById("exampleInputEmail1").value;
    var passw = document.getElementById("exampleInputPassword1").value;
    // Usuario.searchUsername("alon");


    var datosusuario = [{
        username : user,
        password : passw
    }];

    localStorage.setItem("datosIngresados", JSON.stringify(datosusuario));
    Usuario.searchUsername();
    
})

