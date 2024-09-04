// 1. Define a class called Person with properties like name, age, and gender.
// class Person {
//     constructor(name, surname){
//         this.name = name
//         this.surname = surname
//     }
// }

// const user1 = new Person("vano", "motiashvili")
// console.log(user1)



// 2. Create an object, using the Person class and assign it to a variable.
// class Person {
//     constructor(name, surname){
//         this.name = name
//         this.surname = surname
//     }
// }

// const user1 = new Person("vano", "motiashvili")
// console.log(user1)



// 3. Add methods to the Person class such as greet() to log a greeting.
// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     greet() {
//         return `Hello, ${this.name} ${this.surname}.`;
//     }
// }

// const user1 = new Person("vano", "motiashvili");
// console.log(user1.greet())



// 4. Access and log the properties of an object created in task2.
// class Person {
//     constructor(name, surname){
//         this.name = name
//         this.surname = surname
//     }
// }

// const user1 = new Person("vano", "motiashvili")
// console.log(user1["name"])



// 5. Update the values of class properties in a new object.
// class Person {
//     constructor(name, surname){
//         this.name = name
//         this.surname = surname
//     }
// }

// const user1 = new Person("test", "test")
// console.log(user1)

// user1["name"] = "Luka"
// user1["surname"] = "Tskhvaradze"
// console.log(user1)




// 6. Create multiple objects, using the Person class and assign them to variables
// class Person {
//     constructor(name, surname){
//         this.name = name
//         this.surname = surname
//     }
// }

// const user1 = new Person("vano", "motiashvili")
// const user2 = new Person("luka", "tskhvaradze")
// const user3 = new Person("nika", "keshelava")

// console.log(user1)
// console.log(user2)
// console.log(user3)



// 7. Define a getter method in a class that returns a specific property value.
// class Person {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//     }

//     get userAge() {
//         return this.age;
//     }
// }

// const user1 = new Person("vano", "motiashvili", 17)

// console.log(user1.userAge)



// 8. Use a getter method to create a computed property that generates its value based on certain conditions or calculations.
// class Person {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//     }

//     get userAge() {
//         return this.age >= 18? this.age : "Illegal"
//     }
// }

// const user1 = new Person("vano", "motiashvili", 18)
// console.log(user1.userAge)


// 9. Define a setter method in a class that sets the value of a specific property.
// 10. Define a private property inside a class using the # prefix.