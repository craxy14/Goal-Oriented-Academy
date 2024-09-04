// const numbers = [1 , 2 , 3 , 4 , 5]
// console.log(...numbers)


const person = {
    name: "Vano",
    surname: "Motiashvili",
    printInfo() {
        console.log(this.name, this.surname)
    }
}

// person.printInfo()

const personTwo = Object.assign({name: "Luka" , age: 15 , surname: "sazamtro"}, person)
console.log(personTwo)