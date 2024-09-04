// every:
// All Numbers Positive: Check if every number in an array is positive.
// const arr = [5, 15, 23, 11, -5, 13, -5, -15, -1.6, -2, 3];
// const positiveOnly = arr.every(positivesFunc);

// function positivesFunc(value) {
//     return value > 0;
// }
// console.log(positiveOnly);



// All Strings Non-Empty: Verify if every string in an array is non-empty.
// const strArr = ["vano", "", "nika", "test", "hello", ""]
// const notEmpty = strArr.every(emptyCheck)

// function emptyCheck(value) {
//     return value.length > 0
// }
// console.log(notEmpty)



// All Booleans True: Confirm if every boolean in an array is true.
// const boolArr = [true, false, true, true, true, false]
// const allTrue = boolArr.every(trueCheck)

// function trueCheck(value) {
//     return value == true
// }
// console.log(allTrue)



// All Numbers Even: Check if every number in an array is even.
// const numArr = [2, 1, 15, 23, 21, 11, 14, 16, 10]
// const allEven = numArr.every(evenCheck)

// function evenCheck(value) {
//     return value % 2 == 0;
// }
// console.log(allEven)



// Create manual function of every
// const cars = ["red", "red", "blue", "red"];

// function manualEvery(array, func) {
//     for (let i = 0; i < array.length; i++) {
//         const isTrue = func(array[i]);
//         if (isTrue === false) {
//             return false;
//         }
//     }
//     return true;
// }

// const isAllRed = manualEvery(cars, function(value) {
//     return value === "red";
// });
// console.log(isAllRed)




// some:
// Has Passing Grades: Check if some grades in an array are above a passing level.
// const scores = [15, 50, 70, 60, 85]

// const checkPassing = scores.some(function(value){
//     return value >= 60
// })
// console.log(checkPassing)


// Contains Admin Users: Verify if some user objects in an array have the role of 'admin'.
// const users = [
//     {
//         "name": "vano",
//         "role": "guest"
//     },

//     {
//         "name": "vano",
//         "role": "admin"
//     },

//     {
//         "name": "vano",
//         "role": "guest"
//     }
// ]

// const checkAdmin = users.some(function(value){
//     return value["role"] == "admin"
// })
// console.log(checkAdmin)




// Has Overdue Items: Confirm if some objects in a list have an overdue property set to true.
// const date = [
//     {
//         "overdue": true
//     },

//     {
//         "overdue": false
//     },

//     {
//         "overdue": true
//     },
// ]

// const checkDue = date.some(function(value){
//     return value["overdue"] == true
// })
// console.log(checkDue)



// Includes Prime Numbers: Check if some numbers in an array are prime numbers.





// Create manual function of some
// const cars = ["red", "red", "blue", "red"];

// function manualSome(array, func) {
//     for (let i = 0; i < array.length; i++) {
//         const isTrue = func(array[i]);
//         if (isTrue === true) {
//             return true;
//         }
//     }
//     return false;
// }

// const isAllRed = manualSome(cars, function(value) {
//     return value === "red";
// });
// console.log(isAllRed)


// find:
// Find First Negative Number: Identify the first negative number in an array.
// const numbers = [5, 15, 23, -5, 12, -15]
// console.log(numbers.find(function(value){
//     return value < 0
// }))



// Find User by ID: Return the first user object in an array with a specific ID.
// const users = [
//     {
//         "name": "vano",
//         "id": 123
//     },

//     {
//         "name": "luka",
//         "id": 321
//     },

//     {
//         "name": "nika",
//         "id": 543
//     },
// ]

// const specificId = users.find(function(value){
//     return value["id"] == 321
// })
// console.log(specificId)





// Find First Incomplete Task: Locate the first task object in an array that has complete property set to incomplete.
// const taskProgress = [
//     {
//         "complete": "done"
//     },

//     {
//         "complete": "done"
//     },

//     {
//         "complete": "incomplete"
//     },
// ]

// const checkTask = taskProgress.find(function(value){
//     return value["complete"] == "incomplete"
// })
// console.log(checkTask)




// Find Product by Name: Search for the first product in an array with a specific name.
// const products = ["milk", "watermelon", "candy", "chocolate milk"]
// const specificProduct = products.find(function(value){
//     return (value === "chocolate milk")
// })
// console.log(specificProduct)



// Create manual function of find
colors = ["red", "yellow", "white", "purple", "green", "pink", "black"]

// function manualFind(arr, func) {
//     for(let i = 0; arr.length; i++){
//         if(func(arr[i])){
//             return arr[i]
//         }
//     }
//     return "was not found!"
// }

// const answer = manualFind(colors, function(value){
//     return value == "purple"
// })
// console.log(answer)






// findIndex:
// Find Index of First Prime Number: Determine the index of the first prime number in an array of integers.
// const numbers = [15, 23, 15, 17, 16]

// const firstPrime = numbers.findIndex(function(value){
//     return value % 2 != 0 && value % 3 != 0 && value % 5 != 0
// })
// console.log(firstPrime)



// Find Index of User with Admin Role: Retrieve the index of the user object in an array with the role of 'admin'.
// const users = [
//     {
//         "name": "vano",
//         "role": "guest"
//     },

//     {
//         "name": "luka",
//         "role": "admin"
//     },

//     {
//         "name": "nika",
//         "role": "ceo"
//     },
// ]

// const findAdmin = users.findIndex(function(value){
//     return value["role"] == "admin"
// })
// console.log(findAdmin)



// Find Index of First Overdue Item: Identify the index of the first item in a list with an overdue property set to true.
// const date = [
//     {
//         "overdue": false
//     },

//     {
//         "overdue": false
//     },

//     {
//         "overdue": true
//     },
// ]

// const findOverdue = date.findIndex(function(value) {
//     return value["overdue"] == true
// })
// console.log(findOverdue)




// Find Index of Product Out of Stock: Search for the index of the first product object in an array with an inStock property set to false.
// const stock = [
//     {
//         "instock": true
//     },

//     {
//         "instock": false
//     },

//     {
//         "instock": true
//     },
// ]

// const findInstock = stock.findIndex(function(value) {
//     return value["instock"] == false
// })
// console.log(findInstock)


// Create manual function of findIndex