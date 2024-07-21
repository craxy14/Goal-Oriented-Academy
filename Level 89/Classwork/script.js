const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
}



const promise = new Promise((resolve, reject) => {
    if(inventory.sunglasses > 0) resolve("Successfull")
    else reject("Failed")
})

console.log(promise)