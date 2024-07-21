const title = document.getElementById("title")
const img = document.getElementById("img")
const price = document.getElementById("price")

// 1. Simple Fetch Request: Make a GET request to a public API (e.g., JSONPlaceholder) and log the response.

// fetch('https://fakestoreapi.com/products/15')
//     .then((result) =>{
//         console.log(result);
//     })

// 2. Fetch with Then: Fetch data from an API and log the JSON response using .then().

// fetch('https://fakestoreapi.com/products/15')
//     .then((result) =>{
//         return result.json();
//     })
//     .then((res) => {
//         console.log(res)
//     })

// 3. Handle Errors with Catch: Fetch data from an invalid URL and handle the error using .catch().

// fetch('https://fakestorei.com/products/15')
//     .then((result) =>{
//         return result.json();
//     }).catch((res) => {
//         console.log("Failed")
//     })
//     .then((res) => {
//         console.log(res)
//     })


// 4. Finally Block: Make a fetch request and use .finally() to log a message that the request has completed.

// fetch('https://fakestoreapi.com/products/15')
//     .then((result) =>{
//         return result.json();
//     }).catch((res) => {
//         console.log("Failed")
//     })
//     .then((res) => {
//         console.log(res)
//     })
//     .finally(() => {
//         console.log("Done!")
//     })

// 5. Fetch and Display: Fetch data from an API and display it on a webpage.

// fetch('https://fakestoreapi.com/products/15')
//     .then((result) =>{
//         return result.json();
//     }).catch((res) => {
//         console.log("Failed")
//     })
//     .then((res) => {
//         title.innerHTML = res.title
//         img.src = res.image
//         price.innerHTML = res.price
//         img.width = 300
//     })

// 6. Chaining Multiple Then: Fetch data and chain multiple .then() methods to process the data in stages.

// fetch('https://fakestoreapi.com/products/15')
//     .then((result) =>{
//         return result.json();
//     }).catch((res) => {
//         console.log("Failed")
//     })
//     .then((res) => {
//         console.log(res)
//     })

// 7. Fetching Image: Fetch an image from a URL and display it on the webpage.

// fetch('https://fakestoreapi.com/products/15')
//     .then((result) =>{
//         return result.json();
//     }).catch((res) => {
//         console.log("Failed")
//     })
//     .then((res) => {
//         title.innerHTML = res.title
//         img.src = res.image
//         price.innerHTML = res.price
//         img.width = 300
//     })

// 8. Delayed Fetch Request: Use setTimeout to delay a fetch request by a few seconds.

// setTimeout(() => {
//     fetch('https://fakestoreapi.com/products/15')
//     .then((result) =>{
//         return result.json();
//     }).catch((res) => {
//         console.log("Failed")
//     })
//     .then((res) => {
//         title.innerHTML = res.title
//         img.src = res.image
//         price.innerHTML = res.price
//         img.width = 300
//     })
// }, 2000);

// 9. Fetch and Delay JSON Parsing: Fetch data and use setTimeout to delay parsing the JSON response.

fetch('https://fakestoreapi.com/products/1')
    .then(response => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(response.json())
            }, 2000)
        });
    })
    .then(data => {
        img.src = data.image
    })
    .catch(error => {
        console.error(error)
    })


// 10. Chained Delayed Fetch: Chain multiple fetch requests with setTimeout delays between them.

fetch('https://fakestoreapi.com/products/15')
    .then((result) =>{
        return result.json();
    }).catch((res) => {
        console.log("Failed")
    })
    .then((res) => {
        console.log(res)
    })

// 11. Delayed Error Handling: Fetch data and use setTimeout to delay error handling in .catch().

// 12. Completion Log with Delay: Use setTimeout in .finally() to delay logging the completion message.

// 13. Fetch and Alert: Fetch data from an API and show an alert with the fetched data after a delay using setTimeout.

// 14. Fetch and Conditional Display: Fetch data from an API and display it on the webpage only if certain conditions are met, using setTimeout to delay the display.

// 15. Fetch and Form Submission: Use fetch to submit form data asynchronously with a delay using setTimeout before handling the response.