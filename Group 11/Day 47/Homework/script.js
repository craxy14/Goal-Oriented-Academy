let userNumber = prompt("Enter Your Number: ")

console.log(typeof(userNumber))                     //Outupts a type of a users entered value.

let convertedNumber = Number(userNumber)            //Converts the value entered by user to a Number.

console.log(typeof(convertedNumber)) 

console.log(userNumber + convertedNumber)           //String + Number == Concatination.
console.log(Number(userNumber) + convertedNumber)   //Number + Number == Math Operation.




let temp = prompt("Enter the temperature of your room: ")

    //Logical Operators
if (temp <= 0 && temp >= -15) {
    console.log("Low Temperature.")

} else if (temp <= -16 || temp >= 50) {
    console.log("Wild Temperature.")

}else {
    console.log("Good Weather.")
}