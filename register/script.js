function validateForrm(event){
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var phonenumber = document.getElementById("phonenumber").value
    var gender = document.getElementById("gender").value
    var checkbox = document.getElementById("checkbox").checked
 
    event.preventDefault()

    if(username == ""){
        alert("Username cannot be empty")
    }
    else if(!checkPassword(password)){
        alert("Password must be at least 8 characters and is alphanumeric")
    }
    else if(!checkEmail(email)){
        alert("Email used must be valid")
    }
    else if(phonenumber.charAt(0) == 0 || phonenumber.length != 11){ 
        alert("phone number cannot be empty and must be 11 number")
    }
    else if(gender == "empty"){
        alert("Gender cannot be empty")
    }
    else if(!checkbox){
        alert("terms and conditions must be agreed to")
    }
    else{
        alert("Form submitted succesfully")
        window.location.href = "home.html";
    }
}

function checkEmail(email){
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            return true
        }
        else{
            return false
        }
}

function checkPassword(password){
    if(password.length < 8){
        return false
    }

    isAlpha = false
    isNum = false

    for(var i = 0; i < password.length; i++){
        if(isNaN(password[i])){
            isAlpha = true
        }
        else{
            isNum = true
        }

        if(isAlpha && isNum){
            return true
        }
    }

    return false
}