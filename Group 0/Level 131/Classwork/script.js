const list = document.getElementById("list")
const res = document.getElementById("result-div")

const home = `
<h1>Home Page!</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, beatae.</p>
<img src="https://img.freepik.com/premium-vector/isolated-home-vector-illustration_1076263-25.jpg">
`
const about = `
<h1>About Page!</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, beatae.</p>
<img src="https://www.themarketingsage.com/wp-content/uploads/2015/08/about-me-leon-severan-we-buy-houses.jpg">
`
const contact = `
<h1>Contact Page!</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, beatae.</p>
<img src="https://www.shutterstock.com/image-photo/dog-on-phone-talking-calling-600nw-117492673.jpg">
`

list.addEventListener("click", function(e){
    const page = e.target.textContent

    if(page === "Home"){
        res.innerHTML = home
    }else if(page === "About"){
        res.innerHTML = about
    }else{
        res.innerHTML = contact
    }
})