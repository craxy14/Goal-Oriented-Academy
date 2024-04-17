// //             //Homework N1
// // let i = 0

// // while(true){
// //     console.log(i)
// //     if(i === 20){
// //         break
// //     }
// //     i++
// // }




// //             //Homework N2
// // let a = 1

// // while(a<=100){
// //     console.log(a)
// //     a++
// // }




// //             //Homework N3
// // age = 15

// // if(age > 15){
// //     console.log("Greater then 15")
// // }else if(age < 15){
// //     console.log("Lower then 15.")
// // }else{
// //     console.log("Equals to 15.")
// // }







// const person = {
//     name: "Vano",
//     age: 16,
//     city: "Tbilisi",
//     greet: function(){
//         console.log("Hello" , person.name , "how are you?")
//     },
//     school: {
//         score: 100,
//         class: "11g"
//     }

// }

// console.log(person)

// console.log(person.name)
// person.age = 20
// person.country = prompt("Enter Your Country: ")
// person.greet()


// const calculator = {
//     add: function(num1 , num2){
//         console.log(num1 + num2)
//     },
//     subtract: function(num1 , num2){
//         console.log(num1 - num2)
//     },
//     multiply: function(num1 , num2){
//         console.log(num1 * num2)
//     },
//     divide: function(num1 , num2){
//         console.log(num1 / num2)
//     },
// }

// calculator.divide(5 , 10)


const obj = {}

const form = document.getElementById("form")
const btn = document.getElementById("submit")

form.addEventListener("submit" , function(e){
    e.preventDefault();
    
    username = form.elements.username.value
    password = form.elements.password.value

    if(username.length >= 5 && password.length >= 8){
        obj.username = username
        obj.password = password
    }else {
        alert("Failed to register!")
    }
    console.log(obj)
})