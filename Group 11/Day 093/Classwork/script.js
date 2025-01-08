// var name = "vano" //creating a var type variable, wich has a global scope and can be used anywhere (also this type of variable has a strange function (hoisting), in this case hoisting makes this variable declaration go to top of the js document)

// const name1 = "vanichka" //creating a const variable, wich cant be reasigned and has block + function scope

// const printInfo = () =>{
//     let name = "ivane" // creating a variable inside a function wich has block scope and can not be used outside "printInfo" function

//     console.log(name) //console.logging the function let "name" variable
//     console.log(name1) //console logging the const name1 variable (variables can be used outside the function (lexical scope))
// }

// printInfo() //calling the function
// console.log(name) //logging the var variable

// -------------------------------------------------------------
// const me = {
//     name: "vano",
//     surname: "motiashvili",
//     age: 17,
// }

// SPECIFICLY MADE TO "ITERATE" (with indexes) OVER OBJECTS!!!
// "for in" is used to iterate over keys of object, or indexes of array 
// when using the "for in" it will always return the string type value
// for(let key in me){  //iteration variable is created with let so i can change its value in the code block
//     key = "unknown" 
//     console.log(key)
// }

// for(const key in me){  //output the values of the "me" obj using "indexes" 
//     console.log(me[key])
// }

// -------------------------------------------------------------
// const numbers = [1,2,3,4,5,6,7,8,9]
// const surname = "motiashvili"

// FOR OF CAN'T ITERATE OVER OBJECTS!!!
// MADE TO ITERATE OVER EVERYTHING EXCEPT OBJECTS!!!
// iterate over array of numbers and output each value individually
// for(const values of numbers){
//     console.log(values)
//     console.log(typeof values)
// }

// iterate over variable that stores string and output each value individually
// for(const values of surname){
//     console.log(values)
//     console.log(typeof values)
// }

// -------------------------------------------------------------
// OLD WAY OF CREATING FUNCTIONS USING "function" KEYWORD!
// function greet(name){
//     return `Hello Mr/Ms ${name}`
// }
// console.log(greet("Vano"))

// -------------------------------------------------------------
// // NEWER SYNTAX (ECMASCRIPT6) OF CREATING "ARROW FUNCTIONS"!
// const welcome1 = name => `Hello Mr/Ms ${name}`
// console.log(welcome1("Ivan"))

// const welcome2 = (name, surname) => `Hello Mr/Ms ${name}, ${surname}` //TWO OR MORE PARAMETERS NEED ()
// console.log(welcome2("Ivan", "Motiashvili"))

// const welcome3 = (name, surname) => {
//     if(name === "Vano"){
//         return `Hello Admin`
//     }
//     return `Hello Mr/Ms ${name}, ${surname}`
// }
// console.log(welcome3("David","Motiashvili"))

// -------------------------------------------------------------
// CLASSWORK!

// No1
// const cubeOfNum = num => num ** 3
// console.log(cubeOfNum(3))

// -------------------------------------------------------------
// No2
// const sumOfNum = (num1,num2) => num1 + num2
// console.log(sumOfNum(5,15))

// -------------------------------------------------------------
// No3
// const emptyFunc = () => `Learning JavaScript!`
// console.log(emptyFunc())

// -------------------------------------------------------------
// No4
// const evenOrOdd = num => {
//     if(num % 2 == 0){
//         return `${num} is Even.`
//     }
//     return `${num} is Odd.`
// }
// console.log(evenOrOdd(10))

// -------------------------------------------------------------
// No5
// const multiples = (num1, num2=1) => num1 * num2
// console.log(multiples(5))

// -------------------------------------------------------------
// No6
// const returnObj = (name, age) => {
//     return new Object({name:name, age:age})
// }
// console.log(returnObj("vano", 17))

// -------------------------------------------------------------
// No7
// const positiveOrNegative = num => {
//     return num >= 0 ? "Positive" : "Negative"
// }
// console.log(positiveOrNegative(-15))

// -------------------------------------------------------------
// No8
// const factorial = num => {
//     let sum = 1
//     for(let i = 1; i < num + 1; i ++)
//         sum *= i
//     return sum
// }
// console.log(factorial(5))

// -------------------------------------------------------------
// No9
// const func1 = (num1, num2) => {
//     const func2 = (first, second) => {
//         return first * second
//     }
//     console.log(func2(num1,num2))
// }
// func1(5,5)

// -------------------------------------------------------------
// No10
// const sumArr = arr => {
//     sum = 0
//     for(const value of arr){
//         sum += value
//     }
//     return sum
// }
// console.log(sumArr([1,2,3,4,5,6,7,8,9,10]))

// DIFFERENCE BETWEEN DEFAULT "keyword" FUNCTIONS AND "arrow" FUNCTIONS IS JUST SYNTAX! IT MAKES CREATING FUNCTIONS MUCH EASIER!

// -------------------------------------------------------------
// const me = {
//     name: "vano",
//     lastname: "motiashvili",
//     age: 17
// }

// for(let i in me){
//     console.log(`${i}: ${me[i]}`)
// }

// -------------------------------------------------------------
// const numbers = [1,2,3,4,5,6,7,8,9]

// // using for in on arrs gives us element indexes (as a typeof string)
// for(let i in numbers){
//     console.log(numbers[i])
//     console.log(typeof i)
// }

// -------------------------------------------------------------
// const numbers = [1,2,3,4,5,6,7,8,9]
// const fname = "vano"

// for(let i of fname){
//     console.log(i)
//     console.log(typeof i)
// }

// -------------------------------------------------------------
// function greet(name){
//     console.log(`Hello Mr ${name}`)
// }

// greet("test")

// -------------------------------------------------------------
// const greet = (fname, lname) => (`Hello Mr ${fname[0].toUpperCase() + fname.slice(1), lname[0].toUpperCase() + lname.slice(1)}`)
// console.log(greet("vano", "motiashvili"))

// const validate = name => {
//     name = name.toLowerCase()
//     if(name == "vano"){
//         return "Admin"
//     }else {
//         return "User"
//     }
// }
// console.log(validate("VANO"))

// -------------------------------------------------------------