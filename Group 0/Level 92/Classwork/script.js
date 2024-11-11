const form = document.getElementById("register-form")
const loginForm = document.getElementById("login-form")

let dataBase = []


class Account {

    constructor(firstname, password, email){
        this.firstname = firstname
        this.password = password
        this.email = email
    }

}

form.addEventListener("submit", function(e){
    e.preventDefault();


    dataBase.push(new Account(form.name.value, form.password.value, form.email.value))
    console.log(dataBase)
})


loginForm.addEventListener("submit", function(e){
    e.preventDefault(); 

    const acc = dataBase.find((obj) => obj.email === loginForm.email.value)

    if(acc.password === loginForm.password.value) alert("Succesfull")
    else alert("Noo")
})














// const person1 = new Account("Vano", "Motiashvili", "xxmarselxx7@gmail.com")


// person1.changeName = "Luka"
// console.log(person1)



