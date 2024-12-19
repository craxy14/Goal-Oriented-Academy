// console.log(Math.PI) // <-- გვიბრუნებს PI-ს მნიშვნელობას (3.141592653589793)
// console.log(Math.trunc(3.4163256)) // <-- ჩამოაჭრის წილად ნაწილს (decimal-ს მოაშორებს)
// console.log(Math.round(3.5)) // <-- ამრგვალებს უახლოეს მთელ რიცხვამდე
// console.log(Math.ceil(3.3)) // <-- ამრგვალებს ზევით უახლოეს მთელ რიცხვამდე
// console.log(Math.floor(3.8)) // <-- ამრგვალებს ქვემოთ უახლოეს მთელ რიცხვამდე
// console.log(Math.abs(-5)) // <-- იგივე მოდული |-5| (გვიბრუნებს იგივე რიცხვს დადებითად)
// console.log(Math.sign(-5)) // <-- ამოწმებს რიცხვს არის თუ არა positive(1), negative(-1), null(0)
// console.log(Math.pow(5, 2)) // <-- ხარისხში აყვანა, პირველი არგუმენტი = რიცხვი, მეორე არგუმენტი = ხარისხი
// console.log(Math.sqrt(25)) // <-- ამოიღებს რიცხვიდან კვადრატულ ფესვს
// console.log(Math.cbrt(8))  // <-- ამოიღებს რიცხვიდან კუბურ ფესვს
// console.log(Math.max(5,4,8,2,5,78)) // <-- აბრუნებს გადაცემული რიცხვებიდან ყველაზე დიდ რიცხვს (მაქსიმალურს)
// console.log(Math.min(5,4,8,2,5,78)) // <-- აბრუნებს გადაცემული რიცხვებიდან ყველაზე მცირე რიცხვს (მინიმალურს)
// console.log(Math.random()) // <-- random რიცხვი 0-დან 1-მდე
// console.log(Math.random() * 5) // <-- random რიცხვი 0-დან 5-მდე


// let d = new Date()

// D A T E  O B J E C T  F O R M A T S:
// .toString()
// .toDateString()
// .toUTCString()
// .toISOString()

// G E T  M E T H O D S:
// .getFullYear() // <-- წელი
// .getMonth() // <-- თვე
// .getDate() // <-- თარიღი
// .getSeconds() // <-- წამები
// .getDay() // <-- კვირის მერამდენე დღეა
// .getTime() // <-- გვიბრუნებს მილიწამებს 1970 წლის 1 იანვრიდან დღემდე

// console.log(`${d.getDate()}, ${d.getFullYear()}`) // <-- Costom Date Format

// d = new Date(2025, 11) // (წელი და თვე) (თვეების ათვლა იწყება 0-დან)
// d = new Date(2025, 11, 5) // (წელი, თვე, დღე)
// d = new Date(2025, 11, 5, 14) // (წელი, თვე, დღე, საათი)
// d = new Date(2025, 11, 5, 14, 56) // (წელი, თვე, დღე, საათი, წუთი)
// d = new Date(2025, 11, 5, 14, 56, 43) // (წელი, თვე, დღე, საათი, წუთი, წამი)



// setInterval() // <-- (აბრუნებს Time ობიექტს) ფუნქცია, რომელსაც გადაეცემა ორი არგუმენტი (1) = ფუნქცია, (2) = დრო (მილიწამებში), ამ ფუნქციას ასრულებს ყოველ გადაცემულ მილიწამში (1000ms = 1s)
// clearInterval() // <-- ფუნქცია, რომელიც გადაეცემა ერთი არგუმენტი (უკვე შექმნილი setInterval()) და ამ შექმნილ setInterval()-ს აჩერებს
// setTimeout() // <-- ფუნქცია, რომელსაც გადაეცემა ორი არგუმენტი (1) = ფუნქცია, (2) = დრო მილიწამებში, ეს ფუნქცია ერთჯერადად აგვიანებს გადაცემული ფუნქციის გაშვებას (Delay)

// let time = 10

// const id = setInterval(function(){
//     // const d = new Date()
//     // console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
//     console.log(time)
//     time--;

//     if(time === 0){
//         clearInterval(id)
//         console.log("Times up...")
//     }
// }, 1000)





// 1) შექმენით ინტერვალი, გადაცემულ ფუნქციაში ყოველჯერზე შექმენით Date ობიექტი, როცა ამჟამინდელი წუთი გაუტოლდება 35-ს უნდა გაითიშოს ინტერვალი
// const date = setInterval(function(){
//     const d = new Date()
//     const seconds = d.getSeconds()

//     console.log(seconds)
//     if(seconds === 35){
//         clearInterval(date)
//     }
// }, 1000)




// const elems = document.getElementsByClassName("goa")
// console.log(elems)

// elems[1].innerHTML = "Galaxy!"




// D O M  M A N I P U L A T I O N:

// const div = document.getElementById("div")
// const pArr = document.getElementsByTagName("p")

// console.log(div.parentElement) // <-- აბრუნებს ელემენტის მშობელ ელემენტს
// console.log(div.children) // <-- აბრუნებს ელემენტის შვილ ელემენტებს
// console.log(div.firstElementChild) // <-- აბრუნებს ელემენტის პირველ შვილ ელემენტს
// console.log(div.lastElementChild) // <-- აბრუნებს ელემენტის ბოლო შვილ ელემენტს
// console.log(div.previousElementSibling) // <-- აბრუნებს ელემენტის წინა დედმამიშვილ ელემენტს
// console.log(div.nextElementSibling) // <-- აბრუნებს ელემენტის შემდეგ დედმამიშვილ ელემენტს
// console.log(div.hasChildNodes()) // <-- აბრუნებს boolean მნიშვნელობას (true / false) იმ შემთხვევაში თუ ელემენტს ყავს შვილი (ტოტები) ელემენტები

// div.nextElementSibling.textContent = "Ola?"
// div.firstElementChild.textContent = "Vano"
// div.lastElementChild.textContent = "Press!"


// C R E A T E - A P P E N D  E L E M E N T:
// const textNode = document.createTextNode("Text Test") // <-- ქმნის უბრალოდ ტექსტის ტოტს
// const createP = document.createElement("p") // <-- ქმნის ნებისმიერ ელემენტს
// createP.appendChild(textNode) // <-- ამატებს შვილ ელემენტს
// div.appendChild(createP) // <-- ამატებს შვილ ელემენტს


// setTimeout(function(){
//     const btn = document.createElement("button")

//     // S A M E
//     btn.appendChild(document.createTextNode("Click Me"))
//     // S A M E
//     btn.textContent = "Click!"

//     div.appendChild(btn)
// }, 3000)

// div.removeChild(div.children[1]) // <-- შლის კონკრეტულ შვილ ელემენტს



// const imgArr = document.getElementsByTagName("img")

// for(let i = 0; i < imgArr.length; i++){
//     img = imgArr[i]
//     img.style.width = "150px"
//     img.style.borderRadius = "25px"

//     img.src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my25/s-class/s-sedan/gallery/series/gallery-class/2025-S-SEDAN-GAL-005-L-FE-DR.jpg"
// }