export default class Usuario{
    constructor(props){
        this.props = props;
    }

    static getAllClient(){
        return JSON.parse(localStorage.getItem("client"));
    }

    static getAllDoctor(){
        return JSON.parse(localStorage.getItem("doctor"));
    }

    static searchUsername(username, password){
        let clients = this.getAllClient();
        let doctors = this.getAllDoctor();
        const matchClients = clients.find(client => client.username === username);
        const matchDoctors = doctors.find(doctor => doctor.username ===  username);
        if (matchClients === undefined && matchDoctors === undefined)
            document.getElementById("exampleInputEmail1").setAttribute("class", "form-control is-invalid");
        else if(matchClients !== undefined){
            if(matchClients.password === password) location.href = "index.html";//Pagina cleintes
            else {
                document.getElementById("exampleInputPassword1").value = '';
                document.getElementById("exampleInputEmail1").setAttribute("class", "form-control is-invalid");
            }
        }
        else if (matchDoctors !== undefined){
            if(matchDoctors.password === password) location.href = "register.html"; //Pagina doctores
            else {
                document.getElementById("exampleInputPassword1").value = '';
                document.getElementById("exampleInputEmail1").setAttribute("class", "form-control is-invalid");
            }
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
