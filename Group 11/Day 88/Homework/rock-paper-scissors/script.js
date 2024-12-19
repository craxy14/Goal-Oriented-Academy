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