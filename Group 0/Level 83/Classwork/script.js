const numbers = [1 , 2 , 3 , 4 , 5]


// function manualForEach(arr,func){
//     for(let i = 0; i < arr.length; i++){
//         func(arr[i])
//     }
// }

// let sum = 0

// manualForEach(numbers , function(value){
//     sum += value
// })

// console.log(sum)






// let sum = 0

// numbers.forEach(function(value){
//     sum += value    
// })

// console.log(sum)





// function manualReduce(arr, func, startingValue) {
//     let result = startingValue;
//     for (let i = 0; i < arr.length; i++){
//         result = func(result, arr[i])
//     }
//     return result;
// }
// const myArr = [1, 2, 3, 4, 5];
// const result = manualReduce(myArr, function(result, nextElement) {
//         return result + nextElement
//     }, 5)


// console.log(result)




let sum = numbers.reduce(function(pre , cur){
    if(cur % 2 != 0){
        return pre + cur
    }
    return pre + 0
},)

console.log(sum)