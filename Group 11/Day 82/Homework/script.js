// 3) შექმენით ფუნქცია რომელსაც გადაეცემა 2 რიცხვი, start - end, თქვენი მოვალეობაა ამ რიცხვებს შორის ყველა რიცხვის გაგება და მასივში შეტანა, საბოლოოდ დააბრუნეთ მასივი
const startStop = function(start, stop){
    const resultArr = []

    for(let i = start; i <= stop; i++){
        resultArr.push(i)
    }
    return resultArr
}
const numbersArr = startStop(1, 30)

// 4) დაბრუნებული მასივი გადაეცით ფუნქციას რომელსაც დაარქმევთ calculateAverage ამ ფუნქციაში გამოითვლით იმ რიცხვების საშუალოს რომელიც მოთავსებულია სიაში, მიღებული საშულა დააბრუნეთ ფუნქციიდან
const calculateAverage = function(arr){
    let sum = 0

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    return sum / arr.length
}
console.log(calculateAverage(numbersArr))



// 5) შექმენით form სადაც გექნებათ 3 შესატანი ველი, სახელი, ემაილი და პაროლი, თქვენი დავალეება როდესაც ფორმა დადასტურდება წამოიღთ ჯავასკრიპტში დადასტურებული მნიშნელობები ინპუთებიდან, შექმენით მასივი სახელად dataBase  ხოლო ყოველი დადასტურებული ინფორმაცია შეინახეთ ამ მასივში ობიექტის სახით, დააუმატეთ უსაფრთხოების ფუნქციონალი სადაც გამოიყენებთ for ციკლს, სანამ დაემატება მასივში ობიექტი იქამდე შეამოწმეთ არსებობს თუ არა ისეთი ობიექტი მასივში რომელიც ტოლია ახლად დადასტურებული ფორმის ემაილის, თუ ტოლია ალერტით გამოუტანეთ რომ ექაუნთი არსებობს, თუ არაა ტოლი მაშინ ალერტით გამოუტანეთ რომ ექაუნთი წარმატებით შექიმნა

const form = document.getElementById("myForm")
const btn = document.getElementById("btn")

dataBase = []

btn.addEventListener("click", function(){
    const name = form.elements.name.value
    const email = form.elements.email.value
    const password = form.elements.password.value
    let accountExists = false

    const acc = {
        name: name,
        email: email,
        password: password,
    }

    for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].name === acc.name && dataBase[i].email === acc.email && dataBase[i].password === acc.password) {
            accountExists = true
            break
        }
    }

    if(accountExists){
        alert("Account already exists!");
    }else{
        dataBase.push(acc);
        alert("Sucessfully created account!");
    }

    console.log(dataBase)
})