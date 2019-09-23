import '../src/style/template.css';
import Usuario from './Usuario';

document.getElementById("btnIngresar").addEventListener('click',function(){
    var user = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    Usuario.searchUsername(user,password);
})

