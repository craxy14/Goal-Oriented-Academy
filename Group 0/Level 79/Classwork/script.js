// function manualFilter(subFunc, arr){
//     let filteredArr = []

//     for(let i = 0; i < arr.length ; i++){
//         if(check(arr[i]) == true){
//             filteredArr.push(subFunc(arr[i]))
//         }
//     }
//     console.log(filteredArr)
// }


// function check(num){
//     console.log(num > 0)
// }

// let result = manualFilter(check , [1 , 2 , 3 , 4 , -5 , -11 , -23 , 0])

// console.log(result)


// let names = ["6" , "10" , "11"]
// let newNames = names.map(addChar)

// function addChar(value){    
//     if(value % 2 == 0){
//         return value
//     }
// }

// addChar(names)
// console.log(newNames)




// let ajafsandali = ["vano" , 15 , 20 , 13.55 , "luka" , true]

// let filteredArr = ajafsandali.filter(checkInt)

// function checkInt(list){
//     if(Number.isInteger(list))
//         return list
// }

// checkInt(ajafsandali)

// console.log(filteredArr)


// 48
let numbers = [1, 2, 3, 4, 5];

let multipliedNumbers = numbers.map(function(num, index){
    if (index % 2 !== 0) {
        return num * 2
    }
})

console.log(multipliedNumbers)