import '../src/style/template.css';
import Usuario from './Usuario';

document.getElementById("btnEnviar").addEventListener('click',function(){
    console.log("hola");
    var mail = document.getElementById("recipient-name").value;
    //let user = Usuario.searchEmail(mail);
    //if(user.length != 0){
        console.log("Enviando mail a "+mail);
        let emailjs = require('emailjs-com')
        var params = {
            to_name: 'Alon',
            mail_to: mail, //'santialbornoz.156@gmail.com'
            from_name: 'Rolling Clinic',
            // reply_email: 'santi_albornoz@hotmail.com',
            message_html: 'Te ayudaremos a recuperar tu contrasenia!',
            username: "hola",//user.username, //USUARIO
            password: "chau"//user.password //CONTRASEÑA
            };
            emailjs.send( 'clinica', 'template_KxYlQRd1', params, 'user_21fTryGgaycpBI8iJA7b0' );
   // }
});
