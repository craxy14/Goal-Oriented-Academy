// map აბრუნებს ახალ მასივს, მოდიფიცირებული მონაცემებით (ორიგინალ მასივს არ ცვლის)
// filter აბრუნებს ახალ მასივს, ისეთი მონაცემებით, რომლებიც აკმაყოფილებენ კონკრეტულ პირობას





// const form = document.querySelector("form") // გვიბრუნებს პირველივე ფორმას
// const ul = document.getElementById("items")

// const items = []


// const deleteItem = (item) => {
//     ul.removeChild(item)
// }


// const displayItems = (item) => {
//     ul.innerHTML += `
//     <li onclick="deleteItem(this)">${item}</li>
//     `
// }


// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const task = form.task.value

//     displayItems(task)
//     form.task.value = ""
// })





// const names = ["vano", "nika", "luka", "data", "giorgi"]

// names.forEach((curValue, index, arr) => {
//     if(index % 2 === 0){
//         console.log(curValue, "is on even index!")
//     }else{
//         console.log(curValue, "is on odd index!")
//     }
// })

// const names2 = ["vano", "nika", "luka", "data", "giorgi"]

// const manualForEach = (arr, func) => {
//     for(let i = 0; i < arr.length; i++){
//         func(arr[i], i, arr)
//     }
// }

// manualForEach(names2, (item, index, arr) => {
//     if(index % 2 == 0){
//         console.log(item, "is on even index", arr)
//     }else{
//         console.log(item, "is on odd index", arr)
//     }
// })




// const names3 = ["vano", "nika", "luka", "data", "giorgi"]

// const newNames = names3.map((curValue, index, arr) => {
//     return curValue + index
// })

// const manualMap = (arr, func) => {
//     const res = []

//     for(let i = 0; i < arr.length; i++){
//         const value = func(arr[i], i, arr)
//         res.push(value)
//     }

//     return res
// }

// console.log(manualMap(names3, (curValue, index, arr) => {
//     return curValue + index
// }))










// 1) გამოიყენეთ forEach მეთოდი და გააკეთეთ 2 მაგალითი, ამის შემდეგ თქვენი ხელით შექმენით forEach მეთოდის კლონი
// const names4 = ["vano", "nika", "luka", "data", "giorgi"]

// const manualForEach = (arr, func) => {
//     for(let i = 0; i < arr.length; i++){
//         func(arr[i], i, arr)
//     }
// }

// manualForEach(names2, (item, index, arr) => {
//     if(index % 2 == 0){
//         console.log(item, "is on even index", arr)
//     }else{
//         console.log(item, "is on odd index", arr)
//     }
// })



// 2) შექმენით მასივი სადაც გექნებათ მინიმუმ 5 სახელი, გამოიყენეთ map მეთოდი და შეამოწმეთ შემდეგი პირობა, თუ ინდექსი არის ლუწი მაშინ ახალ მასივში სახელი დაამატეთ დიდი ასოებით სხვა შემთხვევაში თუ კენტია დაამატეთ პატარა ასოებით, როცა ამას დაასრულებთ შექმენით  map მეთოდის კლონი და გააკეთეთ იგივე დავალება თვენი კლონით, აუცილებალდ ახსენით რა განსხვავებაა forEach სა და map მეთოდს შორის
// const names5 = ["vano", "nika", "luka", "data", "giorgi"]

// const upperLower = names5.map((curValue, index) => {
//     if(index % 2 == 0){
//         return curValue.toUpperCase()
//     }else{
//         return curValue.toLowerCase()
//     }
// })




// const names6 = ["vano", "nika", "luka", "data", "giorgi"]

// const manualUpperLower = (arr, func) => {
//     const res = []

//     for(let i = 0; i < arr.length; i++) {
//         const value = func(arr[i], i)
//         res.push(value)
//     }
//     console.log(res)
// }

// manualUpperLower(names6, (curValue, index) => {
//     if(index % 2 == 0){
//         return curValue.toUpperCase()
//     }else{
//         return curValue.toLowerCase()
//     }
// })




// const names7 = ["vano", "nika", "luka", "data", "lile"]

// const notL = names7.filter((curValue) => {
//     return curValue[0] != "l"
// })


// const manualNotL = ((arr, func) => {
//     const res = []

//     for(let i = 0; i < arr.length; i++){
//         const bool = func(arr[i])

//         if(bool){
//             res.push(arr[i])
//         }
//     }
//     console.log(res)
// })

// manualNotL(names7, (curValue) => {
//     return curValue[0] != "l"
// })




// 3) შექმენით მასივი სადაც გექნებათ 5 ობიექტი, ამ ობიექტებში უნდა იყოს სახელის კუთვნილება და ასაკის კუთვნილება რომელშიც შეინახება რიცხვი, თვქენი დავალეება გააკეთით ფილტრაციუა და შექმნათ ორი ახალი მასივი filter- ის დახმარებით, პირველ მასივში უნდა იყოს მხოლოდ ის ობიექტები რომლები  არიან 18ის ან 18 მეტი ასაკის, ხოლო მეორეში კი 18 ზე ნაკლებიუ, ამის გაკეთების შემდეგ შექმენით თვქნეი საკუთარი filter მეთოდის კლონი და იგივე დავალებაა გააკეთეთ კლონის დახმარებით, აგრეთვე ახსენით რა განსხვავებაა map სა და filters შორის
// const objArr = [
//     {name: "vano", age: 17},
//     {name: "luka", age: 18},
//     {name: "nika", age: 25},
//     {name: "giorgi", age: 16},
//     {name: "zuka", age: 15}
// ]

// const above18 = objArr.filter((curValue) => {
//     return curValue.age >= 18
// })

// const below18 = objArr.filter((curValue) => {
//     return curValue.age < 18
// })

// console.log(above18)
// console.log(below18)


// const ageFilterClone = ((obj, func) => {
//     const above18 = []
//     const below18 = []
    
//     for(let i = 0; i < obj.length; i++){
//         const bool = func(obj[i])

//         if(bool){
//             above18.push(obj[i])
//         }else{
//             below18.push(obj[i])
//         }
//     }
//     console.log(above18)
//     console.log(below18)
// })

// ageFilterClone(objArr, (curObj) => {
//     return curObj.age >= 18
// })











// 1)Double the Numbers (map)
// Create an array of numbers. Use map() to return a new array where each number is doubled.
// const numbers1 = [1,5,7,2,4,7,8,3]

// const doubledNumbers = numbers1.map((curValue) => {
//     return curValue * 2
// })
// console.log(doubledNumbers)



// 2)Filter Even Numbers (filter)
// Given an array of numbers, use filter() to return a new array containing only the even numbers.
// const numbers2 = [1,5,7,2,4,7,8,3]

// const filteredNumbers = numbers2.filter((curValue) => {
//     return curValue % 2 == 0
// })
// console.log(filteredNumbers)



// 3)Square of Numbers (map)
// Create an array of numbers. Use map() to return a new array where each number is squared.
// const numbers4 = [1,5,7,2,4,7,8,3]

// const squaredNum = numbers4.map((curValue) => {
//     return curValue ** 2
// })
// console.log(squaredNum)



// 4)Extract Long Names (filter)
// Create an array of names. Use filter() to return a new array of names longer than 5 characters.
// const names1 = ["vano", "giorgi", "irakli", "nika"]

// const longNames = names1.filter((curValue) => {
//     if(curValue.length > 5){
//         return curValue
//     }
// })
// console.log(longNames)



// 5)Capitalize First Letter (map)
// Create an array of strings. Use map() to return a new array where the first letter of each string is capitalized.
// const names2 = ["vano", "giorgi", "irakli", "nika"]

// const capitalizedStrings = names2.map((curValue) => {
//     return curValue[0].toUpperCase() + curValue.slice(1,)
// })
// console.log(capitalizedStrings)



// 6)Sum All Numbers (forEach)
// Given an array of numbers, use forEach() to iterate through the array and find the sum of all numbers.
// const numbers5 = [1,5,7,2,4,7,8,3]

// let sum = 0

// numbers5.forEach((curValue) => {
//     sum += curValue
// })

// console.log(sum)



// 7)Remove Short Words (filter)
// Create an array of words. Use filter() to return a new array containing only words that are longer than 3 characters.
// const names3 = ["vano", "gio", "ili", "nika",]

// const longWords = names3.filter((curValue) => {
//     if(curValue.length > 3){
//         return curValue
//     }
// })
// console.log(longWords)



// 8)Add Prefix to Words (map)
// Create an array of words. Use map() to add the prefix "super" to each word and return a new array.
// const names4 = ["vano", "gio", "ili", "nika",]

// const superPrefix = names4.map((curValue) => {
//     return `super ${curValue}`
// })
// console.log(superPrefix)



// 9)Filter Odd Numbers (filter)
// Given an array of numbers, use filter() to return a new array containing only the odd numbers.
// const numbers6 = [1,5,7,2,4,7,8,3]

// const oddNumbers = numbers6.filter((curValue) => {
//     return curValue % 2 != 0 
// })
// console.log(oddNumbers)



// 10)Log Each Element (forEach)
// Create an array of numbers. Use forEach() to log each element of the array to the console.
// const numbers7 = [1,5,7,2,4,7,8,3]
// numbers7.forEach((curValue) => {
//     console.log(curValue)
// })

