let count = document.getElementById("count")
const btn = document.getElementById("btn")

let count1 = 0

btn.addEventListener("click", () => {
    count.textContent = count1 ++ 
})