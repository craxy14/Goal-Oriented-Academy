// Set მონაცემთა სტრუქტურა: ვერ შევინახავთ Duplicate მონაცემებს...
// let setTest = new Set([1,5,2,6,8,3,6])

// console.log(Array(...setTest)) // მასივად გარდაქმნა
// console.log(setTest.size) // size() მეთოდი გვიბრუნებს Set-ის ზომას
// setTest.add(15).add(20).add(27) // (მეთოდების ჯაჭვი) +  add() მეთოდი ამატებს Set-ში მონაცემს
// setTest.delete(27) // delete() აბრუნებს boolean მნიშვნელობას, მეთოდი შლის Set-დან მონაცემს (თუ წარმატებით წაიშალა აბრუნებს true, სხვა შემთხვევაში false)
// console.log(setTest.has(20)) // has() მეთოდი აბრუნებს boolean მნიშვნელობას, ამოწემბს არის თუ არა კონკრეტული ელემენტი Set-ში
// console.log(setTest)

// for(const i of setTest){
//     console.log(i)
// }

// -------------------------------------------------------------
// 1.უნიკალური მნიშვნელობების შეჯამება
// შექმენი Map, სადაც თითოეულ სტრიქონს (string) დააკავშირებ მის სიგრძეს (length). დაამატე რამდენიმე სტრიქონი და შეაჯამე ყველა უნიკალური სიგრძის მნიშვნელობა.
// strings = ["apple", "banana", "grape", "kiwi", "orange"]
// const newSet = new Map()

// for(const i of strings){
//     newSet.set(i, i.length)
// }

// console.log(newSet)

// -------------------------------------------------------------
// 2.ობიექტების Map შექმნა ID-ების მიხედვით
// შექმენი რამდენიმე ობიექტი, რომლებიც შეიცავენ id და name ველებს. გამოიყენე Map id-ის მიხედვით თითოეული ობიექტის ჩასაწერად.
// person1 = {"id": 1, "name": "John"}
// person2 = {"id": 2, "name": "Alice"}
// person3 = {"id": 3, "name": "Bob"}
// const arr = [person1, person2, person3]
// const objMap = new Map()

// for(const i of arr){
//     objMap.set(i.id, i)
// }

// console.log(objMap)

// -------------------------------------------------------------
// 3.შეამოწმე სავალდებულო მნიშვნელობა Map-ში
// შექმენი Map სადაც სახელები დააკავშირებ ასაკებს. დაწერე ფუნქცია, რომელიც იღებს სახელს და ამოწმებს, არის თუ არა ის Map-ში.
// const newMap = new Map([["vano", 17], ["nika", 25], ["luka", 17]])

// const checkName = (name) => {
//     return newMap.has(name)
// }

// console.log(checkName("vano"))

// -------------------------------------------------------------
// 4.მონაცემების განახლება Map-ში
// შექმენი Map, რომელიც შეიცავს პროდუქტების ფასებს. დაწერე ფუნქცია, რომელიც მოცემული პროდუქტისთვის გაზრდის ფასს 10%-ით.
// let product_prices = new Map([["Apple", 1.50], ["Banana", 0.75], ["Orange", 1.20], ["Mango", 2.00], ["Pineapple", 3.00]])

// const incrisePrice = (procent, map) => {
//     const result = new Map()

//     for(const i of map.entries()){
//         result.set(i[0], i[1] + i[1] * procent / 100)
//     }

//     return result
// }
// console.log(incrisePrice(100, product_prices))

// -------------------------------------------------------------
// 5.Map-ის ლუწი მნიშვნელობების ფილტრაცია
// შექმენი Map, რომელიც შეიცავს რიცხვებით key-value წყვილებს. დაწერე ფუნქცია, რომელიც მხოლოდ იმ წყვილებს დააბრუნებს, რომელთა მნიშვნელობები ლუწია.
// let numberMap = new Map([[1, "one"], [2, "two"], [3, "three"], [4, "four"], [5, "five"], [6, "six"]])

// const evenMapValues = (map) => {
//     for(const i of map){
//         if(i[0] % 2 == 0){
//             console.log(i)
//         }
//     }
// }
// evenMapValues(numberMap)

// -------------------------------------------------------------
// 6. set -დან დუბლიკატების ამოღება დაწერე ფუნქცია, რომელიც იღებს რიცხვების მასივს და აბრუწებს ყველა უნიკალურ რიცხვს Set –ის სახით.
// let numbersArray = [1, 2, 3, 4, 5, 3, 2, 6, 7, 5, 8];

// const removeDuplicates = (array) => {
//     return Array(...new Set(array))
//     // return [...new Set(array)] // <-- Seconds Variant
// }
// console.log(removeDuplicates(numbersArray))

// -------------------------------------------------------------
// 7. set ელემენტების ციკლური გამოტანა შექმენი Set, რომელიც შეიცავს რამდენიმე ფერს (string). ციკლის საშუალებით თითოეული ელემენტი გამოიტაწე კონსოლში.
// let colorSet = new Set(["Red", "Blue", "Green", "Yellow", "Purple"])

// for(const i of colorSet){
//     console.log(i)
// }

// -------------------------------------------------------------
// 8. ორ set –ს შორის ერთნაირი ელემენტების პოვნა


// -------------------------------------------------------------
// - შექმენი ორი Set , რომლებსაც სხვადასხვა ელემენტები აქვთ. დაწერე ფუნქცია, რომელიც გამოიტანს ორივე Set –ში არსებულ ერთნაირ ელემენტებს.
// let set1 = new Set(["Red", "Blue", "Green", "Yellow"]);
// let set2 = new Set(["Green", "Yellow", "Purple", "Orange"]);

// console.log(set1.intersection(set2)) // intersection() მეთოდი, რომელიც აბრუებს ორ Set შორის გადაკვეთას (იგივე ელემენტებს)

// -------------------------------------------------------------
// 9. მრავალ set -ის გაერთიანება - შექმენი სამი Set, რომლებსაც სხვადასხვა რიცხვები აქვთ. დაწერე ფუნქცია, რომელიც ამ სამ set ს გააერთიანებს ერთ Set –ში, ამოიღებს დუბლიკატებს და დააბრუნებს უნიკალურ ელემენტებს.
// let set1 = new Set([1, 2, 3, 4])
// let set2 = new Set([5, 6, 7, 8])
// let set3 = new Set([9, 10, 11, 12])

// console.log(set1.union(set2).union(set3)) // union() მეთოდი, რომელიც აერთიანებს ორ Set-ს

// -------------------------------------------------------------
// 10. set ელემენტების წაშლა შექმენი Set,რომელიც შეიცავს რამდენიმე ცხოველის სახელს. დაწერე ფუნქცია, რომელიც მოცემული სახელით ცხოველს წაშლის set -დან.
// let animalSet = new Set(["Dog", "Cat", "Elephant", "Tiger", "Lion"]);

// const removeAnimal = (set, animal) => {
//     set.delete(animal)
//     return set
// } 
// console.log(removeAnimal(animalSet, "Cat"))

// -------------------------------------------------------------