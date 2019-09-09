import '../src/style/template.css';

var usuariooo=[];
document.getElementById("btnIngresar").addEventListener('click',function(){
    var user= document.getElementById("exampleInputEmail1").value;
    var passw = document.getElementById("exampleInputPassword1").value;
    // Usuario.searchUsername("alon");
    console.log(user);
    console.log(passw);
    datosUsuario={
        username : user,
        password : passw
    }
    console.log(datosUsuario);
    // usuariooo.splice(0,1,datosUsuario);
})

