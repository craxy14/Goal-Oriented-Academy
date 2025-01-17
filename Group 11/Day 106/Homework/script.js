// Promise Object: - fetch sends request to another computer and returns an answer (returns promise / the state of fetch, promise state can be: "pending", "fullfield/resolved", "rejected").
// const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

// fetchPromise.then((response) => {
//     return response.json()
// }).then((data) =>{
//     console.log(data)
// })

// -------------------------------------------------------------
// const promiseTest = new Promise((resolve, reject) => {
//     const book = true

//     if(book){
//         resolve("Book sucessfull!")
//     }else{
//         reject("No Book!")
//     }
// })

// promiseTest
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))

// -------------------------------------------------------------
// 1.Create a basic Promise that resolves immediately
// Task: Use the Promise constructor to create a promise that resolves with the message "Hello, Promise!
// const promise1 = new Promise((resolve, reject) => {
//     resolve("Hello, Promise!")
// })

// promise1
//     .then((result) => console.log(result))

// -------------------------------------------------------------
// 2.Create a Promise that rejects with an error
// Task: Write a promise that rejects with the message "Something went wrong!" and handle the rejection with .catch().
// const promise2 = new Promise((resolve, reject) => {
//     reject("Something went wrong!")
// })

// promise2
//     .catch((error) => console.log(error))

// -------------------------------------------------------------
// 3.Use setTimeout to resolve a Promise after 2 seconds
// Task: Create a promise that waits for 2 seconds using setTimeout and then resolves with "2 seconds have passed".
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("2 seconds have passed")
//     },2000)
// })

// promise3
//     .then((result) => console.log(result))

// -------------------------------------------------------------
// 4.Handle both resolve and reject outcomes
// Task: Write a promise that randomly either resolves with "Success!" or rejects with "Failed!" using Math.random(). Handle both outcomes with .then() and .catch().
// const promise4 = new Promise((resolve, reject) => {
//     const number = Math.round(Math.random() * 1)

//     if(number){
//         resolve("Succesfull!")
//     }else{
//         reject("Failed")
//     }
// })

// promise4
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))

// -------------------------------------------------------------
// 5.Create a chain of promises using .then()
// Task: Create a promise that resolves with the number 5. Chain multiple .then() calls to multiply the number by 2 in each step.
// const promise5 = new Promise((resolve, reject) => {
//     resolve(5)
// })

// promise5
//     .then((result1) => result1 * 2)
//     .then((result2) => result2 * 2)
//     .then((result3) => console.log(result3 * 2))

// -------------------------------------------------------------
// 6.Simulate a network request using Promises
// Task: Create a promise that resolves with "Data fetched!" after 1 second. Use setTimeout to simulate the delay.
// const promise6 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data fetched!")
//     },1000)
// })

// promise6
//     .then((result) => console.log(result))

// -------------------------------------------------------------