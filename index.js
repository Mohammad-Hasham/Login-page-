const emaillInput = document.getElementById("userEmail")
const passwordInput = document.getElementById("userPassword")
const checkbox = document.getElementById("checkbox")
const lastText = document.getElementById("textp")

let userName = "majid";
let password = "123";


function submmitBtn(){
    const displayUserName = emaillInput.value
    const displayPassword = passwordInput.value
    


if(displayUserName === userName && displayPassword === password ){
    lastText.textContent = "Correct"
    lastText.style.color = "green"
    setTimeout(() => {
    window.location.href = "home.html";
}, 3000);
}
else if (displayUserName === "" ){
    lastText.textContent = "please Enter the user name"
    lastText.style.color = "white"

}
else if (displayPassword === ""){
    lastText.textContent = "please Enter the password"
    lastText.style.color = "white"

}
else{
    lastText.textContent = "incorrect"
    lastText.style.color = "red"
}




}

