// const d = new Date()


// console.log(d.getFullYear())        //წელი
// console.log(d.getMonth())           //თვე (0 , 11)
// console.log(d.getDate())           //დღე (1 , 31)



// const b = new Date()

// b.setMonth(1)       //ცვლის b თვეს.
// b.setFullYear(2019)       //ცვლის b წელს.
// b.setDate(6)       //ცვლის b დღეს.



// console.log(b)


// let seconds = 0
// let minutes = 0
// let hours = 0

// // const d = new Date()


// const timer = setInterval(function(){
//     seconds ++
//     if (seconds == 5) {
//         minutes++
//     }
//     if (minutes == 10) {
//         hours++
//     }
//     console.log(seconds , minutes , hours)

// },1000)





// const timer = setInterval(function(){

//     const d = new Date()
//     console.log(d)

// },1000)





// let seconds = 60
// let minutes = 5


// const timer = setInterval(function(){
//     seconds--
    
//     if (seconds == 0) {
//         minutes--
//         seconds = 60
//     }
//     if (minutes == 0) {
//         clearInterval(timer)
//     }

//     console.log(seconds , minutes)
// },1000)


// function printTime() {
//     var d = new Date();
//     var hours = d.getHours();
//     var mins = d.getMinutes();
//     var secs = d.getSeconds();
//     console.log(hours+":"+mins+":"+secs);
//   }
//   setInterval(printTime, 1000)




// const randomPass = function(passLength){
//     const allChar = '!"#$%&()+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

//     let result = '';

//     for(let i = 0; i < passLength; i++){
//         result += allChar[Math.floor(Math.random() allChar.length)]
//     }

//     return result;
// }


// const newPass = randomPass(5);

// console.log(newPass);



let p = document.getElementById("p")
let btn = document.getElementById("btn")

let count = 0

btn.addEventListener("click" , function(){
    count += 1;
    p.innerHTML = count;
})