function checkuser(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const messageElement = document.getElementById("message");

    if(username === "admin" &&password ==="pass123"){
        messageElement.textContent = "login successfully";
        messageElement.style.color = "pink";
     } else{
        messageElement.textContent = "Invalid username";
        messageElement.style.color = "pink";
     }
    }
