import '../src/style/template.css';
import Usuario from './Usuario';

document.getElementById("btnEnviar").addEventListener('click', function () {
    var mail = document.getElementById("recipient-name").value;
    var user1 = Usuario.searchEmail(mail);
    console.log(user1);
    console.log("Enviando mail a " + mail);
    let emailjs = require('emailjs-com')
    var params = {
        to_name: user1[0],
        mail_to: mail, 
        from_name: 'Rolling Clinic',
        message_html: 'Te ayudaremos a recuperar tu contrasenia!',
        username: user1[1],
        password: user1[2]
    };
    emailjs.send('clinica', 'template_KxYlQRd1', params, 'user_21fTryGgaycpBI8iJA7b0');
    // }
});
