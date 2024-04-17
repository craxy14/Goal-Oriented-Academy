
//1

// let person = {
//   name: "vano",
//   lastName: "motiashvili",
//   greet: () =>{
//     console.log("Hellooo");
//   },
//   clothes: {
//     tshirt: "green",
//     pants: "black",
//     shoes: "blue"
//   }
// }

// console.log(person.greet());



// //2
// let y = 20;
// let z = y;

// //3
// let a = "FERRARI"
// console.log(a);
// a = person.name
// console.log(a);





//MOST RACIST COMPANY EVER
// function Person(name, age, color, job){
//   this.name = name
//   this.age = age
//   this.color = age
//   this.job = job
// }

// let employee = new Person("mate","32","white", "manager")
// let employee1 = new Person("josh", "16", "black", "cleaner")
// let employee2 = new Person("nika", "22", "white", "programmer")
// let employee3 = new Person("ahmed", "15", "black", "cotton supplier")



function Flight(flightId, flightStatus){
    this.flightId =  flightId
    this.flightStatus = flightStatus
  }
  
  let flight1 = new Flight("1012321", "flying")
  let flight2 = new Flight("1044421", "landed")
  let flight3 = new Flight("10152321", "taking off")
  
  console.log(flight1);
  console.log(flight2);
  console.log(flight3);