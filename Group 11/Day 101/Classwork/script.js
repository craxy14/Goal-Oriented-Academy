// class Human{
//     constructor(firstname, lastname){
//         this.firstname = firstname
//         this.lastname = lastname
//     }

//     printInfo(){
//         console.log(this.firstname, this.lastname)
//     }
// }

// // const human = new Human("Vano", "Motiashvili")
// // console.log(human)

// class Worker extends Human{
//     constructor(firstname, lastname, position){
//         super(firstname, lastname)
//         this.position = position
//     }
// }

// const worker1 = new Worker("Vano", "Motiashvili", "Mentor")
// console.log(worker1)
// worker1.printInfo()

// -------------------------------------------------------------
// აქ არის 5 დავალება კლასების და მემკვიდრეობის თემაზე:

// 1.ძირითადი კლასი და შვილები: შექმენი ძირითადი კლასი Animal, რომელსაც ექნება name და age თვისებები და მეთოდი speak(), რომელიც გამოაქვეყნებს ტექსტს: "This animal makes a sound." შემდეგ შექმენი ორი შვილკლასი Dog და Cat, რომლებიც მემკვიდრეობით მიიღებენ Animal-ს და გააფართოვებენ speak() მეთოდს ისე, რომ Dog კლასი გამოაქვეყნებს "Bark!" და Cat - "Meow!".
// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     speak() {
//         console.log("This animal makes a sound");
//     }
// }

// class Dog extends Animal {
//     constructor(name, age) {
//         super(name, age)
//     }

//     speak() {
//         console.log("Bark!");
//     }
// }

// class Cat extends Animal {
//     constructor(name, age) {
//         super(name, age)
//     }

//     speak() {
//         console.log("Meow!");
//     }
// }

// const newDog = new Dog("Vano", 3);
// const newCat = new Cat("Ivane", 2);

// newDog.speak()
// newCat.speak()

// -------------------------------------------------------------
// 2.მშობლის მეთოდის გამოყენება შვილიდან: შექმენი კლასი Vehicle, რომელსაც ექნება თვისებები make, model, და მეთოდი displayInfo(), რომელიც კონსოლში დაბეჭდავს მანქანის ინფორმაციას. შემდეგ შექმენი შვილი კლასი Car, რომელიც მემკვიდრეობით მიიღებს Vehicle-ს და დაამატებს თვისებას fuelType. გააფართოვე displayInfo() მეთოდი ისე, რომ ის გამოძახებულ იქნას მშობელი კლასიდან და შემდეგ დაემატოს ახალი ინფორმაცია fuelType-ზე.
// class Vehicle {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }

//     displayInfo() {
//         console.log(`Make: ${this.make}, Model: ${this.model}`);
//     }
// }

// class Car extends Vehicle {
//     constructor(make, model, fuelType) {
//         super(make, model)
//         this.fuelType = fuelType
//     }

//     displayInfo() {
//         super.displayInfo()
//         console.log(`Fuel Type: ${this.fuelType}`)
//     }
// }

// const newVehicle = new Vehicle("Mercedes", "E63")
// newVehicle.displayInfo()

// const newCar = new Car("BMW", "M5", "Gasoline")
// newCar.displayInfo()

// -------------------------------------------------------------
// 3.მემკვიდრეობის გამოყენება კონსტრუქტორის მეშვეობით: შექმენი კლასი Shape, რომელსაც ექნება კონსტრუქტორი, რომელიც იღებს ორ პარამეტრს: name და sides. შემდეგ შექმენი შვილი კლასი Triangle, რომელიც მემკვიდრეობით მიიღებს Shape-ს, დაამატებს ახალ თვისებას base და height და შექმნის მეთოდს calculateArea(), რომელიც გამოთვლის სამკუთხედის ფართობს.
// class Shape {
//     constructor(name, sides) {
//         this.name = name
//         this.sides = sides
//     }
// }

// class Triangle extends Shape{
//     constructor(name, sides, base, height){
//         super(name, sides)
//         this.base = base
//         this.height = height
//     }

//     calculateArea(){
//         console.log((this.height / 2) * this.base)
//     }
// }

// const newShape = new Shape("Triangle", 3)
// console.log(newShape)

// const newTriangle = new Triangle("Triangle", 3, 10, 5)
// console.log(newTriangle)
// newTriangle.calculateArea()

// -------------------------------------------------------------
// 4.მემკვიდრეობა და მრავალჯერადი გამართვა: შექმენი ძირითადი კლასი Appliance, რომელსაც ექნება თვისებები brand და power, და მეთოდი turnOn(), რომელიც კონსოლში დაბეჭდავს "The appliance is now on." შემდეგ შექმენი ორი შვილი კლასი WashingMachine და Microwave. WashingMachine დაამატებს მეთოდს washClothes(), ხოლო Microwave დაამატებს მეთოდს heatFood(). თითოეულ შვილკლასში შეამოწმე მშობლის turnOn() მეთოდის მუშაობა.
// class Appliance{
//     constructor(brand, power){
//         this.brand = brand
//         this.power = power
//     }

//     turnOn(){
//         console.log("The appliance is now on")
//     }
// }

// class WashingMachine extends Appliance{
//     constructor(brand, power){
//         super(brand, power)
//     }

//     washClothes(){
//         super.turnOn()
//     }
// }

// class Microwave extends Appliance{
//     constructor(brand, power){
//         super(brand, power)
//     }

//     heatFood(){
//         super.turnOn()
//     }
// }

// const newAppliance = new Appliance("Samsung", 700)
// newAppliance.turnOn()

// const newWashingMachine = new washClothes("Toshiba", 500)
// newWashingMachine.turnOn()

// const newMicrowave = new Microwave("Xiaomi", 300)
// newMicrowave.turnOn()

// -------------------------------------------------------------
// let mapExample = new Map([["key1", "value1"], ["key2", "value2"]]) // Map მონაცემთა სტრუქტურის კონსტრუქტორი, რომელიც ინახავს Key ==> Value წვყვილებს მასივების მეშვეობით

// mapExample.set("key3", "value3") // set მეთოდი, რომელიც ამატებს Map-ში ახალ წყვლის
// console.log(mapExample)

// console.log(mapExample.size) // size მეთოდი, რომელიც გვიბრუნებს Map-ის წყვილების რაოდენობას

// console.log(mapExample.get("key1")) // get მეთოდი, რომელიც Map-იდან აბრუნებს კონკრეტულ Key-ს წყვილს (მნიშვნელობას)

// console.log(mapExample.has("key2")) // has მეთოდი, რომლეიც ამოწმებს არის თუ არა Map-ში, კონკრეტული Key

// mapExample.delete("key3") // delete მეთოდი, რომელიც Map-იდან შლის კონკრეტულ Key ==> Value წყვილს (გადაეცემა Key)
// console.log(mapExample)

// console.log(mapExample.keys()) // keys მეთოდი, აბრუნებს იტერატორების ობიექტს, სადაც ინახება Map-ის Key (გასაღებები), რომელსაც უნდა გადავუაროთ თუ გამოყენება გვინდა გასაღებების

// console.log(mapExample.values()) // values მეთოდი, აბრუნებს იტერატორების ობიექტს, სადაც ინახება Map-ის Value (მნიშვნელობები), რომელსაც უნდა გადავუაროთ თუ გამოყენება გვინდა მნიშვნელობების

// console.log(mapExample.entries()) // entries() მეთოდი, გვიბრუნებს იტერატორების ობიექტს (გამოიყენება Map-ზე გადავლის დროს) გვიბრუნებს წყვილებს მასივის ფორმატში (ძალიან გვიმარტივებს გადავლას)

// mapExample.clear() // clear მეთოდი, რომელიც მთლიანად ასუფთავებს Map-ს
// console.log(mapExample)


// -------------------------------------------------------------
// 1.set() მეთოდის გამოყენება: შექმენი ცარიელი Map და დაამატე მასში რამდენიმე პროდუქტი და მათი ფასები set() მეთოდის გამოყენებით. შემდეგ თითოეული პროდუქტის დამატებისას კონსოლში დაბეჭდე შეტყობინება, რომ პროდუქტი წარმატებით დაემატა.
// const productsMap = new Map()

// productsMap.set("Potatoe", "$3")
// console.log("Product added succesfully")

// productsMap.set("Kiwi", "$5")
// console.log("Product added succesfully")

// console.log(productsMap)

// -------------------------------------------------------------
// 2.get() მეთოდის გამოყენება: უკვე შექმნილი Map-დან, გამოიყენე get() მეთოდი, რათა გარკვეული პროდუქტის ფასი მიიღო და დაბეჭდო კონსოლში.
// console.log(productsMap.get("Kiwi"))

// -------------------------------------------------------------
// 3.has() მეთოდის გამოყენება: შექმენი Map, რომელიც ინახავს რამდენიმე ფილმის დასახელებას და მათ გამოშვების წელს. გამოიყენე has() მეთოდი, რათა შეამოწმო, არის თუ არა Map-ში გარკვეული ფილმის დასახელება და შესაბამისად დაბეჭდე შეტყობინება.
// const moviesMap = new Map([["Harry Potter", 2017], ["Book of Eli", 2007]])

// if(moviesMap.has("Book of Eli")){
//     console.log("Movie is avaliable!")
// }

// -------------------------------------------------------------
// 4.delete() მეთოდის გამოყენება: შექმენი Map, რომელიც შეიცავს რამდენიმე სპორტსმენის სახელს და მათ შედეგებს. შემდეგ წაშალე ერთ-ერთი სპორტსმენი delete() მეთოდის გამოყენებით და დაადასტურე, რომ ის წაშლილია.
// const sportPeople = new Map([["Muhammed Ali", "50:1"], ["Mike Tyson", "37:2"]])

// if(sportPeople.delete("Mike Tyson")) {
//     console.log("Sportsman Deleted!")
// }

// -------------------------------------------------------------
// 5.clear() მეთოდის გამოყენება: შექმენი Map რამდენიმე მანქანის ბრენდის და მათი მოდელების შესანახად. შემდეგ გამოიყენე clear() მეთოდი, რათა მთლიანად დაასუფთავო Map. შეამოწმე, რომ Map ცარიელია.
// const carsMap = new Map([["Mercedes", "E63"], ["BMW", "M5"]])
// carsMap.clear()

// console.log(carsMap.size == 0)

// -------------------------------------------------------------
// 6.size თვისების გამოყენება: შექმენი Map, რომელიც ინახავს რესტორნების სახელებს და მათი მენიუს პოპულარულ კერძებს. გამოიყენე size თვისება, რათა კონსოლში დაბეჭდო ამ Map-ის ელემენტების რაოდენობა.
// const restourantsMap = new Map([["Pikentias Saqababe", "Qababi"], ["Shemoixede Genacvale", "Khinkali"]])
// console.log(restourantsMap.size)

// -------------------------------------------------------------
// 7.keys() მეთოდის გამოყენება: შექმენი Map, რომელიც შეიცავს სხვადასხვა ქვეყნის კოდებს და მათ სახელებს. გამოიყენე keys() მეთოდი, რათა ყველა ქვეყნის კოდი გამოიტანო და დაბეჭდო კონსოლში.
// const countriesMap = new Map([["US", "United States"], ["CA", "Canada"], ["GB", "United Kingdom"], ["DE", "Germany"], ["FR", "France"]]);

// console.log(countriesMap.keys())

// -------------------------------------------------------------
// 8.values() მეთოდის გამოყენება: იმავე Map-ში, რომელიც წინა დავალებაში შექმენი, გამოიყენე values() მეთოდი, რათა ყველა ქვეყნის დასახელება გამოიტანო და დაბეჭდო კონსოლში.
// console.log(countriesMap.values())

// -------------------------------------------------------------
// 9.forEach() მეთოდის გამოყენება: შექმენი Map, რომელიც ინახავს სხვადასხვა სასმელის დასახელებას და მათ კალორიებს. გამოიყენე forEach() მეთოდი, რათა კონსოლში დაბეჭდო თითოეული წყვილი შემდეგი ფორმატით: "Drink: [name], Calories: [calories]".
// const drinksMap = new Map([["Coke", 150], ["Pepsi", 154], ["Orange Juice", 120], ["Apple Juice", 110], ["Water", 0]]);

// for(const i of drinksMap.entries()){
//     console.log(`${i[0]}: [${i[1]}]`)
// }

// -------------------------------------------------------------