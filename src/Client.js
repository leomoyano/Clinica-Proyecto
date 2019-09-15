export default class Client {

    constructor(props){
        this.props = props;
    }

    static getAll(){
        return JSON.parse(localStorage.getItem('client')) || [];
    }

    static setAll(clients){
        return localStorage.setItem('client',JSON.stringify(clients));
    }

    register(){
        let clients = Client.getAll();
        clients.push(this.props);
        Client.setAll(clients);
    }

    /* Devuelve true si esta bien ingresado el usuario, caso contrario devuelve false */
    static validUsername(username){
        if(/\s/.test(username)){
            return false;
        }
        if (this.searchUsername(username)){
            alert("Ya existe ese nombre de usuario");
            return false;
        }
        if(username.length < 4 || username.length > 32) return false;
        else return true;
    }

    /* Devuelve true si se encontro un usuario con el mismo nombre del que se quiere ingresar */
    static searchUsername(username){
        let users = this.getAll(); //Traer del local storage los usuarios administrados por el negro
        const match = users.find(user => user.firstName === username); //cambiar el firstname con username una vez que se tenga lista la glase usuario
        if (match === undefined) return false;
        else return true;
    }

    /* Devuelve true si cumple todos los requisitos a la hora de ingresar una contraseña, caso contrario devuelve false */
    static validPassword(password){
        if(/\s/.test(password)) return false;
        if(!/\W/.test(password) && !/_/.test(password)) return false;
        if(!/[A-Z]/.test(password)) return false;
        if(password.length < 8 || password.length > 32) return false;
        else return true;
    }
}