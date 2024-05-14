document.getElementById("")


const userChoice = document.getElementById("choices")
const choices = ["Rock" , "Paper" , "Scissors"]
const rockChoice = document.getElementById("rock")
const paperChoice = document.getElementById("paper")
const scissorsChoice = document.getElementById("scissors")

document.getElementById("btn").addEventListener("click" , function(game){
   
    const aiChoice = choices[Math.floor(Math.random() * 3)];
    console.log(aiChoice)
    document.getElementById("ai").textContent = ("AI Chose: " + aiChoice)

})