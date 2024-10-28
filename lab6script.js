function practice2(){
    console.log("button pressed: text has changed according to the values entered"); //debugging output to the console to confirm the function is being called by the practice2 html
    borderR = document.getElementById("borderR").value; //set variable borderR to the value entered by the user at borderR input in practice2.html
    borderG = document.getElementById("borderR").value; //set variable borderG to the value entered by the user at borderG input in practice2.html
    borderB = document.getElementById("borderR").value; //set variable borderB to the value entered by the user at borderB input in practice2.html

    borderWIDTH = document.getElementById("borderWIDTH").value; //set variable borderWIDTH to the value entered by the user at 'borderWIDTH' input in practice2.html

    backgroundR = document.getElementById("backgroundR").value; //set variable backgroundR to the value entered by the user at backgroundR input in practice2.html
    backgroundG = document.getElementById("backgroundG").value; //set variable backgroundG to the value entered by the user at backgroundG input in practice2.html
    backgroundB = document.getElementById("backgroundB").value; //set variable backgroundB to the value entered by the user at backgroundB input in practice2.html

    var placeholder = document.getElementById("placeholder"); //sets variable placeholder to the placeholder id in practice2.html, which is the paragraph tag text
    placeholder.style.borderColor = `rgb(${borderR}, ${borderG}, ${borderB})`; //sets the border color of placeholder to the values entered by the user(borderR, borderG, borderB)
    placeholder.style.borderWidth = borderWIDTH; //sets the border width of placeholder to the value entered by the user(borderWIDTH)
    placeholder.style.backgroundColor = `rgb(${backgroundR}, ${backgroundG}, ${backgroundB})`; //sets the background color of placeholder to the values entered by the user(backgroundR, backgroundG, backgroundB)
}

function practice3(){
    var password = document.getElementById("password").value; //sets the variable password to the value given by the user at the input with id 'password' in practice3.html
    var confirmPassword = document.getElementById("confirmPassword").value; //sets the variable confirmPassword to the value given by the user at the input with id 'confirmPassword' in practice3.html

    if (password.length < 8 || confirmPassword.length < 8){ //If statement that checks if either of the passwords entered by the user are less than 8, meaning they are too short
        alert("The password you entered is less than 8 characters long. Please add additional characters to increase security!") //alerts the user to their mistake
    }
    else if(password != confirmPassword){ //if statement that checks if the two passwords enter are not equal(don't match)
        alert("The two passwords entered do not match. Please ensure the 'Re-Enter password' field matches the 'Password' field") //alerts the user to their mistake
    }
    else{ //if the length of the passwords are good and they match, then they are valid and nothing needs to be changed
        alert("Passwords match and are valid in length!") //tells the user their password was successful
    }
}