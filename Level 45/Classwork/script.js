// const me = {
//     name: "Vano",
//     surname: "Motiashvili",
//     birthday: "01/07/2004",
//     height: "1.86",

//     changeName: function() {
//         me.name = "Luka"
//     }
// }

// me.changeName()
// console.log(me)




// const car = {
//     model: "Mercedes",
//     year: "2012",
//     color: "Black",
//     returnEngine: function(){
//         console.log(car.engine)
//     },

//      engine: {
//         cylinders: "V8",
//         Horsepower: "518hp",
//         Torque: "516 lb-ft",
// }
// }
// car.returnEngine()
// console.log(car.returnEngine)



// const form = document.getElementById("form")
// const btn = document.getElementById("btn")

// const accountObj = {}

// btn.addEventListener("click" , function(){
//     accountObj.name = form.elements.name.value;
//     accountObj.lastname = form.elements.lastname.value;
//     accountObj.age = form.elements.age.value;

//     console.log(accountObj)
// })

// console.log(accountObj)



const me = {
    name: "Vano",
    surname: "Motiashvili",
    age: "13",

    bankAccount: {
        money: "650$",
        transferHistory: "15,325$"
    },
    
    returnName: function(){
        console.log(me.name)
    }
}

const you = {
    name: "Luka",
    surname: "Tskhvaradze",
    age: "17",

    bankAccount: {
        money: "7500$",
        transferHistory: "45,225$"
    },

    returnName: function(){
        console.log(you.name)
    }
}

me.returnName()
you.returnName()
console.log(me.bankAccount)
console.log(you.bankAccount)



const form = document.getElementById("form")
const btn = document.getElementById("btn")



btn.addEventListener("click" , function(){

const number1 = form.elements.num1.value
const number2 = form.elements.num2.value

    console.log(Number(number1) + Number(number2))
})





let names = ["Vano" , "Luka" , "Dato"]

names.push("Demetre")
console.log(names)