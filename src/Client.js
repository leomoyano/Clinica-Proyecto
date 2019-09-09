export default class Client {
    /*props[]={nombre, apellido, sexo, edad, fecha de nacimiento, estado civil,
               direccion, correo, celular, obra social}*/
    constructor(props){
        this.props = props;
    }

    static getAll(){
        return JSON.parse(localStorage.getItem('client')) || [];
    }
    static setAll(clients){
        return localStorage.setItem('client',JSON.stringify(clients));
    }


    Register(){
        let clients = Client.getAll();
        clients.push(this.props);
        Client.setAll(clients);
        console.log(clients);
    }

    static validUsername(username){
        if(username.length < 4 || username.length > 16) return false;
        else return true;
    }

    static validPassword(password){
        if(password.length < 4 || password.length > 16) return true;
        else return false;
    }

   static searchUsername(username){
        let users = this.getAll(); //Traer del local storage los usuarios administrados por el negro
        const match = users.find(user => user.firstName === username);
        if (match === undefined) return false;
        else return true;
    }
}