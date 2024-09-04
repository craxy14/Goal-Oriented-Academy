// Assign:

// 1. Create an object person, with properties: name and age. Use Object.assign to create a new object employee with additional property - position.
// const person = {
//     "name": "vano",
//     "surname": "motiasvhili",
//     "age": 17
// }

// const assignedObj = Object.assign(person, employee = {
//     "position": "ceo"
// })
// console.log(assignedObj)


// 2. Merge two objects obj1 and obj2 into a new object using Object.assign.
// const obj1 = {
//     "name": "vano"
// }

// const obj2 = {
//     "surname": "motiashvili"
// }

// const mergedObj = Object.assign(obj1, obj2)
// console.log(mergedObj)



// 3. Copy properties from multiple source objects into a single target object using Object.assign.
// const source1 = {
//     "name": "vano"
// }

// const source2 = {
//     "surname": "motiashvili"
// }

// const source3 = {
//     "age": 17
// }

// const source4 = {
//     "handsome": true
// }

// const mergedObj = Object.assign(source1, source2, source3, source4)
// console.log(mergedObj)


// 4. Use Object.assign to clone an object original.
// const user = {
//     name: "vano",
//     age: 17,
//     moreInfo: {
//         handsome: true
//     }
// };

// const clone = Object.assign({}, user);

// clone.name = "Luka";
// clone.age = 18

// console.log(clone)
// console.log(user)


// 5. Merge properties of an object source into another object target using Object.assign.
// const user1 = {
//     name: "Vano",
//     age: 17
// };

// const user2 = {
//     age: 30,
//     occupation: "Clown",
//     city: "Tbilisi"
// };

// const merged = Object.assign(user1, user2)
// console.log(merged)


// 6. Merge arrays of objects into a single object using Object.assign.
// const users = [
//     {name: "vano", surname: "motiashvili"},
//     {handsome: true, tall: true}
// ]

// const employee = [
//     {position: "ceo", age: 45}
// ]

// 7. Use Object.assign to update properties of an existing object with new values.
// const person = {
//     name: "vano",
//     surname: "motiashvili",
//     age: 17
// }

// const assign = Object.assign({}, person)
// assign.age = 18
// console.log(assign)



// 8. Implement a function extend that takes two objects and merges their properties using Object.assign.
// const user1 = {
//     name: "Ivan"
// }

// const user2 = {
//     role: "CEO"
// }

// function extend(obj1, obj2){
//     return Object.assign(obj1, obj2)
// }
// console.log(extend(user1, user2))



// 9. Create a manual function named manualAssign in JavaScript using the for...in loop, define parameters for the target object and ...sources rest parameter, iterate over each source object with a for...in loop, and assign properties from each source to the target object.
// const targetObj = {
//     name: "vano",
//     surname: "motiashvili"
// }

// const sourceObj = {
//     age: 17,
//     position: "CEO"
// }

// const manualAssign = (targetObj, sourceObj) => {
//     for(const key of Object.keys(sourceObj)){
//         targetObj[key] = sourceObj[key]
//     }
//     return targetObj
// }
// console.log(manualAssign(targetObj, sourceObj))



// 10. Manually create a function named manualAssign2 in JavaScript utilizing the for...of loop, define parameters for target and ...sources, loop through each source object, iterate over keys within each source, and assign corresponding values to the target object.
// const targetObj = {
//     name: "vano",
//     surname: "motiashvili"
// }

// const sourceObj = {
//     age: 17,
//     position: "CEO"
// }

// const manualAssign = (targetObj, sourceObj) => {
//     for(const key of Object.keys(sourceObj)){
//         targetObj[key] = sourceObj[key]
//     }
//     return targetObj
// }
// console.log(manualAssign(targetObj, sourceObj))








// Rest:

// 1. Array Destructuring: Employ the rest operator to capture multiple elements of an array into a single variable.
// const numbers = [1, 2, 3, 4, 5]
// const [first, second, ...rest] = numbers
// console.log(first)
// console.log(second)
// console.log(rest)


// 2. Collecting Function Arguments: Gather all remaining arguments into an array within a function.
// const args = (first, second, third, ...rest) => {
//     console.log(first)
//     console.log(second)
//     console.log(third)
//     console.log(rest)
// }
// args("vano", "dato", "luka", "nika", "zuka", "tamazi", "ramazi", "kamazi")



// 3. Function Parameters: Use the rest parameter syntax (...args) within a function's parameter list to represent an indefinite number of arguments as an array.
// const args = (...rest) => {
//     console.log(rest)
// }
// args("vano", "dato", "luka", "nika", "zuka", "tamazi", "ramazi", "kamazi")



// 4. Forwarding Arguments: Capture all arguments passed to a function and forward them dynamically to another function using the rest parameter.
// function targetFunction(...args) {
//     console.log("target function =", args)
// }

// function forwardingFunction(...args) {
//     console.log("forward function =", args)
//     targetFunction(...args);
// }
// forwardingFunction("dato", "nika", "vano", "gia", "zuka", "ruka");


// 5. Object Destructuring: Utilize the rest operator in object destructuring to gather any remaining properties into a new object.
// const person = {
//     firstname: "Vano",
//     age: 17,
//     city: "Tbilisi",
//     occupation: "Coding",
//     hobbies: ['Reading', "Working Out"]
// };

// const { firstname, age, ...otherDetails } = person;

// console.log(firstname)
// console.log(age)
// console.log(otherDetails)


// Spread:

// 1. Array Concatenation: Combine multiple arrays into a single array using the spread operator.
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const arr3 = [7,8,9]

// const combined = [...arr1, ...arr2, ...arr3]
// console.log(combined)



// 2. Object Merging: Merge properties from multiple objects into a new object using the spread operator.
// const obj1 = {
//     name: "vano",
//     surname: "motiashvili"
// }

// const obj2 = {
//     age: 17,
//     inLove: false
// }

// const mergedObj = {...obj1, ...obj2}
// console.log(mergedObj)



// 3. Array Modification: Add new elements to an array or modify existing elements using the spread operator.
// const arr = [1, 2, 3, 4, 5]

// const modifiedArr = [22, 15, ...arr, 55, 60]
// console.log(modifiedArr)


// 4. Copying Arrays: Create a copy of an array using the spread operator.
// const arr = [1,2,3,4,5]

// const copyArr = [...arr]
// console.log(copyArr == arr)


// 5. String to Array Conversion: Convert a string into an array of characters using the spread operator.
// const username = "vanomotiashvili"
// const charArr = [...username]
// console.log(charArr)









// Destructing:

// 1. Array Destructuring: Extract values from an array and assign them to variables in a single line of code.
// const [first, second, third] = [1,2,3]
// console.log(first)
// console.log(second)
// console.log(third)


// 2. Object Destructuring: Unpack properties from objects into distinct variables with concise syntax.

// const person = {
//     firstname: "vano",
//     age: 17,
//     city: "Tbilisi"
// }

// const { firstname, age, city } = person
// console.log(firstname)
// console.log(age)
// console.log(city)




// 3. Renaming Variables: Rename variables while destructuring to provide clearer names for extracted values.




// 4. Skipping Values: Skip over unwanted elements in an array or properties in an object during destructuring.
// const numbers = [1,2,3,4,5]
// const [first, ,second, ...rest] = numbers

// console.log(first)
// console.log(second)
// console.log(rest)


// 5. Destructuring in Loops: Iterate over an array of objects and destructure each object's properties directly in the loop declaration.
// const users = [
//     {
//         name: "vano",
//         surname: "motiashvili",
//         age: "17"
//     },

//     {
//         name: "luka",
//         surname: "cxvaradze",
//         age: "18"
//     },

//     {
//         name: "nika",
//         surname: "keshelava",
//         age: "23"
//     },
// ]

// users.forEach(({name, surname, age}) => {
//     console.log(name, surname, age)
// })


// 6. Combining Destructuring and Rest Syntax: Use both destructuring and rest syntax together for flexible assignments.
// const numbers = [1,2,3,4,5]
// const [first, second, ...rest] = numbers

// console.log(first)
// console.log(second)
// console.log(rest)


// 7. Skipping Elements: Given an array [1, 2, 3, 4, 5], extract only the first and last elements into variables, skipping the middle ones.
// const numbers = [1,2,3,4,5]

// // const [first ,,,, last] = numbers


// // const [first, ...rest] = numbers
// // const last = rest.pop()

// console.log(first)
// console.log(last)


// 8. Using Destructuring with Map and Filter: Write a function that filters an array of objects based on a condition and uses destructuring to access object properties within the filter function.
// const users = [
//     {
//         name: "vano",
//         surname: "motiashvili",
//         age: 17
//     },

//     {
//         name: "luka",
//         surname: "cxvaradze",
//         age: 18
//     },

//     {
//         name: "nika",
//         surname: "keshelava",
//         age: 23
//     },
// ]

// const result = users.filter((value) => {
//     if(value["age"] >= 18){
//         console.log(value)
//     }
// })


// 9. Destructuring Arrays with Mixed Types: Given an array containing both primitive values and objects, extract properties from the objects using destructuring.
// const users = ["vano", {name: "luka"}, "giorgi", {name: "dato"}]

// const result = users.filter((value) => {
//     if(typeof(value) == "object"){
//         return value
//     } 
// })
// console.log(result)


// 10. Manual Destructuring Function Rules
// Function Name: manualDestructing
// Input Parameter: Accepts one parameter obj, which should be an object to be destructured.
// Output: Returns an array containing the values of the properties of the input object.
// Usage: Usable by passing an object as an argument.
// Execution: Extracts the values of the properties from the input object manually, without using any built-in destructuring syntax.
// Returned Array: Contains the values of the properties of the input object in the same order as they are defined in the object.
// const users = {
//     name: "vano",
//     surname: "motiashvili",
//     age: 17
// }

// const manualDestructing = (obj) => {
//     const result = []

//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             result.push(obj[key]);
//         }
//     }
//     return result
// }
// console.log(manualDestructing(users))