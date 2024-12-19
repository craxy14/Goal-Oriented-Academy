const box = document.getElementById("box")

// let positon = 0;
// let direction = 1;


// function boxAnimation(){
//     positon += direction

//     if(positon >= 150){
//         direction = -1

//     }else if(positon <= 0){
//         direction = 0
//     }

//     box.style.left = positon + "px"
// }

// setInterval(boxAnimation, 20)


// 1) შექმენით ანიმაცია სადაც ყუთი ჯერ წავა მარჯვნივ, შემდეგ დაიწყოს ქვემოთ ჩამოსვლა, მერე მარცხნივ და ბოლოს საწყის წერტილს დაუბრუნდეს
// let positonX = 0;
// let positonY = 0;
// let direction = "right";


// function boxAnimation() {
//     if (direction === "right") {
//         positonX++;
//         if (positonX == 150) {
//             direction = "bottom";
//         }
//     } else if (direction === "bottom") {
//         positonY++;
//         if (positonY == 150) {
//             direction = "left";
//         }
//     } else if (direction === "left") {
//         positonX--;
//         if (positonX <= 0) {
//             direction = "top";
//         }
//     } else if (direction === "top") {
//         positonY--;
//         if (positonY <= 0) {
//             direction = "right"
//         }
//     }

//     box.style.left = positonX + "px";
//     box.style.top = positonY + "px";
// }

// setInterval(boxAnimation, 10);








const form = document.getElementById("myForm")
const dataBase = []

form.addEventListener("submit",function(e){
    e.preventDefault();
    const password = form.password.value
    
    let containsSpecialChar = false
    let containsUpperCase = false
    let containsDigit = false

    for(let i = 0; i < password.length; i++){
        if(password.charCodeAt(i) >= 32 && password.charCodeAt(i) <= 47){
            containsSpecialChar = true
        }

        if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90){
            containsUpperCase = true
        }

        if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
            containsDigit = true
        }
    }

    if(!containsSpecialChar || !containsUpperCase || !containsDigit){
        alert("Password must contain at least one Special Symbol, one Uppercase Character and one Digit!")
        return;
    }
    dataBase.push(password)
    console.log(dataBase)
})
