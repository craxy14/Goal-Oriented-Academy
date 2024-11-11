// // 1. Transforming Data: Given an array of objects representing people with their ages, use the map function to create a new array containing only the names of these people.

// const people = [
//     { name: 'Vano', age: 11 },
//     { name: 'Luka', age: 17 },
//     { name: 'Jengiz', age: 41 },
// ]

// const names = people.map(function(person) {
//     return person.name;
// })

// console.log(names)



// //2. Prime or not: Given an array of numbers, use the map function to create a new array where there would be two kind of values: True / False. Add True to new array, if number is prime, else add False when number is composite.





// //3. Filtering Data: Given an array of objects representing students with their grades, use the filter function to create a new array containing only the students who passed the exam (i.e., whose grades are above a certain threshold).


// let students = [
//     { name: 'Vano', score: 55},
//     { name: 'Luka', score: 100},
//     { name: 'Jengiz', score: 99.9},
// ]

// const passingGrade = 70

// let filter = students.map(function(student){
//     if(student.score >= passingGrade){
//         return student.name + " " + "Passed"
//     }else {
//         return student.name + " " + "Failed"
//     }
// })

// console.log(filter)




// //4. Finding Specific Values: Given an array of strings representing file names, use the filter function to create a new array containing only the file names that have a ".jpg" extension.


// // let fileNames = ["vano.jpg" , "script.js" , "index.html" , "goa_logo.jpg"]


// // let jpg = fileNames.filter(function(fileName){
// //     if(fileName.endsWith("jpg")){
// //         console.log(fileName)
// //     }
// // })






//დავალება: შექმენით მეთოდი სახელად manualMap, რომლესაც გადაეცემა სია და ფუნქცია. მან უნდა დააბრუნო ახალი სია ისე, რომ ყველა რიცხვი ააკვადრატოს

// let newNumbers = manualMap(list , function(num){
//     newList.push(num * num)
// })

// console.log(newList)

// let newList = []
// let list = [1 , 2 , 3 , 4 , 5 , 6 , 7]


// let square = list.map(function(element){
//     newList.push(element ** 2)
//     console.log(newList)
// })



// let nums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
// let newNums = []

// let mapFunc = nums.map(function(num , index) {
//     if(index % 2 == 0){
//         newNums.push(num ** 2)
//     } 
// })

// console.log(newNums)



// const manualMap = function(arr, subFunc){
//     const result = [];
    
//     for(let i = 0; i < arr.length; i++){
//         result.push(subFunc(arr[i], i))
//     }
//     return result;
// }

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = manualMap(numbers, function(num, index){
//     if(index % 2 === 0) return num ** 2;
//     return num;
// });

// console.log(newNumbers)



// const manualFilter = function(arr, func){
//     const newArr = []
    
//     for(let i = 0; i < arr.length; i++){
//         if(func(arr[i])){
//             newArr.push(arr[i])
//         }
//     }
    
//     return newArr;
// }

// const students = [{name: "Luka", grade: 70}, {name: "Lile", grade: 55}, {name: "Nia", grade: 65}]

// const whoPassed = manualFilter(students, function(studentObj){
//     return studentObj.grade >= 60;
// })




// const manualMap = function(arr, subFunc){
//     const result = [];
    
//     for(let i = 0; i < arr.length; i++){
//         result.push(subFunc(arr[i]))
//     }
//     return result;
// }

// const numbers = [1, 2, 3, 4, 5, 6];

// const newNumbers = manualMap(numbers, function(num){
//     if(num <= 1) return false;
    
//     for(let i = 2; i < num; i++){
//         if(num % i == 0) return false;
//     }
    
//     return true;
// });

// console.log(newNumbers)