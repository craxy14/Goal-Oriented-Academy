// Basic Promise Creation
// Create a simple promise that resolves with a message "Hello, World!" after 2 seconds.

const num = 5

// const hello = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         if(num == 5) resolve("Hello World!")
//         else reject("Num is not 5!")
//     }, 2000)
// })

// hello.then((data) =>{
//     console.log(data)
// }).catch((rejectReason) => {
//     console.log(rejectReason)
// })



//Create a promise that rejects with an error message "Something went wrong!" after 3 seconds. Handle the rejection using .catch().
//Chaining Promises


// const randomPromise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         if(num == 10) resolve("Congrats!")
//         else reject("Something went wrong!")
//     }, 3000)
// })

// randomPromise.then((success) => {
//     console.log(success)
// }).catch((failed) =>{
//     console.log(failed)
// })




//Create a promise that resolves with the number 5. Chain another promise to it that adds 10 to the number and resolves with the new value.
// Using then for Success Handling

// const mathPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(num == 5) resolve(num)
//         else reject(num)
//     }, 1000)
// })


// mathPromise.then((num) =>{
//     console.log(num, "First Then")
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             if(true) resolve(num)
//         }, 2000)
//     })

// }).then((result) =>{
//     console.log(result + 10, "Second Then")
// })



// const printName = function(name, time){
//     return new Promise(resolve =>{
//         setTimeout(() =>{
//             resolve(name)
//         }, time)
//     })
// }

// printName("Vano", 1000)
//     .then(resolveValue =>{
//         console.log(resolveValue)
//         return printName("Luka", 1000)
//     })
//     .then(resolveValue =>{
//         console.log(resolveValue)
//     })








//Create a promise that resolves with an array of numbers. Use .then() to log each number to the console.
// Multiple then Chaining


// const arr = [1, 6, 7, 14, 8]

// const randomPromise = new Promise((resolve, rejcet) =>{
//     setTimeout(() =>{
//         if(true) resolve(arr)
//     }, 2000)
// })

// randomPromise.then((arr) => {
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
// })






//Create a promise that resolves with a string. Chain multiple .then() handlers to transform the string in various ways (e.g., uppercase, reverse, add prefix).
// Promise with Fetch


// const str = "lUkaA"

// const transformStr = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         if(true) resolve(str)
//     },1000)
// })

// transformStr.then((str) =>{
//     console.log("First Then:", str)
//     return new Promise((resolve) =>{
//         if(true) resolve(str)
//     })
// })
//     .then((str) =>{
//         console.log("Second Then:", str.toLowerCase())
//         return new Promise((resolve) =>{
//             if(true) resolve(str)
//         })
//     })

//     .then((str) =>{ 
//         console.log("Third Then:", str.toUpperCase())
//     })






//Use the Fetch API to get data from an API endpoint. Handle the promise returned by fetch() to parse and log the JSON response.
// Sequential Promises






//Create two promises that resolve with different messages. Chain them so that the second promise starts only after the first one resolves. Log both messages.








// Create a promise that resolves with the current date and time after a 1-second delay. Log the resolved value.
// Promise with Condition



// const datePromise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         if(true) resolve(new Date())
//     }, 1000)
// })

// datePromise.then((date) => {
//     console.log(date)
// })









//Create a promise that resolves if a random number is greater than 0.5 and rejects otherwise. Handle both cases and log appropriate messages.
// Nested Promises

// const randomPromise = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         if(Math.random() > 0.5){
//             resolve("True")
//         }
//         else reject("False")
//     }, 1000)
// })

// randomPromise.then((result) =>{
//     console.log(result)
// }).catch((result) =>{
//     console.log(result)
// })













//Create a promise that resolves with a value. Inside the .then() handler, return another promise that resolves with a modified value. Chain another .then() to handle the nested promise.


// const randomPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) resolve(5)
//     }, 1000)
// })

// randomPromise.then((num) =>{
//     console.log("First Then:", num)
//     return new Promise((resolve, reject) => {
//         if(true) resolve(num + 10)
//     })
// })
//     .then((num) => {
//         console.log("Second Then:", num)
//     })