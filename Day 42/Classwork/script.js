const nameInput = document.getElementById("name")
const surnameInput = document.getElementById("surname")
const emailInput = document.getElementById("email") 
const passwordInput = document.getElementById("password")
const ageInput = document.getElementById("age")

const btn = document.getElementById("btn")

btn.addEventListener("click" , function(){
    console.log(nameInput.value , surnameInput.value);
    console.log(emailInput.value , "/" , passwordInput.value);
    console.log(ageInput.value)
})