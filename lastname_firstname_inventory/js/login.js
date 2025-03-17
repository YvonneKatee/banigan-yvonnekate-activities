function checkUser(){
    var username = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    if(username === "admin" && password === "1234"){
        alert("Login Successful!");
    }else{
        message.style.display="block";

    }
    }

