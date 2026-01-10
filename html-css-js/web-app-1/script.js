let users=[];
function dispMessage(){
    a=10
    b=20
    c=a+b
    //alert("Hello")
    // const user = {name:"jhon",email:"john@gmail.com",password:"1234",};
    // console.log(user);
    // const arr = ["Maths","Science"];
    // console.log(arr[0]);
    // arr.push("English");
    // console.log(arr)
    //alert(document.getElementById("txtEmail").value)
    // lblmessage.innerHTML=document.getElementById("pass").value
    // pass.innerHTML=document.getElementById("pass").value
    // lblmessage.innerHTML=document.getElementById("txtEmail").value + "->"+document.getElementById("pass").value
    // let email = document.getElementById("txtEmail").value;
    // let pass = document.getElementById("pass").value;
    // if(email==="ruthwikvallala@gmail.com" && pass ==="12345"){
    //     lblmessage.innerHTML = "Welcome";
    // }
    // else{
    //     lblmessage.innerHTML = "Access deined";
    // }
    let email = document.getElementById("txtEmail").value;
    let pass = document.getElementById("pass").value;
    let found = users.filter((e)=>e.Email===email && e.Password===pass);
    // let found = users.find((e)=>e.Email===email && e.Password===pass);
    // let found = users.map((e)=>e.Email===email && e.Password===pass);
    if(found){
        lblmessage.innerHTML="Welcome";
    }
    else{
        lblmessage.innerHTML="access denied";
    }
}

function showLoginFrom(){
    let str =`
    <h3>Login Form</h3>
        <p><label id="lblmessage"></label></p>
        <p><label id="pas"></label></p>
        <p><input type="text" id="txtEmail"></p>
        <p><input type="password" id="pass"></p>
        <p><button class= "login-btn" onclick="dispMessage()">Log in</button></p>
        <hr>
        <p><button class ="register-btn" onclick = "showRegisterForm()">Create Account</button></p> `
        root.innerHTML = str
}
function showRegisterForm(){
    str = `<h3> Registration Form </h3>
            <p><label>Enter User Name: </label><input type="text" id = "name", placeholder="Enter user name"></p>
            <p><label>Enter User Email: </label><input type="text" id = "email" placeholder="Enter user email"></p>
            <p><label>Enter User Password: </label><input type="password"id= "pass" placeholder="Enter your password"></p>
            <p><button onclick = "adduser()">Submit</button></p>
            <p>Already a member ?<a href=""> login here`
        root.innerHTML=str
}

function adduser(){
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let pass = document.getElementById("pass").value;
            let user = {Name:name,Email:email,Password:pass,}
            users.push(user);
            showLoginFrom();
            console.log(users);
}