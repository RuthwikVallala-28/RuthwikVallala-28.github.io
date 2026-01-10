function dispMessage(){
    a=10
    b=20
    c=a+b
    //alert("Hello")
    //alert(document.getElementById("txtEmail").value)
    // lblmessage.innerHTML=document.getElementById("pass").value
    // pass.innerHTML=document.getElementById("pass").value
    // lblmessage.innerHTML=document.getElementById("txtEmail").value + "->"+document.getElementById("pass").value
    let email = document.getElementById("txtEmail").value;
    let pass = document.getElementById("pass").value;
    if(email==="ruthwikvallala@gmail.com" && pass ==="12345"){
        lblmessage.innerHTML = "Welcome";
    }
    else{
        lblmessage.innerHTML = "Access deined";
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
            <p><label>Enter User Name: </label> <input type="text" placeholder="Enter user name"></p>
            <p><label>Enter User Email: </label><input type="text" placeholder="Enter user email"></p>
            <p><label>Enter User Password: </label><input type="password" placeholder="Enter your password"></p>
            <p><h4> Already a member ?</h4> <button onclick= "showLoginFrom()">Open Form</button>`
        root.innerHTML=str
}