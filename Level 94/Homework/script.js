const title = document.getElementById("name")
const img = document.getElementById("img")
const price = document.getElementById("price")

fetch('https://fakestoreapi.com/products/1')
    .then((result) =>{
        return result.json();
    })
    .then((res) => {
        console.log(res)
        title.innerHTML = res.title
        img.style.backgroundImage = `url(${res.image})`
        price.innerHTML = ("$"+res.price)
    })
