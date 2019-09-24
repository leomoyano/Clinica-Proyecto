export default class Usuario{

    /* Propiedades de los clientes */
    static getAllClient(){
        return JSON.parse(localStorage.getItem('client'));
    }
    static setClientID(index){
        localStorage.removeItem('clientID');
        return localStorage.setItem('clientID',JSON.stringify(index));
    }
    static getClientID(){
        return JSON.parse(localStorage.getItem('clientID'));
    }

    /* Propiedades de los doctores */
    static getAllDoctor(){
        return JSON.parse(localStorage.getItem('doctor'));
    }
    static setDoctorID(index){
        localStorage.removeItem('doctorID');
        return localStorage.setItem('doctorID',JSON.stringify(index));
    }
    static getDoctorID(){
        return JSON.parse(localStorage.getItem('doctorID'));
    }

    static searchUsername(username, password){
        let clients = this.getAllClient();
        let doctors = this.getAllDoctor();
        const indexClients = clients.findIndex(client => client.username === username);
        const indexDoctors = doctors.findIndex(doctor => doctor.username ===  username);
        if (indexClients == -1 && indexDoctors == -1)
            document.getElementById("exampleInputEmail1").setAttribute("class", "form-control is-invalid");
        else if(indexClients != -1){
            if(clients[indexClients].password === password){
                this.setClientID(indexClients);
                location.href = "index.html";//Pagina cleintes
            } 
            else {
                document.getElementById("exampleInputPassword1").value = '';
                document.getElementById("exampleInputEmail1").setAttribute("class", "form-control is-invalid");
            }
        }
        else if (indexDoctors != -1){
            if(doctors[indexDoctors].password === password){
                this.setDoctorID(indexDoctors);
                location.href = "index.html";//Pagina cleintes
            } 
            else {
                document.getElementById("exampleInputPassword1").value = '';
                document.getElementById("exampleInputEmail1").setAttribute("class", "form-control is-invalid");
            }
        }
    }

    static editClient(field, input){
        let clients = this.getAllClient();
        let indexClient = this.getClientID();
        switch(field){
            case 'firstName': clients[indexClient].firstName = input; break;
            case 'lastName': clients[indexClient].lastName = input; break;
            case 'sex': clients[indexClient].sex = input; break;
            case 'birthdate': clients[indexClient].birthdate = input; break;
            case 'email': clients[indexClient].email = input; break;
            case 'address': clients[indexClient].address = input; break;
            case 'martialStatus': clients[indexClient].martialStatus = input; break;
            case 'phone': clients[indexClient].phone = input; break;
        }
    }

    static editDoctor(field, input){
        let doctors = this.getAllDoctor();
        let indexDoctor = this.getDoctorID();
        switch(field){
            case 'firstName': doctors[indexDoctor].firstName = input; break;
            case 'lastName': doctors[indexDoctor].lastName = input; break;
            case 'sex': doctors[indexDoctor].sex = input; break;
            case 'birthdate': doctors[indexDoctor].birthdate = input; break;
            case 'email': doctors[indexDoctor].email = input; break;
            case 'address': doctors[indexDoctor].address = input; break;
            case 'martialStatus': doctors[indexDoctor].martialStatus = input; break;
            case 'phone': doctors[indexDoctor].phone = input; break;
            case 'specialism': doctors[indexDoctor].specialism = input; break;
            case 'experience': doctors[indexDoctor].experience = input; break;
        }
    }

    static searchEmail(email){
        let clients = this.getAllClient();
        let doctors = this.getAllDoctor();
        let users = clients.concat(doctors);
        const matchuser = users.find(user => user.email ===  email);
        if (matchuser === undefined) 
        {
            document.getElementById("recipient-name").setAttribute("class","form-control is-invalid");
            return [];
        }
        else {
            document.getElementById("btnEnviar").setAttribute("data-target","#CodeModal");
            return [matchuser.firstName,matchuser.username, matchuser.password];
        }
    }
}
