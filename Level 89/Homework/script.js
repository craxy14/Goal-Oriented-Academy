// Day 89:

// 1) Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Use a for...of loop to iterate through the array.
// function sumAll(arr) {
//     let sum = 0
//     for (const num of arr) {
//         sum += num
//     }
//     console.log(sum)
// }
// sumAll([1, 3, 15, 23, 16, 65, 54])




// 2) Write a function that takes an array of strings as input and returns the longest word in the array. Use a for...of loop to iterate through the array.
// strings = ["vano", "test", "nika", "motiashvili"]

// function longestStr(arr) {
//     let longest = arr[0]
//     for (const value of arr){
//         if(value.length > longest.length){
//             longest = value
//         }
//     }
//     console.log(longest)
// }
// longestStr(strings)



// 3) Write a function that takes an object as input and returns the count of its properties. Use a for...in loop to iterate through the object's properties.
// const user = {
//     "name": "vano",
//     "surname": "motiashvili",
//     "age": 17,
//     "height": 1.87,
//     "handsome": true
// }

// function lenCount(obj) {
//     let count = 0;
//     for (const property in obj) { 
//         if (obj.hasOwnProperty(property)) { 
//             count += 1;
//         }
//     }
//     console.log(count)
// }
// lenCount(user)


// 4) Write a function that takes an object as input and returns an array containing all the keys of the object. Use a for...in loop to iterate through the object's properties and push each key into an array.
// const user = {
//     "name": "vano",
//     "surname": "motiashvili",
//     "age": 17,
//     "height": 1.87,
//     "handsome": true
// }

// function keyPusher(obj) {
//     const resultArr = []
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             resultArr.push(key)
//         }
//     }
//     return resultArr
// }

// const keys = keyPusher(user)
// console.log(keys)



// 5) Using comments, explain what the scope is. Then write about let, const and var scopes.
// In JavaScript, scope refers to the current context of your code. This context determines where you can access certain variables and functions. In other words, where you decide to define a variable or function in JavaScript impacts where you have access to it later on.


// 6) Using comments, explain what the hoisting is.
// Hoisting is the default behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes during the compilation phase. This guarantees that regardless of where these declarations appear within a scope, they can be accessed throughout that scope.




// Arrow function tasks:
// 1) Write an arrow function that takes a number as input and returns its square.
// const squaredNum = (num) => {
//     console.log(num ** 2)
// }
// squaredNum(2)


// 2) Write an arrow function that takes an array of numbers as input and returns a new array containing only the even numbers.
// const numbers = [5, 15, 23, 12, 4, 8]

// const filteredArr = numbers.filter((value) => value % 2 == 0)
// console.log(filteredArr)



// 3) Write an arrow function that takes an array of numbers as input and returns the sum of all the elements in the array.
// const arr = [15, 23, 15, 125 ,61 ,15]

// const sumAll = (arr) => {
//     let sum = 0
//     for(const num of arr){
//         sum += num
//     }
//     return sum
// }
// console.log(sumAll(arr))



// 4) Write an arrow function that generates a Fibonacci sequence of a given length.


// 5) Write an arrow function that takes a string as input and returns true if it's a palindrome, false otherwise.
// const palindrome = (str) => {
//     return str === str.split('').reverse().join('');
// }
// console.log(palindrome("aaaa"))



// 6) Write a script that toggles the visibility of a specific element when a button is clicked. Use addEventListener with an arrow function to handle the click event.
// const p = document.getElementById("element")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", function(){
//     if(p.style.display === "block") {
//         p.style.display = "none"
//     }else{
//         p.style.display = "block"
//     }
// })