// const me = {
//     firstname: "vano",
//     lastname: "motiashvili",
//     age: 17
// }

// delete me.age // შლის ნებისმიერ კუთვნილებას ობიექტიდან
// console.log(me)



class Person{
    constructor(firstname,surname, age) {
        this.firstname = firstname,
        this.surname = surname,
        this.age = age
    }
    
    greet(){
        console.log(this.firstname)
    }
}

const person1 = new Person("Vano", "Motiashvili", 17)
const person2 = new Person("Nika", "Keshelava", 25)
const person3 = new Person("Luka", "Tskhvaradze", 18)

console.log(person1)
console.log(person2)
console.log(person3)