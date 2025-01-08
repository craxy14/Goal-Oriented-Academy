// // document.write("<button>Hello</button>") <--- HTML დოკუმენტში წერს გადაცემულ მნიშვნელობას და გამოაქვს საიტზე

// //მასივის კონსტრუქტორი // Array Constructor
// const arr1 = new Array(5)
// arr1[0] = "vano"
// console.log(arr1)

// // მასივის ლიტერალი // Array Literal (როდესაც ჩვენი ხელით ვქმნით მასივს)
// const arr2 = ["vano", "nika"]


// // Array Properties - მასივის კუთვნილებები: 
// // .length <-- გვიბრუნებს მასივის სიგრძეს
// const arr3 = ["vano", "nika", "luka"]
// console.log(arr3.length) // <-- (3) რადგან "arr3"-ში შიგნით არის 3 ელემენტი


// // a1.concat(a2) <-- აერთიანებს პირველ მასივს მეორე მასივთან (აბრუნებს ახალ მასივს)
// const a1 = [5,6,7]
// const a2 = ["vano", "nika"]
// const concatArr = a1.concat(a2)

// console.log(concatArr)


// // Asociative Arrays // ასოციაციური მასივები (როდესაც ელემენტს ინდექსის ნაცვლად ვანიჭებთ ჩვენს costom კუთვნილებას)
// const assocArr = ["vano", "giorgi"]
// assocArr["admin"] = "vano"

// console.log(assocArr)
// console.log(assocArr["admin"])


// // Array Methods:
// const arr = ["nika", "vano", "luka"]
// arr.push("value") // <-- სიის ბოლოში ამატებს ელემენტს 
// arr.pop() // <-- აგდებს სიის ბოლო ელემენტს

// arr.shift() // <-- შლის სიის პირველ ელემენტს
// arr.unshift("giorgi") // <-- კონკრეტული ელემენტი ემატება სიის თავში

// // იგივე slicing (სიიდან რაღაც ნაწილის ამოღება)
// arr.slice(0,3) // <-- არ ცვლის ორიგინალ მასივს - აბრუნებს ახალ სიას (გადაეცემა startIndex, stopIndex, Step)

// arr.splice(0,2) // <-- შლის სიის რაღაც ნაწილს, ცვლის ორიგინალ მასივს (გადაეცემა startIndex, stopIndex)

// arr.reverse() // <-- აბრუნებს მთლიან მასივს

// arr.indexOf("giorgi", 2) // <-- აბრუნებს მასივში კონკრეტული ელემენტის ინდექს (თუ ვერ იპოვა დააბრუნებს -1) (გადაეცემა ორი არგუმენტი, პირველი არის რომელი ელემენტი ეძებოს --> "giorgi" და მეორე არის რომელი ინდექსიდან დაიწყოს ძებნა --> 2)

// arr.lastIndexOf("nika") // <-- აბრუნებს მასივში ბოლო კონკრეტული ელემენტის ინდექსს, მაგალითად: arr = ["giorgi", "nika", "vano", "nika", "dato"].lastIndexOf("nika") დააბრუნებს 3, რადან ბოლო ინდექსი სადაც გადაცემული მნიშვნელობა "nika" შეხვდა, იყო 3-ე ინდექსი

// arr.includes("keso") // <-- ამოწმებს შეიცავს თუ არა მასივი, კონკრეტულ მნიშვნელობას (აბრუნებს boolean მნიშვნელობას <-- true / false)

// console.log(arr)



// sort ფუნქცია <-- a - b ალაგებს რიცხვების მასივს ზრდადობის მიხედვით
// const arr = [3,6,8,15,2,5,9,1,23]
// console.log(arr.sort(function(a,b){
//     return a - b
// }))

// b - a ალაგებს რიცხვების მასივს კლებადობის მიხედვით
// console.log(arr.sort(function(a,b){
//     return b - a
// }))




// 4)შექმენით ფუნქცია manualIndexOf, რომელსაც გადაეცემა მნიშვნელობა და სია, თქვენი დავალებაა ფუნქციიდან დააბრუნოთ ნაპოვნი მნიშვნელობის ინდექსი, თუ გადმოცემული მნიშვნელობა სიაში არ მოიძებნა, დააბრუნეთ -1
const manualIndexOf = function(value, arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == value){
            return i
        }
    }
    return -1
}
console.log(manualIndexOf("vano", ["giorgi", "nika", "vano", "dato"]))

// 5)შექმენით ფუქნცია სახელად manualReverese, რომელსაც გადაეცემა სია და უნდა დააბრუნოთ შემოტრიალებული ვერსია სიის
const manualReverse = function(arr){
    const res = []
    for(let i = arr.length - 1; i >= 0; i--){
        res.push(arr[i])
    }
    return res
}
console.log(manualReverse(["vano", "dato", "nika"]))

// 6)შექმენით ფუნქცია სახელად manualSlice, რომელსაც გადაეცემა მასივი და ორი რიცხვი (startIndex, stopIndex) თქვენი დავალებაა გადმოცემული ინდექსიდან, მეორე ინდექსამდე ჩამოაწრათ სიას მასივი და დააბრუნოთ ფუნქციიდან, გამოიყენეთ for ციკლი
const manualSlice = function(arr, start, stop){
    const res = []
    for(let i = 0; i < arr.length; i++){
        if (i >= start && i < stop){
            res.push(arr[i])
        }
    }
    return res
}
console.log(manualSlice(["nika", "giorgi", "dato", "vano", "keso", "demetre"], 1, 4))


// 7)შექმენით ფუნქცია სახელად manualFilter რომელსაც პირველი გადაეცემა ფუნქცია და მეორე მასივი, ამ ფუნქციაში უნდა გამოიყენოთ for ციკლი და გადაუარეთ გადმოცემულ მასივს, გამოიყენეთ if და გამოიძახეთ გადმოცემული ფუნქცია ამჟამინდელ ინდექსზე მდგომი მნიშნელობით, თუ დაბრუნებული მნიშნელობა არის true დაამატეთ ახალ მასივში და თუ არის false არ დაამატოთ ახალ მასივში, როცა მორჩება for ციკლის მუშაობა დააბრუნეთ ახალი მასივი, გადაცემული ფუნქციიდან აუცილებლად უნდა ბრუნდებოეს boolean მნიშვნელობა, და უნდა იღებდეს ერთ მნიშნელობას გადაცემულ ფუნქციაში რას შეამოწმებთ თქვენზეა დამოკიდებული
const manualFilter = function(func, arr){
    const res = []

    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            res.push(arr[i])
        }
    }
    return res
}

const test = manualFilter(function(num){
    return num % 2 == 0
},[5,2,8,1,4,2,3,5,9,10])

console.log(test)
