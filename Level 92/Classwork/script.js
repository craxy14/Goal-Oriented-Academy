const title = document.getElementById("name")
const img = document.getElementById("img")
const price = document.getElementById("price")
const div = document.getElementById("main-div")

fetch('https://fakestoreapi.com/products/1')
.then((result) =>{
    return result.json();
})
.then((res) => {
    console.log(res)
})

div.insertAdjacentHTML("afterbegin", `<p>Hello</p>`)