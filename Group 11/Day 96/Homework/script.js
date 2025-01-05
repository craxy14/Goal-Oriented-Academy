// 1)Create an Object
// Create an object person with properties: name, age, and city. Log the object to the console.
// const person1 = {
//     name: "John Doe",
//     age: 30,
//     city: "Los Angeles"
// };
// console.log(person1)

// for(const i in person1){
//     console.log(`${i}: ${person1[i]}`)
// }

// -------------------------------------------------------------
// 2)Access Object Properties
// Given the person object, access and log the name and city properties.
// const person2 = {
//     name: "John Pork",
//     age: 30,
//     city: "Los Angeles"
// };
// console.log(person2.name, person2.city)

// -------------------------------------------------------------
// 3)Destructuring an Object
// Destructure the name and age properties from the person object and log them.
// const person3 = {
//     name: "John Pork",
//     age: 30,
//     city: "Los Angeles"
// };

// const {name, age} = person3
// console.log(name, age)

// -------------------------------------------------------------
// 4)Nested Object Destructuring
// Create an object student with a name, age, and a nested address object containing city and country. Use destructuring to extract city and country from the address.
// const person4 = {
//     name: "John Pork",
//     age: 30,
//     address: {
//         city: "Tbilisi",
//         country: "Georgia"
//     }
// };
// const { address: {city, country} } = person4
// console.log(city, country)

// -------------------------------------------------------------
// 5)Default Values in Destructuring
// Create an object product with properties name and price. Destructure name and category from the object, giving category a default value of "general".
// const product = {
//     name: "Laptop",
//     price: 1200
// }

// const { name, category = "general" } = product;
// console.log(name, category)

// -------------------------------------------------------------
// 6)Destructure from Function Parameters
// Write a function displayCar that takes an object with properties brand, model, and year as a parameter and logs them using destructuring.
// const displayCar = ({brand, model, year}) => {
//     return `${brand} ${model} ${year}`
// }
// console.log(displayCar({brand: "Mercedes", model: "E63 AMG", year: 2014}))

// -------------------------------------------------------------
// 7)Rest Operator with Objects
// Create an object book with properties title, author, year, and publisher. Use the rest operator to collect the year and publisher into a new object.
// const book = {
//     title: "1984",
//     author: "George Orwell",
//     year: 1949,
//     publisher: "Secker & Warburg"
// }

// const {title, author, ...bookDetails } = book;

// console.log(title)
// console.log(author)
// console.log(bookDetails)

// -------------------------------------------------------------
// 8)Spread Operator with Objects
// Create two objects, user with properties name and age, and location with properties city and country. Merge them into a new object using the spread operator.
// const user = {
//     name: "Alice",
//     age: 28
// };

// const map = {
//     city: "London",
//     country: "United Kingdom"
// }

// const result = { ...user, ...map };

// console.log(result);

// -------------------------------------------------------------
// 9)Rest Operator with Function Arguments
// Write a function sumNumbers that takes any number of arguments using the rest operator and returns the sum of the numbers.
// const sumNumbers = (...numbers) => {
//     let sum = 0
//     numbers.forEach((curVal) => {
//         sum += curVal
//     })

//     return sum
// }
// console.log(sumNumbers(1,2,3,4,5,6,7,8,9,10))

// -------------------------------------------------------------
// 10)Spread Operator with Arrays
// Create two arrays, numbers1 and numbers2. Use the spread operator to combine them into one array.
// const numbersArr1 = [1,2,3]
// const numbersArr2 = [3,4,5]

// const combination = [...numbersArr1, ...numbersArr2]
// console.log(combination)

// -------------------------------------------------------------