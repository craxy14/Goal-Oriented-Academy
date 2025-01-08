// 1) შექმენით ფორმა და ცხრილი, ფორმის დადასტურებიისას მონეცემები უნდა დაემატოს ცხრილში ახალი რიგის სახით, კომენტარებით ახსენით თითოეული ნაბიჯი, როცა დაასრულებთ პროტოტიპს, შემდეგ დაყავით კოდი ორ ნაწილად, კონტეინერ და წარმოსადგენ ფუნქციებად რომ გაამარტივოთ თვქენი კოდი
// const form = document.getElementById("myForm")
// const tbody = document.getElementById("tbody")

// form.addEventListener("submit", function(e){
//     e.preventDefault();

//     const data = [form.fname.value, form.lname.value, form.age.value]

//     presentation(data)
// })

// function presentation(data){
//     const tr = document.createElement("tr")

//     for(let i = 0; i < data.length; i++){
//         const td = document.createElement("td")
//         td.textContent = data[i]

//         tr.appendChild(td)
//     }
//     tbody.appendChild(tr)
// }



// 2)გექნებათ 1 ღილაკი, ღილაკზე დაწკაპებისას უნდა დაემატოს ახალი პარაგრაფი შემთხვევითი რიცხვით 0-100-მდე (body თეგში)
// const btn = document.getElementById("btn")

// btn.addEventListener("click", function(){
//     const body = btn.parentElement
    
//     const p = document.createElement("p")
//     p.textContent = Math.trunc(Math.random() * 1000)

//     body.appendChild(p)
// })




// 3)RockPaperScissors გვექნება 3 ღილაკი, როდესაც ღილაკზე დავაჭერ ხელს უნდა შეინახოს ჩემი არჩევანი და კომპიუტერმა უნდა აირჩიოს random-ით (0-3 index) შემდეგ შეადარე არჩევანი და დაითვალეთ ქულები, თუ ნიჩიაა გამოიტანე DRAW!
const div = document.getElementById("btnsDiv")

let res = document.getElementById("res")
let userScore = document.getElementById("user")
let aiScore = document.getElementById("bot")

userScore.textContent = 0
aiScore.textContent = 0

const choices = ["rock", "paper", "scissors"]

div.addEventListener("click", function(e) {
    const user = e.target.id
    const ai = choices[Math.floor(Math.random() * 3)]

    if(user === ai){
        res.textContent = "Tie"
    }
    else if(user == "rock" && ai == "scissors"){
        res.textContent = "You Win!"
        userScore.textContent++;

    }else if(user == "rock" && ai == "paper"){
        res.textContent = "AI Won!"
        aiScore.textContent++;

    }else if(ai == "rock" && user == "paper"){
        res.textContent = "You Win!"
        userScore.textContent++;

    }else if(ai == "rock" && user == "scissors"){
        res.textContent = "AI Won!"
        aiScore.textContent++;

    }else if(user == "scissors" && ai == "scissors"){
        res.textContent = "You Win!"
        userScore.textContent++;

    }else if(ai == "scissors" && user == "paper"){
        res.textContent == "AI Won!"
        aiScore.textContent++;
    }

    console.log(`User: ${user}`)
    console.log(`AI: ${ai}`)
})