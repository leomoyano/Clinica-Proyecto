var usuarioo = [];

export default class Usuario{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    static getAll(){
        return localStorage.getItem(usuario);
    };
    static searchUsername(username){
        let usuarios = this.getAll();
        const index = usuarios.findIndex(dato => dato.username === username);
        console.log(index);
        console.log(datos[index]);
    }
    // login(){

    // };
    // changePassword(){};

}
