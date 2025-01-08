// 1.Create a Class with Public Properties
// Define a Car class with public properties make and model. Create an instance and access these properties.
// class Car{
//     constructor(make, model){
//         this.make = make
//         this.model = model
//     }
// }
// const newCar = new Car("Mercedes", "E63 AMG")
// console.log(newCar)

// -------------------------------------------------------------
// 2.Use Private Properties
// Define a BankAccount class where balance is a private property. Implement a public method to deposit and withdraw money from the account.
// class BankAccount {
//     #balance;

//     constructor(balance) {
//         this.#balance = balance;
//     }

//     set depositWithdraw(value) {
//         this.#balance += value;
//     }

//     get getBalance() {
//         return this.#balance;
//     }
// }

// let newAcc = new BankAccount(500);
// newAcc.depositWithdraw = -50;
// console.log(newAcc.getBalance);  

// -------------------------------------------------------------
// 3.Static Methods and Properties
// Create a MathOperations class with a static method add() that adds two numbers. Also, define a static property PI representing the value of Pi.
// class MathOperations{
//     constructor(num1, num2){
//         this.num1 = num1
//         this.num2 = num2
//     }

//     static add(first, second){
//         return first + second
//     }

//     static get PI(){
//         return Math.PI
//     }
// }

// const newNums = new MathOperations(20, 30)

// console.log(MathOperations.PI)
// console.log(MathOperations.add(5, 10))

// -------------------------------------------------------------
// 4.Use Getters and Setters
// Define a Rectangle class with properties width and height. Use a getter to calculate and return the area of the rectangle. Also, include a setter that ensures width and height are always positive numbers.
// class Rectangle{
//     constructor(width, height){
//         this.width = width
//         this.height = height
//     }

//     get area(){
//         return this.width * this.height
//     }

//     set _width(value){
//         if(value >= 0){
//             this.width = value
//         }else{
//             console.log("Width must be positive number!")
//         }
//     }

//     set _height(value){
//         if(value >= 0){
//             this.height = value
//         }else{
//             console.log("Height must be positive number!")
//         }
//     }
// }
// let newRectangle = new Rectangle(5, 10)
// newRectangle._width = 10
// newRectangle._height = 20
// console.log(newRectangle)
// console.log(newRectangle.area)

// -------------------------------------------------------------
// 5.Private Methods
// Create a User class where a private method validatePassword() checks the strength of the password. The method should only be used internally when setting a password.
// class User{
//     #password

//     constructor(password){
//         this.#password = password
//     }

//     get getPass(){
//         return this.#password
//     }

//     #validatePassword(value){
//         return value.length >= 8
//     }

//     set setPassword(value){
//         if(this.#validatePassword(value)){
//             this.#password = value;
//         }else{
//             console.log("Weak Password!")
//         }
//     }
// }

// const newAcc = new User("vano123")
// newAcc.setPassword = "TEST!141414"
// console.log(newAcc)

// -------------------------------------------------------------
// 6.Private Properties with Getters and Setters
// Define a Book class where the title is public, but the number of pages is private. Implement getters and setters to access and modify the number of pages.
// class Book{
//     #pages
//     constructor(title, pages){
//         this.title = title
//         this.#pages = pages
//     }

//     get getTitle(){
//         return this.title
//     }

//     get getPages(){
//         return this.#pages
//     }

//     set setTitle(value){
//         this.title = value
//     }

//     set setPages(value){
//         this.#pages = value
//     }
// }

// const newBook = new Book("Harry Potter", 450)
// console.log(newBook.getTitle)
// console.log(newBook.getPages)

// newBook.setTitle = "Book of Eli"
// newBook.setPages = 250

// console.log(newBook.getTitle)
// console.log(newBook.getPages)

// -------------------------------------------------------------
// 7.Static Method for Instance Counting
// Create a Player class where each time an instance is created, a static method getPlayerCount() keeps track of how many players have been created.
// class Player {
//     static #count = 0

//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//         Player.incrementPlayerCount();
//     }

//     static incrementPlayerCount() {
//         return Player.#count += 1;
//     }

//     static get getPlayerCount() {
//         return Player.#count;
//     }
// }

// const newPlayer1 = new Player("Vano", "Motiashvili")
// console.log(Player.getPlayerCount);

// const newPlayer2 = new Player("Vano", "Motiashvili")
// console.log(Player.getPlayerCount);

// const newPlayer3 = new Player("Vano", "Motiashvili")
// console.log(Player.getPlayerCount);

// -------------------------------------------------------------
// 8.Class Inheritance with Private Properties
// Create a Vehicle class with private properties like speed. Then, create a Bike subclass that can access public methods to modify or retrieve the speed.
// class Vehicle{
//     #speed
//     constructor(speed){
//         this.#speed = speed
//     }

//     get _speed(){
//         return this.#speed
//     }

//     set setSpeed(value){
//         this.#speed = value
//     }


// }

// class Bike extends Vehicle{
//     constructor(speed){
//         super(speed)
//     }
// }

// const newBike = new Vehicle(85)
// console.log(newBike._speed)
// console.log(newBike.setSpeed = 50)
// console.log(newBike)

// -------------------------------------------------------------
// 9.Static Method for Comparison
// Define a Student class with a static method compareGrades(student1, student2) that compares the grades of two student instances.
// class Student {
//     constructor(grade) {
//         this.grade = grade;
//     }

//     static compareGrades(student1, student2) {
//         if (student1.grade > student2.grade) {
//             return `Student 1 grade: ${student1.grade} is higher than Student 2 grade: ${student2.grade}`;
//         } else if (student1.grade < student2.grade) {
//             return `Student 1 grade: ${student1.grade} is lower than Student 2 grade: ${student2.grade}`;
//         } else {
//             return `Both have the same grade: ${student1.grade}`;
//         }
//     }
// }

// const student1 = new Student(50);
// const student2 = new Student(50);

// console.log(Student.compareGrades(student1, student2));

// -------------------------------------------------------------