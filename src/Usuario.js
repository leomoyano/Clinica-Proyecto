export default class Usuario{
    constructor(props){
        this.props = props;
    }

    static getAll(){
        return JSON.parse(localStorage.getItem("client"));
    }

    static searchUsername(username, password){
        let users = this.getAll(); 
        const matchuser = users.find(user => user.username ===  username);
        if (matchuser === undefined)
            document.getElementById("exampleInputEmail1").setAttribute("class", "form-control is-invalid");
        else{
            if(matchuser.password === password) location.href = "index.html";
            else {
                document.getElementById("exampleInputPassword1").value = '';
                document.getElementById("exampleInputEmail1").setAttribute("class", "form-control is-invalid");
            }
        }
    }
    static searchEmail(email){
        let users = this.getAll(); 
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
