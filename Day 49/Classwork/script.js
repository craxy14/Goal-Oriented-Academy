// me = {
//     name: "vano",
//     surname: "motiashvili",
//     age: 16,

//     changeAge: function(){
//         console.log("Old age =" , me.age)
//         me.age = prompt("Enter new age: ")
//         console.log("New age =" , me.age)
//     },

//     hobbies: {
//         wrestling: true,
//         gym: true,
//         eating: true
//     }
// }

// me.changeAge()
// console.log(me)


// //Creating primitive variables: 

// myName = "Vano"
// age = 16
// height = 186.5
// isFat = true


// myName2 = myName
// console.log(myName2)


// //(მესამე დავალებას ვერმივხვდი ლუკა ესიგულისხმე თუ არა არვიცი...)


function Person(age , height , weight){
    this.age = age,
    this.height = height,
    this.weight = weight,

    this.output = function(){
        console.log(this.age , this.height , this.weight)
    }
}

const me = new Person(16 , 186 , 85)
me.output()