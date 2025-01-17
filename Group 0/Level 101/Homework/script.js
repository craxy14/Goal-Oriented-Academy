// Function declarations and Arrow Functions:

// 1. Write a function that takes two numbers and returns their sum.

// const sum = (num1, num2) => {
//     console.log(num1 + num2)
// }
// sum(5, 10)


// 2. Create a function that accepts a string and returns the string reversed.

// const reversedString = (str) => {
//     splitStr = str.split("")

//     reversedStr = splitStr.reverse()

//     result = reversedStr.join("")

//     console.log(result)
// }
// reversedString("vano")


// 3. Implement a function that checks if a given number is even.

// const evenCheck = (num) => {
//     console.log(num % 2 == 0)
// }
// evenCheck(6)

// const evenCheck = (num) => {
//     console.log((num % 2 == 0) ? "even" : "odd")
// }
// evenCheck(6)


// 4. Write an arrow function that takes an array and returns its length.

// const arrLen = (arr) => {
//     console.log(arr.length)
// }

// arrLen([1,2,5,7,18,89])


// 5. Create an arrow function that calculates the area of a rectangle given its width and height.

// const area = (width , height) => {
//     console.log(width * height)
// }

// area(15, 25)


// 6. Write a function that takes an array of numbers and returns a new array with each number doubled.

// const doubled = (arr) => {
//     result = []

//     for(let i = 0; i < arr.length; i++){
//         result.push(arr[i] * 2)
//     }
//     console.log(result)
// }
// doubled([2, 4, 15, 20])

// 7. Implement a function that takes a string and returns it in uppercase.

// const upperCase = (str) => {
//     console.log(str.toUpperCase())
// }
// upperCase("vano")


// 8. Create an arrow function that filters out all odd numbers from an array.

// const filterOdd = (arr) => {

//     const result = arr.filter(i => i % 2 == 0)

//     console.log(result)
// }
// filterOdd([2, 3, 5, 4, 12])

// 9. Write a function that accepts a number and returns its factorial.

// const factorial = (num) => {
//     result = 1

//     for(let i = 1; i <= num; i++) {
//         result *= i
//     }

//     console.log(result)
// }
// factorial(5)


// 10. Create an arrow function that takes a string and returns the number of vowels in the string.

// const vowels = (str) => {
//     vowelStr = "aeiou"
//     count = 0

//     for(let i = 0; i < str.length; i++) {
//         if(vowelStr.includes(str[i])){
//             count += 1
//         }
//     }

//     console.log(count)
// }

// vowels("vano")







// Template Literals:

// 1. Create a template literal that includes a variable in a sentence.

// const name = "vano"

// console.log(`Hello ${name}! how are you?`)


// 2. Use a template literal to create a multiline string.

// const name = "vano"

// console.log(`Hello
// my
// name
// is
// ${name}`)


// 3. Write a template literal that embeds an expression to calculate the sum of two numbers.

// console.log(`the sum of two numbers are ${15 + 5}`)


// 4. Create a template literal to format a date using variables for day, month, and year.

// const current = new Date();

// const day = current.getDate()
// const month = current.getMonth() + 1;
// const year = current.getFullYear()

// const result = `${day}/${month}/${year}`;

// console.log(result)


// 5. Use a template literal to construct a URL from variables for the protocol, domain, and path.

// const protocol = "https://"
// const subdomain = "www."
// const domain = "motiashvili"
// const path = ".ge"

// console.log(`${protocol}${subdomain}${domain}${path}`)


// 6. Create a template literal that includes a conditional expression.

// const age = 20

// console.log(`I'm ${age} years old and i am an ${age > 18 ? "Adult" : "Child"}`)


// 7. Write a template literal that formats an address using variables for street, city, and zip code.

// const street = "Robaqidze"
// const city = "Tbilisi"
// const zip = 159

// console.log(`I live at ${street} Street in ${city}, my zip code is: ${zip}`)


// 8. Use a template literal to create a simple HTML structure with a variable for the content.

// const price = "$99"
// const imgSrc = "https://www.mypunepulse.com/wp-content/uploads/2024/04/Goa.jpeg"

// console.log(`<body>
//     <p>${price}</p>
//     <img src="${imgSrc}">
// <body>`)


// 9. Create a template literal that includes a loop to generate a list of items from an array.

// const fruits = ['apple', 'banana', 'cherry'];

// const listItems = `
// <ul>
//     ${fruits.map(i => `<ul>${i}</ul>`).join("")}
// <ul>
// `

// console.log(listItems);


// 10. Write a template literal that interpolates a function call and includes its result in a sentence.






// Short Conditionals:

// 1. Use the `&&` operator to conditionally log a message if a variable is true.

// const age = 19
// const name1 = "vano"

// if(age > 18 && name1.startsWith("v")) {
//     console.log("Sucessfull")
// }else {
//     console.log("Failed")
// }


// 2. Use the `||` operator to set a default value for a variable if it is falsy.

// const age = 15
// const name1 = "vano"

// if(age > 18 || name1.startsWith("v")) {
//     console.log("Sucessfull")
// }else {
//     console.log("Failed")
// }


// 3. Use the ternary operator to assign a value based on a condition.

// age = 15

// console.log(age > 10 ? "True" : "False")


// 4. Write a short conditional using the `&&` operator to call a function only if a variable is not null.

// num1 = 1
// num2 = 1

// const sum = ((num1, num2) => {
//     console.log(num1 + num2)
// })


// if(num1 > 0 && num2 > 0){
//     sum(num1, num2)
// }else{
//     console.log("Null")
// }


// 5. Use the `||` operator to return the first truthy value from a list of variables.

// const list1 = ["vano", "test", "alo", "gamarjoba"]

// for(let i = 0; i < list1.length; i++){
//     if(list1[i].startsWith("a") && list1[i].endsWith("o")){
//         console.log(list1[1])
//     }else {
//         console.log("Failed")
//     }
// }


// 6. Use the ternary operator to log different messages based on whether a number is positive or negative.

// const num = 5

// console.log(num > 0) ? "Positive" : "Negative"


// 7. Write a short conditional using the `&&` operator to add a class to an element if a condition is met.

// 8. Use the `||` operator to provide a fallback value for a missing object property.

// 9. Use the ternary operator to set the value of a variable based on the length of a string.

// const surname = "motiashvili"

// console.log(surname.length > 10 ? "Long" : "Short")


// 10. Write a short conditional using the `&&` operator to execute a block of code only if multiple conditions are true.

// const num1 = 5
// const num2 = 10

// if(num1 > 0 && num2 > 0){
//     console.log("Test")
// } 




// Array method map():

// 1. Use the `map` function to create a new array with each element doubled.

// const arr = [1, 4, 8, 12]

// const result = arr.map((i) => {
//     return i * 2
// })

// console.log(result)


// 2. Apply the `map` function to convert an array of strings to uppercase.

// const arr1 = ["vano", "test", "nika"]

// const result = arr1.map((i) => {
//     return i.toUpperCase()
// })

// console.log(result)


// 3. Use the `map` function to extract a specific property from an array of objects.

// const arr = [
//     {
//         "name": "vano",
//         "age": 18
//     },

//     {
//         "name": "luka",
//         "age" : 18
//     },

//     {
//         "name": "nika",
//         "age" : 16
//     }
// ]

// const result = arr.map((i) => {
//     console.log(i.age)
// })


// 4. Implement the `map` function to add 5 to each element in an array of numbers.

// const numbers = [1, 2, 3, 15, 25]

// const result = numbers.map((i) => {
//     return i + 5
// })

// console.log(result)


// 5. Use the `map` function to convert an array of numbers to their square roots.

// const number = [1, 15, 25, 13]

// const result = number.map((i) => {
//     return i ** 2
// })

// console.log(result)


// 6. Apply the `map` function to format an array of dates into a readable string format.

// const dates = [
//     new Date(),
//     new Date(),
//     new Date()
// ]

// const result = dates.map((i) => {
//     return i.getDay() + "/" + (i.getMonth() + 1) + "/" + i.getFullYear()
// })

// console.log(result)


// 7. Use the `map` function to create a new array with the lengths of each string in an array of strings.

// const arr = ["test", "vanichka", "nikolozi", "gamarjoba"]
// const result = []

// const resultMap = arr.map((i) => {
//     result.push(i.length)
// })

// console.log(result)


// 8. Implement the `map` function to prepend a string to each element in an array of strings.

// const strings = ["vano", "motiashvili", "test"]

// const result = strings.map((i) => {
//     return `test${i}`
// })

// console.log(result)

// 9. Use the `map` function to create an array of boolean values indicating whether each number in an array is even.

// const numbers = [1, 15, 2, 14, 17, 9, 3, 4]

// const result = numbers.map((i) => {
//     if(i % 2 == 0){
//         return true
//     }else {
//         return false
//     }
// })

// console.log(result)


// 10. Apply the `map` function to replace specific characters in each string of an array. 

// const strings = ["vano", "dato", "nikolozi", "daviti"]

// const result = strings.map((i) => {
//     return i.replace("o", "T")
// })

// console.log(result)












// Array method filter():

// 1. Use the `filter` function to create a new array with only even numbers.

// const numbers = [1, 15, 23, 14, 15, 4, 16]

// const result = numbers.filter((i) => i % 2 == 0)
// console.log(result)

// 2. Apply the `filter` function to extract all strings longer than 5 characters from an array.

// const strings = ["vano", "alogamarjoba", "test", "motiashvili"]

// const result = strings.filter((i) => i.length > 5)
// console.log(result)


// 3. Use the `filter` function to create a new array with objects that have a specific property value.

// const list1 = [
//     {
//         "name": "vano",
//         "age": 18
//     },

//     {
//         "name": "nika",
//         "age": 16
//     },

//     {
//         "name": "luka",
//         "age": 18,
//         "mentor": true
//     }
// ]

// const result = list1.filter((i) => i.mentor)
// console.log(result)


// 4. Implement the `filter` function to remove all null or undefined values from an array.

// const arr = [null, 14, undefined, "vano", "hello"]

// const result = arr.filter((i) => i != undefined && i != null)
// console.log(result)


// 5. Use the `filter` function to select all numbers greater than 10 from an array of numbers.

// const numbers = [15, 5, 3, 12, 14, 12, 2, 1]

// const result = numbers.filter((i) => i > 10)
// console.log(result)


// 6. Apply the `filter` function to create an array of words that start with a specific letter.

// const words = ["hello", "vano", "giorgi", "hi", "god"]

// const result = words.filter((i) => i.startsWith("g"))
// console.log(result)


// 7. Use the `filter` function to extract all prime numbers from an array of numbers.

// const numbers = [7, 13, 4, 15, 16, 5]



// 8. Implement the `filter` function to create an array of users who are over a certain age from an array of user objects.

// 9. Use the `filter` function to remove duplicate values from an array.

// 10. Apply the `filter` function to create a new array with only truthy values.



// Array method reduce():

// 1. Use the `reduce` function to calculate the sum of an array of numbers.

// 2. Apply the `reduce` function to concatenate an array of strings into a single string.

// 3. Use the `reduce` function to find the maximum value in an array of numbers.

// 4. Implement the `reduce` function to count the occurrences of each element in an array.

// 5. Use the `reduce` function to calculate the total price of items in a shopping cart array.

// 6. Apply the `reduce` function to create an object grouping array elements by a specific property.

// 7. Use the `reduce` function to flatten a nested array into a single-level array.

// 8. Implement the `reduce` function to calculate the product of an array of numbers.

// 9. Use the `reduce` function to merge an array of objects into a single object.

// 10. Apply the `reduce` function to create an array of unique values from an array with duplicates.