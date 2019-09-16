document.getElementById("btnEnviar").addEventListener('click',function(){
    console.log("hola");
    var mail = document.getElementById("recipient-name").value;
    console.log(mail);
    let emailjs = require('emailjs-com')
    var params = {
        to_name: 'Alon',
        from_name: 'Rolling Clinic',
        // reply_email: 'santi_albornoz@hotmail.com',
        message_html: 'Te ayudaremos a recuperar tu contrasenia!',
        username: Math.floor(Math.random() * 9999999), //USUARIO
        password: Math.floor(Math.random() * 9999999) //CONTRASEÑA
        };
        emailjs.send( 'clinica', 'template_KxYlQRd1', params, 'user_21fTryGgaycpBI8iJA7b0' );
})
