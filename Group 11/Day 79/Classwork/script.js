const form = document.getElementById("myForm")
const btn = document.getElementById("btn")

// const validation = function(){
//     const email = form.elements.email.value
//     const password = form.elements.password.value

//     if(email == "" || password == ""){
//         alert("Fill in all the fields")
//         return;
//     }

//     console.log(`Email: ${email} / Password: ${password}`)
// }

// btn.onclick = validation



//დავალება 1:
// const num1 = Number(prompt("Enter First Num: "))
// const num2 = Number(prompt("Enter First Num: "))
// alert(num1 + num2)




//დავალება 2:
const validateForm = function(){
    const fullname = form.elements.fullname.value
    const email = form.elements.email.value
    const password = form.elements.password.value
    const color = form.elements.color.value 

    if(fullname == "" || email == "" || password == "" || color == ""){
        alert("Fill in all the fields")
        return;
    }
    alert("Form subbmited successfully")
    console.log(`Fullname: ${fullname} / Email: ${email} / Password: ${password} / Color: ${color}`)
}

btn.onclick = validateForm;