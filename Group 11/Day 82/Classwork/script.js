// დავალება 1

// const even_sum = function(border){
//     sum = 0

//     for(let i = border; i >= 0; i--){
//         if(i % 2 == 0){
//             sum += i
//         }
//     }
//     console.log(sum)
// }
// even_sum(50)


// დავალება 2
// for(let i = 20; i >= 0; i--){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }


// დავალება 3
// for(let i = 0; i <= 10; i += 2){
//     console.log(i)
// }



// დავალება 4
// const generate_even = function(border){
//     const even_arr = []

//     for(let i = 0; i <= border; i++){
//         if(i % 2 == 0){
//             even_arr.push(i)
//         }
//     }
//     return(even_arr)
// }

// let arr = generate_even(35)
// console.log(arr)

// const calculateSum = function(arr){
//     sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += i
//     }
//     return sum
// }
// console.log(calculateSum(arr))




// დავალება 5
// const resultArr1 = []

// for(let i = 0; i <= 10; i++){
//     if(i % 2 == 0){
//         resultArr1.push({"even": i})
//     }else{
//         resultArr1.push({"odd": i})
//     }
// }
// console.log(resultArr1)




// const resultArr2 = []

// for(let i = 0; i <= 10; i++){
//     const numType = {
//         value: i,
//         type: ""
//     }

//     if(i % 2 == 0){
//         numType.type = "even"
//     }else{
//         numType.type = "odd"
//     }

//     resultArr2.push(numType)
// }
// console.log(resultArr2)






let attempts = 3
let authorized = false

while(attempts > 0 && authorized != true){
    pass = prompt("enter your password")
    
    if(pass == "vano123"){
        alert("congrats")
        authorized = true
    }else{
        attempts --
    }
}





// let attempts = 3
// let pass = ""

// while(attempts > 0){
//     if(pass != "vano123"){
//         pass = prompt("enter your password")
//         attempts --
//     }else{
//         alert("congrats")
//         break
//     }
// }