
var usuariooo=[{
    username: "alon",
    password : "123"
},
{
    username: "negro",
    password : "1234"
}];
localStorage.setItem("dataBase", JSON.stringify(usuariooo));


export default class Usuario{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    static getAll(){
        return JSON.parse(localStorage.getItem("dataBase"));
    };
    static getUserEnter(){
        return JSON.parse(localStorage.getItem("datosIngresados"));
    }
    static searchUsername(){
        let users = this.getAll(); //Traer del local storage los usuarios administrados por el negro
        let usersEnter = this.getUserEnter(); 
        const matchuser = users.find(user => user.username ===  usersEnter[0].username);

        if (matchuser === undefined)
        {
            console.log("Usuario no encontrado");
        }
        else{
            console.log();
            if(matchuser.username === usersEnter[0].username && matchuser.password === usersEnter[0].password)
            {
                console.log("Ingreso correctamente");
                location.href = "index.html";
                alert("Contraseña correcta.");
            }
            else{
                console.log("Contraseña Incorrecta");
            }
        }

        

        // if (matchuser === undefined && matchpass === undefined) return false;
        // else return true;
    }
    // login(){

    // };
    // changePassword(){};

}
