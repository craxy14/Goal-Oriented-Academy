// აქ არის 20 დავალება, რომლებიც მოიცავს `classes`-ს, `Map`-ს და მათ გაერთიანებას.

// ### Classes-ის შესახებ (10 დავალება):

// 1. **კლასის შექმნა და ინიციალიზაცია**: შექმენი კლასი `User`, რომელსაც ექნება თვისებები `name` და `email`. კონსტრუქტორის მეშვეობით ინიციალიზაცია გაუკეთე ამ თვისებებს და შექმენი რამდენიმე `User` ობიექტი.
// class User1 {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
// }

// // რამდენიმე User ობიექტის შექმნა
// const user1 = new User1("Alice", "alice@example.com");
// const user2 = new User1("Bob", "bob@example.com");
// const user3 = new User1("Charlie", "charlie@example.com");

// // კონსოლში მათი მონაცემების გამოტანა
// console.log(user1)
// console.log(user2)
// console.log(user3)

// -------------------------------------------------------------
// 2. **მეთოდის შექმნა და გამოძახება**: დაამატე `User` კლასს მეთოდი `displayInfo()`, რომელიც კონსოლში დაბეჭდავს მომხმარებლის სახელს და ელფოსტას. შექმენი რამდენიმე `User` ობიექტი და გამოძახე ეს მეთოდი თითოეულზე.
// class User2 {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     // displayInfo() მეთოდი
//     displayInfo() {
//         console.log(`Name: ${this.name}, Email: ${this.email}`);
//     }
// }

// // რამდენიმე User ობიექტის შექმნა
// const user4 = new User2("Alice", "alice@example.com");
// const user5 = new User2("Bob", "bob@example.com");
// const user6 = new User2("Charlie", "charlie@example.com");

// // displayInfo() მეთოდის გამოძახება თითოეულ ობიექტზე
// user4.displayInfo()
// user5.displayInfo()
// user6.displayInfo()

// -------------------------------------------------------------
// 3. **სტატიკური მეთოდების გამოყენება**: დაამატე `User` კლასს სტატიკური მეთოდი `compareUsers(user1, user2)`, რომელიც შეადარებს ორ მომხმარებელს მათი `email`-ის მიხედვით. სცადე ამ მეთოდის გამოძახება ორ `User` ობიექტზე.
// class User3 {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     // displayInfo() მეთოდი
//     displayInfo() {
//         console.log(`Name: ${this.name}, Email: ${this.email}`);
//     }

//     static compareUsers(user1, user2){
//         if(user1.length > user2.length){
//             console.log(`First user's email: ${user1} is longer!`)
//         }else if(user2.length > user1.length){
//             console.log(`Second user's email: ${user2} is longer!`)
//         }else{
//             console.log(`emails: ${user1} and ${user2} are equal!`)
//         }
//     }
// }

// const user7 = new User3("Alice", "alice@example.com")
// const user8 = new User3("Bob", "bob@example.com");

// User3.compareUsers("xxmarselxx7@gmail.com", "test@gmail.com")
// User3.compareUsers("xxmarselxx7@gmail.com", "xxmarselxx7@gmail.com")

// -------------------------------------------------------------
// 4. **Getters და Setters**: შექმენი კლასი `Product`, რომელსაც ექნება `name` და `price` თვისებები. გამოიყენე `get` და `set` accessors `price`-ისათვის, რათა დარწმუნდე, რომ ფასი მხოლოდ დადებითი მნიშვნელობაა.
// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price1 = price;
//     }

//     get getPrice() {
//         return this.price1;
//     }

//     set setPrice(value) {
//         if (value > 0) {
//             this.price1 = value;
//         } else {
//             console.log("Price must be a positive number!");
//         }
//     }
// }

// const product1 = new Product("Laptop", 1000)
// const product2 = new Product("Phone", -500)

// console.log(product1.getPrice)
// console.log(product2.getPrice)

// product1.setPrice = 777
// product2.setPrice = 77
// console.log(product1.getPrice)
// console.log(product2.getPrice)

// -------------------------------------------------------------
// 5. **მემკვიდრეობა და კონსტრუქტორების მემკვიდრეობა**: შექმენი მშობელი კლასი `Person` და შვილკლასი `Student`. `Person`-ს ექნება `name` და `age`, ხოლო `Student` დაამატებს `studentID` თვისებას. მემკვიდრეობისას გამოიძახე მშობელი კლასის კონსტრუქტორი `super()`-ით.
// class Person{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
// }

// class Student extends Person{
//     constructor(name, age, studentID){
//         super(name, age)
//         this.studentID = studentID
//     }
// }

// const newStudent = new Student("Vano", "Motiashvili", 777)
// console.log(newStudent)

// -------------------------------------------------------------
// 6. **Method Overriding**: იმავე `Person` და `Student` კლასებში, შექმენი მეთოდი `getDetails()`, რომელიც `Person` კლასში დაბეჭდავს მხოლოდ სახელს და ასაკს, ხოლო `Student`-ში ასევე სტუდენტის ID-ს. 
// class Person{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     getDetails(){
//         console.log(this.name, this.age)
//     }
// }

// class Student extends Person{
//     constructor(name, age, studentID){
//         super(name, age)
//         this.studentID = studentID
//     }

//     getDetails(){
//         console.log(this.name, this.age, this.studentID)
//     }
// }

// const newStudent = new Student("Vano", "Motiashvili", 777)
// newStudent.getDetails()

// -------------------------------------------------------------
// 7. **Privileged მეთოდები**: შექმენი კლასი `BankAccount`, რომელსაც ექნება დაცული (private) თვისება `_balance`. დაამატე მეთოდი `deposit(amount)` ბალანსის დასამატებლად და `withdraw(amount)` ფულის ამოსაღებად.
// class BankAccount{
//     #balance

//     constructor(balance){
//         this.#balance = balance
//     }

//     deposit(amount){
//         this.#balance += amount
//     }

//     withdraw(amount){
//         this.#balance -= amount
//     }

//     get getBalance(){
//         console.log(this.#balance)
//     }
// }

// const newAcc = new BankAccount(500)

// newAcc.deposit(300)
// newAcc.getBalance

// newAcc.withdraw(23)
// newAcc.getBalance

// -------------------------------------------------------------
// 8. **Protected თვისებები და მემკვიდრეობა**: შექმენი კლასი `Appliance`, რომელიც დაცულ (protected) თვისებად შეინახავს `power`-ს. მემკვიდრეობით მიიღე `WashingMachine` კლასი, რომელიც `Appliance`-ის თვისებებს გამოიყენებს, და დაამატე დამატებითი თვისებები და მეთოდები.
// class Appliance {
//     #power

//     constructor(power) {
//         this.#power = power
//     }

//     get power() {
//         return this.#power;
//     }

//     displayPower() {
//         console.log(`Power consumption: ${this.#power} watts`);
//     }
// }

// class WashingMachine extends Appliance {
//     constructor(power, capacity) {
//         super(power)
//         this.capacity = capacity
//     }

//     displayDetails() {
//         console.log(`Washing Machine - Power: ${this.power} watts, Capacity: ${this.capacity} kg`);
//     }

//     startWashing() {
//         console.log(`Starting wash cycle with ${this.capacity} kg load.`);
//     }
// }

// const washingMachine = new WashingMachine(500, 7);

// washingMachine.displayDetails()
// washingMachine.startWashing()
// washingMachine.displayPower()

// -------------------------------------------------------------
// 9. **Static თვისებები და მეთოდები**: შექმენი კლასი `Counter`, რომელსაც ექნება სტატიკური თვისება `count` და სტატიკური მეთოდი `increment()`, რომელიც `count`-ს 1-ით გაზრდის.
// class Counter{
//     static count = 0;

//     constructor(name, surname){
//         this.name = name
//         this.surname = surname
//         Counter.increment()
//     }

//     static increment(){
//         this.count += 1
//     }
// }

// const p1 = new Counter("Vano", "Motiashvili")
// console.log(Counter.count)

// const p2 = new Counter("Nika", "Keshelava")
// console.log(Counter.count)

// const p3 = new Counter("Luka", "Tskhvaradze")
// console.log(Counter.count)

// -------------------------------------------------------------
// 10. **კლასების მასივი**: შექმენი კლასი `Book` და შექმენი ამ კლასის რამდენიმე ობიექტი მასივში. შემდეგ გამოიყენე `forEach()` რათა ყველა წიგნის სათაური დაბეჭდო.
// class Book{
//     constructor(book){
//         this.book = book
//     }
// }

// const book1 = new Book("1984", "George Orwell", 1949);
// const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
// const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
// const book4 = new Book("Moby Dick", "Herman Melville", 1851);

// const booksArray = [book1, book2, book3, book4];
// console.log(booksArray)

// booksArray.forEach((curVal) => {
//     console.log(curVal)
// })

// -------------------------------------------------------------
// ### Maps-ის შესახებ (10 დავალება):

// 1. **Map-ის ინიციალიზაცია მონაცემებით**: შექმენი `Map`, რომელიც ინახავს სამ ქალაქს და მათ მოსახლეობას.
// const cityPopulationMap = new Map([["Tbilisi", 1500000], ["Batumi", 200000], ["Kutaisi", 150000]])

// console.log(cityPopulationMap.get("Tbilisi"))
// console.log(cityPopulationMap.get("Batumi"))
// console.log(cityPopulationMap.get("Kutaisi"))

// -------------------------------------------------------------
// 2. **Map-ის ელემენტის განახლება**: იმავე `Map`-ში, რაც წინა დავალებაში შექმენი, განაახლე ერთი ქალაქის მოსახლეობა ახალი მნიშვნელობით.
// cityPopulationMap.set("Tbilisi", 2000000)
// console.log(cityPopulationMap)

// -------------------------------------------------------------
// 3. **Map-ის `for...of` ციკლი**: შექმენი `Map`, რომელიც ინახავს ვალუტის კოდებს და მათ სახელებს (მაგ., "USD" => "Dollar"). გამოიყენე `for...of` ციკლი, რათა თითოეული წყვილი გამოიტანო.
// const currencyMap = new Map([["USD", "United States Dollar"], ["EUR", "Euro"], ["GBP", "British Pound"], ["JPY", "Japanese Yen"], ["INR", "Indian Rupee"]]);

// for(const i of currencyMap){
//     console.log(i[0], i[1])
// }

// -------------------------------------------------------------
// 4. **მრავალ Map-ის გაერთიანება**: შექმენი ორი `Map`. პირველი `Map` შეიცავდეს პროდუქტებს და მათ ფასებს, ხოლო მეორე `Map` - პროდუქტებს და მათი რაოდენობებს. გამოიყენე `forEach()` მეთოდი, რათა ახალი `Map` შექმნა, რომელიც ინახავს თითოეული პროდუქტის მთლიან ფასს (ფასი * რაოდენობა).
// const pricesMap = new Map([["Apple", 2], ["Banana", 1], ["Orange", 3]]);
// const quantitiesMap = new Map([["Apple", 10], ["Banana", 5], ["Orange", 8]]);

// const totalCostMap = new Map();

// pricesMap.forEach((price, product) => {
//     const quantity = quantitiesMap.get(product);
//     if (quantity !== undefined) {
//         totalCostMap.set(product, price * quantity);
//     }
// })

// console.log(totalCostMap)

// -------------------------------------------------------------
// 5. **Map-ის კლონი**: შექმენი `Map`, რომელიც შეიცავს ქვეყნის სახელებს და მათ დედაქალაქებს. შექმენი ახალი `Map`, რომელიც ამ `Map`-ის სრული კლონი იქნება.
// const countriesMap = new Map([["Georgia", "Tbilisi"], ["France", "Paris"], ["Japan", "Tokyo"], ["Germany", "Berlin"]]);
// console.log(countriesMap)

// const clonedCountriesMap = countriesMap
// console.log(clonedCountriesMap)

// -------------------------------------------------------------
// 6. **Map-ის ელემენტების დათვლა**: შექმენი `Map`, რომელიც ინახავს სხვადასხვა კომპიუტერული თამაშის დასახელებებს და მათი რეიტინგებს. გამოიყენე `size` თვისება, რათა დაადგინო რამდენი თამაშია `Map`-ში.
// const gamesMap = new Map([["The Witcher 3", 9.8], ["Cyberpunk 2077", 7.5], ["Minecraft", 9.0], ["Red Dead Redemption 2", 9.7], ["Fortnite", 8.5]])
// console.log(gamesMap.size)

// -------------------------------------------------------------
// 7. **თითოეული ელემენტის წაშლა Map-იდან**: შექმენი `Map` სამი სხვადასხვა პროდუქტის დასახელებით და ფასით. შემდეგ წაშალე თითოეული ელემენტი `delete()` მეთოდის გამოყენებით და დაბეჭდე შეტყობინება, რომ პროდუქტი წაიშალა.
// const productsMap = new Map([["Laptop", 1200], ["Phone", 800], ["Headphones", 150]])

// for(const i of productsMap){
//     console.log(productsMap)
//     productsMap.delete(i[0])
// }
// console.log(productsMap)

// -------------------------------------------------------------
// 8. **Map და მასივის გარდაქმნა**: შექმენი `Map`, რომელიც ინახავს სპორტის სახეობებს და მათთვის საჭირო მოთამაშეების რაოდენობას. გამოიყენე `Array.from()` და გარდაქმენი ეს `Map` მასივად.
// const sportsMap = new Map([["Football", 11], ["Basketball", 5], ["Tennis", 2], ["Volleyball", 6]]);
// const sportsArray = Array.from(sportsMap)

// console.log(sportsArray)

// -------------------------------------------------------------
// 9. **Map-ის ძიება მნიშვნელობებით**: შექმენი `Map`, რომელიც ინახავს ცხოველების დასახელებებს და მათ საცხოვრებელ გარემოს (მაგ., "Lion" => "Savannah"). მოძებნე ყველა ცხოველი, რომელიც ცხოვრობს გარკვეულ გარემოში (მაგალითად, "Savannah").
// const animalsMap = new Map([["Lion", "Savannah"], ["Elephant", "Savannah"], ["Penguin", "Antarctica"], ["Seal", "Antarctica"], ["Camel", "Desert"], ["Lizard", "Desert"]]);

// for(const i of animalsMap){
//     if(i[1] == "Savannah"){
//         console.log(i[0], i[1])
//     }
// }

// -------------------------------------------------------------
// 10. **Map-ის დაგროვება Reduce-ით**: შექმენი `Map`, რომელიც ინახავს სტუდენტების დასახელებებს და მათ ქულებს. გამოიყენე `Array.from()` და `reduce()` მეთოდი, რათა ამ სტუდენტების საშუალო ქულა გამოთვალო.
// const studentsMap = new Map([["John", 85], ["Alice", 92], ["Bob", 78], ["Mary", 88]]);

// const scoreSum = Array.from(studentsMap).map(([name, score]) => score).reduce((accScore, curScore) => accScore += curScore, 0)
// console.log(scoreSum / studentsMap.size)

// -------------------------------------------------------------
// ### Classes და Maps გაერთიანებული (10 დავალება):

// 1. **კლასი `Map`-ით და მეთოდით**: შექმენი კლასი `Library`, რომელსაც ექნება `Map`, რომელიც ინახავს წიგნის სახელებს და ავტორებს. დაამატე მეთოდი `addBook(title, author)`, რომელიც დაამატებს ახალ წყვილს `Map`-ში.
// class Library {
//     constructor() {
//         this.books = new Map();
//     }

//     addBook(title, author) {
//         this.books.set(title, author);
//     }
// }

// const newBook = new Library()
// newBook.addBook("Harry Potter", "J.K. Rowling")

// console.log(newBook)

// -------------------------------------------------------------
// 2. **Map კლასის თვისებად**: შექმენი კლასი `Store`, რომელსაც ექნება `Map`, რომელიც ინახავს პროდუქტის სახელს და ფასს. დაამატე მეთოდი `getPrice(product)`, რომელიც დააბრუნებს პროდუქტის ფასს.
// class Store{
//     constructor(){
//         this.product = new Map()
//     }

//     addProduct(name, price){
//         this.product.set(name, price)
//     }

//     getPrice(product){
//         console.log(this.product.get(product))
//     }
// }

// const newProduct = new Store()
// newProduct.addProduct("Apple", "$2")
// newProduct.getPrice("Apple")

// -------------------------------------------------------------
// 3. **Map-თან მუშაობის მეთოდების შექმნა**: შექმენი კლასი `PhoneBook`, რომელსაც ექნება `Map`, რომელიც ინახავს ტელეფონის ნომრებს და ადამიანების სახელებს. დაამატე მეთოდი `addContact(name, phone)` და `getContact(phone)`, რომელიც დააბრუნებს ნომრის პატრონს.
// class PhoneBook{
//     constructor(){
//         this.phone = new Map()
//     }

//     addContact(name, phone){
//         this.phone.set(phone, name)
//     }

//     getContact(phone){
//         console.log(this.phone.get(phone))
//     }
// }

// const newPhone = new PhoneBook

// newPhone.addContact("Vano", "+995577077728")
// newPhone.getContact("+995577077728")
// console.log(newPhone)

// -------------------------------------------------------------
// 4. **კლასი `Map`-ის ელემენტების ჩამონათვალით**: შექმენი კლასი `Zoo`, რომელსაც ექნება `Map` ცხოველების სახელებით და მათი რაოდენობებით. დაამატე მეთოდი `listAnimals()`, რომელიც დააბრუნებს `Map`-ში არსებულ ყველა ცხოველის ჩამონათვალს.
// class Zoo{
//     constructor(){
//         this.animal = new Map()
//     }

//     addAnimals(name, amount){
//         this.animal.set(name, amount)
//     }

//     listAnimals(){
//         for(const i of this.animal){
//             console.log(i[0], i[1])
//         }
//     }
// }

// const newAnimal = new Zoo()

// newAnimal.addAnimals("Lion", 1)
// newAnimal.addAnimals("Phanter", 2)
// newAnimal.addAnimals("Leophard", 3)
// newAnimal.listAnimals()

// -------------------------------------------------------------
// 5. **Map და მემკვიდრეობა**: შექმენი მშობელი კლასი `Inventory`, რომელსაც ექნება `Map` ნივთების სახელებით და რაოდენობებით. მემკვიდრეობით მიიღე კლასი `StoreInventory`, რომელიც დაამატებს დამატებით მეთოდს `getStock(item)`.
// class Inventory{
//     constructor(){
//         this.item = new Map()
//     }

//     addItem(name, quantity){
//         this.item.set(name, quantity)
//     }
// }

// class StoreInventory extends Inventory{
//     constructor(){
//         super()
//     }

//     getStock(name){
//         console.log(this.item.get(name))
//     }
// }

// const store = new StoreInventory();


// store.addItem("Apple", 100);
// store.addItem("Banana", 50);
// store.addItem("Orange", 200);

// store.getStock("Apple")
// store.getStock("Banana")
// store.getStock("Orange");

// -------------------------------------------------------------
// 6. **Map-ის დამუშავება კლასის მეთოდებით**: შექმენი კლასი `Classroom`, რომელსაც ექნება `Map`, რომელიც ინახავს სტუდენტების ID-ებს და მათ ქულებს. დაამატე მეთოდები `addStudent(id, score)` და `getAverageScore()`, რომელიც გამოთვლის ყველა სტუდენტის საშუალო ქულას.
// class Classroom{
//     constructor(){
//         this.student = new Map()
//     }

//     addStudent(id, score){
//         this.student.set(id,score)
//     }

//     getAverageScore(){
//         let scoreSum = 0
//         let studentsSum = this.student.size;

//         for(let i of this.student.values()){
//             scoreSum += i
//         }
//         console.log(scoreSum / studentsSum)
//     }
// }

// const newStudent = new Classroom()
// newStudent.addStudent("A5", 75)
// newStudent.addStudent("B4", 50)
// newStudent.addStudent("C3", 80)
// newStudent.addStudent("D2", 95)
// newStudent.getAverageScore()

// -------------------------------------------------------------
// 7. **Map და კონსტრუქტორის ინიციალიზაცია**: შექმენი კლასი `CountryDirectory`, რომელსაც კონსტრუქტორში `Map`-ად გადაეცემა ქვეყნების სახელები და დედაქალაქები. დაამატე მეთოდი `getCapital(country)`, რომელიც დააბრუნებს ქვეყნის დედაქალაქს.
// class CountryDirectory{
//     constructor(){
//         this.country = new Map()
//     }

//     addCountry(name, capital){
//         this.country.set(name, capital)
//     }

//     printInfo(){
//         for(const i of this.country){
//             console.log(i[0], i[1])
//         }
//     }
// }

// const country = new CountryDirectory()

// country.addCountry("Georgia", "Tbilisi");
// country.addCountry("USA", "Washington, D.C.");
// country.addCountry("France", "Paris");
// country.addCountry("Japan", "Tokyo");
// country.printInfo()

// -------------------------------------------------------------
// 8. **Map-ის გამოყენება კლასის ინტერაქტიულობისთვის**: შექმენი კლასი `ShoppingCart`, რომელსაც ექნება `Map`, რომელიც ინახავს პროდუქტებს და მათ რაოდენობას. დაამატე მეთოდები `addItem(product, quantity)` და `getTotalItems()`, რომელიც დააბრუნებს ყველა პროდუქტების რაოდენობას.
// class ShoppingCart{
//     constructor(){
//         this.product = new Map()
//     }

//     addItem(product, quantity){
//         this.product.set(product, quantity)
//     }

//     getTotalItems(){
//         let quantitySum = 0

//         for(let i of this.product.values()){
//             quantitySum += i
//         }

//         console.log(quantitySum)
//     }
// }

// const myCart = new ShoppingCart();

// myCart.addItem("Apple", 1) 
// myCart.addItem("Banana", 4)
// myCart.addItem("Kiwi", 2)
// myCart.getTotalItems()

// -------------------------------------------------------------
// 9. **Map-თან მუშაობა კონსტრუქტორის მეშვეობით**: შექმენი კლასი `RestaurantMenu`, რომელსაც კონსტრუქტორის მეშვეობით გადაეცემა `Map`-ად კერძების სახელები და მათი ფასები. დაამატე მეთოდი `getItemPrice(item)`, რომელიც დააბრუნებს შესაბამის კერძის ფასს.
// class RestaurantMenu{
//     constructor(){
//         this.dish = new Map()
//     }

//     addDish(name, price){
//         this.dish.set(name, price)
//     }

//     getItemPrice(name){
//         console.log(this.dish.get(name))
//     }
// }

// const newDish = new RestaurantMenu()

// newDish.addDish("Khinkali", 50) 
// newDish.addDish("Khachapuri", 100)
// newDish.addDish("Stake", 150)

// newDish.getItemPrice("Khinkali")
// newDish.getItemPrice("Khachapuri")
// newDish.getItemPrice("Stake")

// -------------------------------------------------------------
// 10. **Map-ის გაერთიანება კლასში და ინფორმაციის დალაგება**: შექმენი კლასი `StudentGrades`, რომელიც მიიღებს `Map`-ს სტუდენტების სახელებით და ქულებით. დაამატე მეთოდი `getTopStudent()`, რომელიც დააბრუნებს საუკეთესო ქულის მქონე სტუდენტის სახელს.
// class StudentGrades{
//     constructor(studentsMap){
//         this.studentsMap = studentsMap
//     }

//     getTopStudent() {
//         let topStudent = null;
//         let highestGrade = -Infinity

//         for (let [student, grade] of this.studentsMap.entries()) {
//             if (grade > highestGrade) {
//                 highestGrade = grade;
//                 topStudent = student;
//             }
//         }

//         console.log(topStudent)
//     }
// }

// const student = new Map([["John", 85], ["Alice", 92], ["Bob", 78], ["Diana", 95], ["Chris", 88]])
// const grades = new StudentGrades(student);
// grades.getTopStudent()

// -------------------------------------------------------------