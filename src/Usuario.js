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
}
