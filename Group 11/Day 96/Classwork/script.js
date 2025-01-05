// 1)შექმენით reduce მეთოდის კლონი, იქონიეთ რიცხვების მასივი, ჯერ გამოიყენეთ თვითონ reduce მეთოდი და ნახეთ როგორ მუშაობს, გაიგეთ რიცხვთა ჯამი, ნამრავლი / შემდეგ კი შექმენით მისი კლონი
// const numbers = [1,2,3,4,5]

// const sum = numbers.reduce((acc, cur) => {
//     return acc + cur
// }, 0)
// console.log(sum)

// -------------------------------------------------------------
// const multiply = numbers.reduce((acc, cur) => {
//     return acc * cur
// }, 1)
// console.log(multiply)

// -------------------------------------------------------------
// const manualReduce = (arr, func, startValue = 0) => {
//     let acc = startValue
//     for(const value of arr){
//         acc = func(acc, value) 
//     }

//     return acc
// }

// console.log(manualReduce(numbers, (acc, curVal) => {
//     return acc += curVal
// }, 10))

// -------------------------------------------------------------
// const manualAcc = (arr, func, starting) => {
//     let acc = starting
//     for(const value of arr){
//         acc = func(acc, value)
//     }

//     return acc
// }
// console.log(manualAcc(numbers, (acc1, curVal) => {
//     return acc1 *= curVal
// }, 10))

// -------------------------------------------------------------
//2)შექმენით რიცხვების მასივი, სადაც გექნებათ 10 რიცხვი, გამოიყენეთ map() მეთოდი, და გააკეთეთ ასეთი რამ: თუ ინდექსი არის ლუწი, მაშინ ამჟამინდელი რიცხვი გაამრავლეთ 2ზე, ხოლო თუ არის კენტი, მაშინ დააბრუნეთ უცვლელად, შემდეგ კი იგივე რამ გააკეთეთ map()-ის კლონი მეთოდით
// const numbersArr = [10,12,16,17,23,74,82,68,34,14]

// const evenOdd = numbersArr.map((curVal, index) => {
//     if(index % 2 == 0){
//         return curVal * 2
//     }else{
//         return curVal
//     }
// })
// console.log(evenOdd)


// const manualEvenOdd = (arr, func) => {
//     const res = []
//     arr.forEach((curVal, index) => {
//         res.push(func(curVal, index))
//     })

//     return res
// }

// console.log(manualEvenOdd(numbersArr, (num, index) => {
//     if(index % 2 == 0){
//         return num * 2
//     }else{
//         return num
//     }
// }))

// -------------------------------------------------------------
//3)შექმენით რიცხვების მასივი, სადაც გექნებათ 10 რიცხვი, თქვენი დავალებაა გაფილტროთ ეს მასივი, და დააბრუნოთ ახალი მასივი სადაც მოთავსებული იქნება ისეთი რიცხვები რომელიც ორიგინალ მასივში მეორდება ზუსტად ორჯერ, შექმენით filter() მეთოდის კლონი და გააკეთეთ იგივე რამ
// const numbersArr2 = [10,12,16,10,17,23,74,82,12,68,17,34,14]

// const filteredNums2 = numbersArr2.filter((curVal, i, arr) => {
//     if(arr.lastIndexOf(curVal) != arr.indexOf(curVal)){
//         return curVal
//     }
// })
// console.log(filteredNums2)


// const manualFilteredNums2 = (arr, func) => {
//     const res = []

//     arr.forEach((curVal, __, arr) => {
//         if (func(curVal, arr)) {
//             res.push(curVal);
//         }
//     });

//     return res
// }
// console.log(manualFilteredNums2(numbersArr2, (val, arr) => {
//     return arr.indexOf(val) !== arr.lastIndexOf(val);
// }))

// -------------------------------------------------------------
// const object1 = {
//     name: "Alice",
//     age: 25
// }

// const object2 = {
//     profession: "Engineer",
//     name: "Luka"
// }

// const object3 = {
//     country: "USA",
//     hobby: "Photography"
// }

//                                {},
// const mergedObj = Object.assign(object1, object2, object3)
// console.log(mergedObj)


// Manual Object Assign:
// const manualObjAssign = (pasteObj, ...leftoverObjs) => {
//     for(const obj of leftoverObjs){
//         for(const i in obj){
//             pasteObj[i] = obj[i]
//         }
//     }

//     return pasteObj
// }

// console.log(manualObjAssign(object1, object2, object3))