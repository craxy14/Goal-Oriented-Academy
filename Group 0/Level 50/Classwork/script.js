// // const array1 = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
// // const array2 = []

// // for (let i = 0; i < array1.length; i++) {
// //     if (array1[i] % 2 == 0) {
// //         array2.push(i)
// //     }else {
// //         console.log(i , "odd")
// //     }
// // }

// // console.log(array2)


// // const array = []
// // sum = 0

// // for (let i = 0; i <= 100; i+= 5) {
// //     array.push(i)
// //     sum += i
// // }

// // console.log(array)
// // console.log(sum)


// const numbers = []

// for (let i = 0; i < 10; i++) {
//     const num = Number(prompt(`Please enter number ${i}: `))
//     numbers.push(num)
// }

// let sum = 0
// let mult = 1

// for (let i = 0; i < numbers.length; i++) {
//     const num = numbers[i]
//     console.log(Math.pow(num , 2))
//     console.log(Math.sqrt(num))
//     sum += num
//     mult *= num
// }

// console.log(sum , mult)
let tickets = Number(prompt("How many tickets would you like to buy?"))

for(let i = 0; i < tickets; i++) {
    let name = prompt("Enter your Name: ")
    let surname = prompt("Enter your Surname: ")
    let age = prompt("Enter your Age: ")
}


let ticketCode = []
const abc = ["A" , "B" , "D" , "E" , "0" , "1" , "2" , "3" , "4" , "5"]

let ticketCodeGenerator = {
    random: function() {
        ticketCode = Math.random(abc)
    }
}
ticketCodeGenerator.random()

console.log(ticketCodeGenerator.random)