// 1. **Filter Prime Numbers**
//    - Create an array of numbers and use `filter()` to return only the prime numbers.
// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 17]

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) { 
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true; 
// }


// const primeNumbers = numbers.filter(isPrime);
// console.log(primeNumbers)



// 2. **Map to Object Conversion**
//    - Given an array of objects (e.g., users with `id` and `name`), use `map()` to create an array of strings that contains only the names.
// const items = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' },
//     { id: 4, name: 'David' },
//     { id: 5, name: 'Eva' }
// ]

// const mapItems = items.map((curVal) => {
//     return curVal.name
// })
// console.log(mapItems)

// 4. **Filter Objects by Property**
//    - Given an array of objects representing products (each having a `name` and `price`), use `filter()` to return products that are cheaper than a certain value.
// const products = [
//     { name: 'Laptop', price: 999.99 },
//     { name: 'Smartphone', price: 799.49 },
//     { name: 'Headphones', price: 199.99 },
//     { name: 'Smartwatch', price: 249.99 },
//     { name: 'Tablet', price: 349.99 }
// ]

// const cheap = products.filter((curVal) => {
//     if(curVal.price <= 500){
//         return curVal
//     }
// })
// console.log(cheap)



// 5. **Map Complex Transformations**
//    - Create an array of objects representing books (with `title` and `author`). Use `map()` to return an array of strings in the format: `"Title by Author"`.
// const books = [
//     { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
//     { title: '1984', author: 'George Orwell' },
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
//     { title: 'Moby Dick', author: 'Herman Melville' },
//     { title: 'Pride and Prejudice', author: 'Jane Austen' }
// ]
// const titleAuthor = books.map((curVal) => {
//     return `${curVal.title} by ${curVal.author}`
// })
// console.log(titleAuthor)



// 6. **Filter Numbers Based on Multiple Conditions**
//    - Given an array of numbers, use `filter()` to return numbers that are both greater than 10 and divisible by 3.
// const numbers2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 17, 18, 21, 24]

// const filteredNums = numbers2.filter((curVal) => {
//     if(curVal % 3 == 0 && curVal > 10){
//         return curVal
//     }
// })
// console.log(filteredNums)



// 7. **Modify Array of Objects (map)**
//    - Given an array of objects representing users with a `name` and `age`, use `map()` to return a new array where all users are considered adults (i.e., add a new `isAdult` property based on their age).
// const users = [
//     { name: 'Alice', age: 14 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 35 },
//     { name: 'David', age: 18 },
//     { name: 'Eva', age: 22 }
// ]

// const isAdultMap = users.map((curVal) => {
//     return {...curVal, isAdult: curVal.age >= 18}
// })
// console.log(isAdultMap)



// 8. **Chaining map and filter**
//    - Create an array of numbers. First, use `filter()` to return numbers greater than 50. Then, use `map()` to halve those numbers.
// const numbers3 = [20, 3, 44, 5, 76, 7, 58, 79, 10, 11, 13, 14, 117, 18, 21, 324]

// const greater50 = numbers3.filter((curVal) => {
//     return curVal > 50
// })
// console.log(greater50)

// const half = greater50.map((curVal) => {
//     return curVal / 2
// })
// console.log(half)



// 9. **Log Word Frequencies (forEach)**
//    - Create an array of words. Use `forEach()` to create an object that tracks how many times each word appears in the array.
// const word = ["vano", "giorgi", "data", "vano", "nika", "giorgi",]
// const wordCount = {}

// word.forEach((curVal) => {
//     if(wordCount[curVal]){
//         wordCount[curVal]++
//     }else{
//         wordCount[curVal] = 1
//     }
// })
// console.log(wordCount)



// 10. **Filter Objects by Nested Property**
//    - Given an array of objects representing cars (with nested objects for `brand` and `model`), use `filter()` to return only cars of a specific brand.
// const cars = [
//     { brand: 'Toyota', model: 'Corolla' },
//     { brand: 'Ford', model: 'Mustang' },
//     { brand: 'BMW', model: 'X5' },
//     { brand: 'Tesla', model: 'Model 3' },
//     { brand: 'Honda', model: 'Civic' },
//     { brand: 'Toyota', model: 'Camry' },
//     { brand: 'Ford', model: 'F-150' }
// ]

// const filteredCars = cars.filter((curVal) => {
//     if(curVal.brand === "Toyota"){
//         return curVal
//     }
// })
// console.log(filteredCars)


// ### Project Idea: **Shopping Cart with Discounts**

// **Description:** Build a simple shopping cart where users can add, remove, and update items. Each item has a name, price, and quantity. Use DOM manipulation, arrow functions, and methods like `map()`, `filter()`, and `forEach()` to perform the following:

// - **Features**:
//   1. Display the items in the cart dynamically on the page.
//   2. Add new items to the cart with a form (name, price, quantity).
//   3. Update the quantity of items already in the cart.
//   4. Remove items from the cart.
//   5. Show the total price of all items, and apply a discount if the total is above a certain amount.
//   6. Filter items based on price range or quantity.
//   7. Use `forEach()` to iterate through the cart and display each item's name, price, and quantity.
//   8. Use `map()` to generate a new list of items with a discounted price if a certain condition is met.
//   9. Use `filter()` to remove items that are no longer needed or meet certain criteria (e.g., quantity is zero).

// This project allows you to work with dynamic UI updates, event listeners, and array methods!
const form = document.getElementById("myForm")
const cart = document.getElementById("cart")
const totalP = document.getElementById("totalP")

let itemsArr = []
let priceCounter = 0
let id = 0

const totalPrice = (item) => {
    const product = item.lastElementChild
    priceCounter += Number(product.firstElementChild.nextElementSibling.innerHTML.slice(8,))

    totalP.innerHTML = `Total Price = ${priceCounter}`
}



// ADDING PRODUCTS AS AN OBJECT INTO AN ARRAY
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const item = form.item.value
    const price = form.price.value
    const quantity = Number(form.quantity.value)

    if(checkDuplicate({id, item, price, quantity})){
        console.log("Duplicate")
    }else{
        itemsArr.push({id, item, price, quantity})
        displayItems(itemsArr)
    }
    console.log(itemsArr)
    id++;
})



const removeItem = (icon) => {
    const parentElementId = icon.parentElement.id;
    itemsArr = itemsArr.filter(curValue => curValue.id !== Number(parentElementId));
    console.log(itemsArr)

    displayItems(itemsArr)
}



// DISPLAYING THE PRODUCTS ON WEB PAGE
const displayItems = (arr) => {
    cart.innerHTML = ""

    cart.innerHTML = `
        <div id="cartCategories">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
        </div>`

    for(let i = 0; i < arr.length; i++){
        cart.innerHTML += `
        <div class="productDiv" id="${arr[i].id}">
            <p>Item: ${arr[i].item}</p>
            <p>Price: $${arr[i].price}</p>
            <p>quantity: x${arr[i].quantity}</p>
            <button onclick="removeItem(this)">Remove</button>
        </div>
        `
    }
    form.reset()
    totalPrice(cart)
}



// CHECKING THE DUPLICATE PRODUCTS
const checkDuplicate = (newItem) => {
    itemsArr.forEach((curVal) => {
        if(curVal.item === newItem.item){
            curVal.quantity += newItem.quantity
            return true
        }
    })
    return false
}