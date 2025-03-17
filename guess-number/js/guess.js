function checkNumber(){
    const num = document.getElementById('guess').value;
     tri--;
    if(num == random){
        document.getElementById('message').innerHTML = "CORRECT";

    }
    else if(num > random){
        document.getElementById('message').innerHTML = "higher";
    }
    else if(num < random){
        document.getElementById('message').innerHTML = "lower"; 
    }
    }
    if (tri < 0){
        document.getElementById('tries').innerHTML = "you don't have remaining tries";
    }
    else{
        document.getElementById('tries').innerHTML = tri;
    }
    if (num == random){
        tri++;
        document.getElementById('tries').innerHTML = "congrats,you got" + tri + "tries";
    }
    
    

    
