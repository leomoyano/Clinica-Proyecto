export default class Doctor {

    constructor(props){
        this.props = props;
    }

    static getAll(){
        return JSON.parse(localStorage.getItem('doctor')) || [];
    }

    static setAll(doctors){
        return localStorage.setItem('doctor',JSON.stringify(doctors));
    }

    register(){
        let doctors = Doctor.getAll();
        doctors.push(this.props);
        Doctor.setAll(doctors);
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

    static validName(name){
        let valid = true;
        for (let i=0; i<name.length; i++){
            if(/\W/.test(name[i]) && !/\s/.test(name[i])){
                valid = false;
                break;
            }
            else if(/[0-9]/.test(name[i])){
                valid = false;
                break;
            }
            else if(/_/.test(name[i])){
                valid = false;
                break;
            }
        }
        return valid;
    }

    /* Devuelve true si se encontro un usuario con el mismo nombre del que se quiere ingresar */
    static searchUsername(username){
        let users = this.getAll();
        const match = users.find(user => user.username === username);
        if (match === undefined) return false;
        else return true;
    }

    /* Devuelve true si cumple todos los requisitos a la hora de ingresar una contraseña, caso contrario devuelve false */
    static validPassword(password){
        if(/\s/.test(password)) return false;
        if(!/\W/.test(password) && !/_/.test(password)) return false;
        if(!/[A-Z]/.test(password)) return false;
        if(!/[0-9]/.test(password)) return false;
        if(password.length < 8 || password.length > 32) return false;
        else return true;
    }
}