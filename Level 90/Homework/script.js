const name = document.getElementById("name")
const price = document.getElementById("price")
const img = document.getElementById("img")

const num = 5



//#1 Create a simple Promise that resolves after 2 seconds with the message "Task 1 complete".

// const randomPromis = new Promise((resolve, reject) => {
//     if(num == 5) resolve("Task 1 complete")
// })

// randomPromis.then((result) =>{
//     setTimeout(() =>{
//         console.log(result)
//     }, 2000)
// })





//#2Create a Promise that rejects immediately with an error message "Task 2 failed". Handle the rejection using .catch.

// const randomPromis = new Promise((resolve,reject) => {
//     if(num == 6) resolve("Task 2 success")
//     else reject("Task 2 failed")
// })

// randomPromis.then((result) => {
//     console.log(result)
// })
//     .catch((result) => {
//         console.log(result)
//     })




//#3Create a Promise that resolves with a number (e.g., 5). Chain a .then handler to double the number and return it, then chain another .then handler to log the doubled number.

// const doublePromise = new Promise((resolve, reject) =>{
//     if(num == 5) resolve(num)
// })

// doublePromise.then((result) => {
//     console.log("First num =", result)
//     return new Promise((resolve, reject) => {
//         if(true) resolve(num)
//     })
// })
//     .then((num) => {
//         console.log("Second num =", num * 2)
//     })







//#4 Create a function that returns a Promise which resolves after 2 seconds with a message "First". Chain another then that waits 1 second before logging "Second"

// const randomPromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         if(true) resolve("First")
//     }, 2000)
// })
// randomPromise.then((result) => {
//     console.log(result)
//     return new Promise((resolve, reject) =>{
//         if(true) resolve("Second")
//     })
// })
//     .then((result) =>{
//         setTimeout(() =>{
//             console.log(result)
//         }, 1000)
//     })



//5. Create a function that returns a Promise which rejects after 2 seconds with an error message "Task 3 failed". Handle the rejection with a .catch to log the error message.
// const num1 = 5

// const rejectPromise = new Promise((resovle, reject) =>{
//     setTimeout(() =>{
//         if(num1 == 6) resovle("Succesfull")
//         else reject("Task 3 failed")
//     },2000)
// })
//     .then((res) =>{
//         console.log(res)
//     })
//     .catch((res) =>{
//         console.log(res)
//     })






//6. Create a function that returns a Promise which resolves after a random delay between 1 and 5 seconds with the message "Task 1 complete".

function getRandomIntInclusive(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let delay = getRandomIntInclusive(1, 5) * 1000
console.log(delay)

// const randomPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(num == 5) resolve("Task 1 complete")
//         else reject("Failed")
//     }, delay)
// })
//     .then((res) => {
//         console.log(res)
//     })






//8. Create a function that returns a Promise which rejects after a random delay between 1 and 4 seconds with an error message "Task 3 failed". Handle the rejection with a .catch to log the error message.

// const randomPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(num == 6) resolve("Task 1 complete")
//         else reject("Failed")
//     }, delay)
// })
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((res) => {
//         console.log(res)
//     })






//9. Create a function that returns a Promise which resolves after a random delay between 1 and 5 seconds with the message "Task 1 complete" if the random number is greater than 0.5, otherwise, it should resolve with the message "Task 1 was quick".

// function randomDelay(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(delay <= 1000){
//                 resolve("That was fast")
//             }
//             else resolve("Taks 1 completed")
//         },delay)
//     }).then((res) => {
//         console.log(res)
//     })
// }
// randomDelay()



//10. Create a function that returns a Promise which resolves after a random delay between 1 and 4 seconds. If the random number is less than 0.3, reject with an error message "Task 3 failed". Otherwise, resolve with the message "Task 3 complete". Handle the rejection with a .catch to log the error message.

// function randomDelay(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(delay <= 1000){
//                 resolve("Task 3 complete")
//             }
//             else reject("Task 3 failed")
//         },delay)

//     }).then((res) => {
//         console.log(res)
//     }).catch((res) => {
//         console.log(res)
//     })
// }
// randomDelay()








//11. Create three Promises that resolve with different messages ("Promise 1", "Promise 2", "Promise 3") after 1, 2, and 3 seconds respectively. Use Promise.all to log all messages once all Promises are resolved.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) resolve("Promise 1")
//     }, 1000)
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) resolve("Promise 2")
//     }, 2000)
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) resolve("Promise 3")
//     }, 3000)
// })

// Promise.all([promise1, promise2, promise3])
//     .then((res) => {
//         console.log(res)
//     })





//12. Create three Promises that resolve with different messages after random delays between 1 and 5 seconds. Use Promise.all to log all messages once all Promises are resolved.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) resolve("Promise 1")
//     }, delay)
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) resolve("Promise 2")
//     }, delay)
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) resolve("Promise 3")
//     }, delay)
// })

// Promise.all([promise1, promise2, promise3])
//     .then((res) => {
//         console.log(res)
//     })








//13. Create three Promises where one of them rejects after 2 seconds with an error message "Promise failed". Use Promise.all to handle the rejection and log the error message.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) resolve("Promise 1")
//     })
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) reject("Promise failed")
//     }, 2000)
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) resolve("Promise 3")
//     })
// })

// Promise.all([promise1, promise2, promise3])
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((res) => {
//         console.log(res)
//     })




//14. Create three Promises that resolve or reject based on random conditions. Use Promise.all to log all resolved messages or handle the rejection.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(delay <= 1000) {
//             resolve("Success")
//         }else {
//             reject("Failed")
//         }
//     }, delay)
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(delay >= 4000) {
//             resolve("Success")
//         }else {
//             reject("Failed")
//         }
//     }, delay)
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(delay <= 3000) {
//             resolve("Success")
//         }else {
//             reject("Failed")
//         }
//     }, delay)
// })

// Promise.all([promise1, promise2, promise3])
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((res) => {
//         console.log(res)
//     })






//15. Create three Promises that resolve with numbers after random delays. Use Promise.all to get the results, then chain another .then to calculate and log the sum of the numbers.

// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(24)
//     }, delay)
// })

// const secondPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(13)
//     }, delay)
// })

// const thirdPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(16)
//     }, delay)
// })

// Promise.all([firstPromise, secondPromise, thirdPromise])
//     .then(values => {
//         let sum = 0
//         for(let i = 0; i<values.length;i++){
//             sum+=values[i]
//         }
//         console.log(sum)
//     })
//     .catch(error => {
//         console.log(error)
//     })





// 16. Create three Promises that resolve with different messages ("Promise 1", "Promise 2", "Promise 3") after 1, 2, and 3 seconds respectively. Use Promise.race to log the message from the first Promise that resolves.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) resolve("Promise 1")
//     }, 1000);
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) resolve("Promise 2")
//     }, 500);
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) resolve("Promise 3")
//     }, 2000);
// })

// Promise.race([promise1, promise2, promise3])
//     .then((res) => {
//         console.log(res)
//     })








// 17. Create three Promises that resolve with different messages after random delays between 1 and 5 seconds. Use Promise.race to log the message from the first Promise that resolves.

// const promise1 = new Promise((resolve, reject) => {
//     const delay1 = Math.floor(Math.random()*5000) 
//     setTimeout(() => {
//         if(true) resolve("Promise 1")
//     }, delay1);
// })

// const promise2 = new Promise((resolve, reject) => {
//     const delay2 = Math.floor(Math.random()*5000) 
//     setTimeout(() => {
//         if(true) resolve("Promise 2")
//     }, delay2);
// })

// const promise3 = new Promise((resolve, reject) => {
//     const delay3 = Math.floor(Math.random()*5000) 
//     setTimeout(() => {
//         if(true) resolve("Promise 3")
//     }, delay3);
// })

// Promise.race([promise1, promise2, promise3])
//     .then((res) => {
//         console.log(res)
//     })



// 18. Create three Promises where one of them resolves immediately with the message "Instant Promise". Use Promise.race to log the message from the first Promise that resolves.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) resolve("Promise 1")
//     }, 1000);
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) resolve("Promise 2")
//     });
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) resolve("Promise 3")
//     }, 2000);
// })

// Promise.race([promise1, promise2, promise3])
//     .then((res) => {
//         console.log(res)
//     })




//19. Create three Promises where one of them rejects after 2 seconds with an error message "Promise failed". Use Promise.race to handle the resolution or rejection and log the result or error.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) resolve("Promise 1")
//     }, 3000);
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) reject("Promise failed")
//     }, 2000);
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) resolve("Promise 3")
//     }, 2000);
// })

// Promise.race([promise1, promise2, promise3])
//     .then((res) => {
//         console.log(res)
//     }).catch((res) => {
//         console.log(res)
//     })






//20. Create three Promises that resolve based on random conditions (e.g., if a random number is greater than 0.5, resolve with a message; otherwise, resolve after 2 seconds with a different message). Use Promise.race to log the message from the first Promise that resolves.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(delay <= 2000){
//             console.log("message V1")
//         }else{
//             console.log("message V1.1")
//         }
//     }, 2000);
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(delay <= 2000){
//             console.log("message V2")
//         }else{
//             console.log("message V2.1")
//         }
//     }, 3000);
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(delay <= 2000){
//             console.log("message V3")
//         }else{
//             console.log("message V3.1")
//         }
//     }, 1500);
// })

// Promise.race([promise1, promise2, promise3])
//     .then((res) => {
//         console.log(res)
//     })




//21. Fetch data from a URL and log the response to the console.

// fetch('https://fakestoreapi.com/products/1')
//     .then((result) =>{
//         return result.json();
//     })
//     .then((res) => {
//         console.log(res)
//     })



//22. Fetch data from an API and display it on a web page.

// fetch('https://fakestoreapi.com/products/1')
//     .then((result) =>{
//         return result.json();
//     })
//     .then((res) => {
//         console.log(res)
//         name.innerHTML = res.title
//         price.innerHTML = "$" + res.price 
//     })




//23. Fetch JSON data from an API and display specific information (e.g., title, description) on a webpage.

// fetch('https://fakestoreapi.com/products/1')
//     .then((result) =>{
//         return result.json();
//     })
//     .then((res) => {
//         console.log(res)
//         name.innerHTML = res.title
//         price.innerHTML = "$" + res.price 
//     })




//25. Fetch image URLs from an API and display them on a webpage.

fetch('https://fakestoreapi.com/products/15')
    .then((result) =>{
        return result.json();
    })
    .then((res) => {
        console.log(res)
        name.innerHTML = res.title
        img.src = res.image
        img.width = 300
        price.innerHTML = "$" + res.price 
    })