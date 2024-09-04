const cars = ["red" , "red" , "blue" , "red"]

const isAllRed = cars.every(function(value){
    return value == "red"
})

console.log(isAllRed)

// function manualEvery(cars , func){
//     for(let i = 0; i < cars.length; i++){
//         const isTrue = func(cars[i]);
//         if(isTrue === false){
//             return false
//         }
//     }
//     return True
// }

// const isAllRed = manualEvery(cars, function(value){
//     return value === "red"
// })

// console.log(isAllRed)





const isSomeRed = cars.some(function(value){
    return value == "red"
})

console.log(isSomeRed)