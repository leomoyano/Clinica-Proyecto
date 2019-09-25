export default class Usuario{

    /* Propiedades de los clientes */
    static getAllClient(){
        return JSON.parse(localStorage.getItem('client'));
    }
    static setAllClient(clients){
        return localStorage.setItem('client',JSON.stringify(clients));
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
    static setAllDoctor(doctors){
        return localStorage.setItem('doctor',JSON.stringify(doctors));
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

    static editClient(input){
        let clients = this.getAllClient();
        let indexClient = this.getClientID();
        clients[indexClient].firstName = input.firstName;
        clients[indexClient].lastName = input.lastName;
        clients[indexClient].birthdate = input.birthdate;
        clients[indexClient].sex = input.sex;
        clients[indexClient].address = input.address;
        clients[indexClient].email = input.email;
        clients[indexClient].phone = input.phone;
        clients[indexClient].martialStatus = input.martialStatus;
        this.setAllClient(clients);

    }

    static editDoctor(input){
        let doctors = this.getAllDoctor();
        let indexDoctor = this.getDoctorID();
        doctors[indexDoctor].firstName = input.firstName;
        doctors[indexDoctor].lastName = input.lastName;
        doctors[indexDoctor].sex = input.sex;
        doctors[indexDoctor].birthdate = input.birthdate;
        doctors[indexDoctor].email = input.email;
        doctors[indexDoctor].address = input.address;
        doctors[indexDoctor].martialStatus = input.martialStatus;
        doctors[indexDoctor].phone = input.phone;
        doctors[indexDoctor].specialism = input.specialism;
        doctors[indexDoctor].experience = input.experience;
        this.setAllDoctor(doctors);
        
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
