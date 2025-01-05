// შექმენით ელექტრონული მაღაზია სადაც იქნება პროდუქტების სექცია მოცემული, გექნებათ ღილაკი add to cart, როდესაც ღილაკზე დავაწკაპებთ ხელს, უნდა გვქონდეს კალათის სექცია...
const cartDiv = document.getElementById("cart")
const btn = document.getElementsByClassName("cartBtn")
const cartArr = []

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function(e){
        let parent = btn[i].parentElement

        const itemP = parent.firstElementChild.id
        const itemImage = parent.children[1].src


        const div = document.createElement("div")

        const itemPCart = document.createElement("p")
        itemPCart.textContent = itemP
        const itemImgCart = document.createElement("img")
        itemImgCart.src = itemImage

        
        div.appendChild(itemPCart)
        div.appendChild(itemImgCart)
        
        cartDiv.appendChild(div)
        cartDiv.appendChild(div)
        

        cartArr.push(itemP)
        console.log(cartDiv)
        console.log(cartArr)
    })
}






// შექმენით მასივი სადაც გექნებათ 3 ობიქტი (product 1, product 2, product 3), გადაუარეთ ამ მასივს და შექმენით ელემენტები, რომელსაც დაამატებთ ვებ გვერდზე
const productsDiv2 = document.getElementById("productsDiv2")

const arr = [
    {id: 1, name: "product 1"},
    {id: 2, name: "product 2"},
    {id: 3, name: "product 3"}
]

for(let i = 0; i < arr.length; i++){
    productsDiv2.innerHTML += `
    <div>
        <p>${arr[i].name}</p>
        <p>${arr[i].id}</p>
    </div>
    `
}