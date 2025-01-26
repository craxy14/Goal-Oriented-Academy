// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve("Done!") },2000)
// })

// newPromise
//     .then((result) => {console.log("Fullfiled:", result)})
//     .catch((result) => {console.log("Rejected:", result)})
//     .finally(() => {console.log("Promise execution completed!")})

// -------------------------------------------------------------
// 1) ამ მისამართზე გააგზავნეთ მოთხოვნა  fetch ფუნქციის დახმარებით, ახსენით რას აკეთებს ეს ფუნქცია, შემდეგ დაბეჭდეთ პირდაპირ დაბრუნებული დაპირება კონსოლში, ახსენით რა არის დაპირება რეალური ცხვორების მაგალითიდ, როცა დაპირება დამყარდება გამოიყენეთ then და  catch ფუნქციები და ახსენით მათი დანიშნულება, აგრეთვე ახსენით რა არის  json და რატომ არის json მეთოდი ასინქრონიზირებული
// 'https://jsonplaceholder.typicode.com/todos'

// რატომ json ფორმატი? - json ფორმატი გამოიყენება კომპიუტერებს შორის ინფორმაციის გასაცვლელად, ამ ფორმატს იმიტომ ვიყებთ, რომ წასაკითხად ბევრად უფრო მარტივია (სინტაქსი), გავს დაახლოებით ობიექტს, და json ფორმატი გვაძლევს საშუალებას რომ მონაცემები შედარებით უფრო სწრაფად გავცვალოთ კომპიუტერებს შორის.

const div = document.getElementById("div")
const placeholderPromise = fetch("https://jsonplaceholder.typicode.com/todos") // fetch ფუნქცია აგზავნის მოთხოვნას მითითებულ მისამართზე ("კომპიუტერთან") და გვიბრუნდება დაპირება, თუ წარმატებით წამოვიღეთ მონაცემები = fullfiled, თუ ჯერ ველოდებით შედეგს = pending, ხოლო თუ ვერ წამოვიღეთ მონაცემები = rejected.
console.log(placeholderPromise)


const renderResult = (arr) => {
    div.innerHTML = ""

    for(let i of arr) {
        div.innerHTML += `
        <div>
            <h2>Title: ${i.title}</h2>
            <p>UserID: ${i.userId}</p>
            <p>Completed: ${i.completed}</p>
        </div>
        `
    }
}


placeholderPromise
    .then((data) => data.json()) // .then მეთოდი გაეშვება იმ შემთხვევაში თუ წარმატებით წამოვიღეთ მონაცემები (promiseState = fullfiled), ამ კონკრეტულ შემთხვევაში ვიყენებთ .json() მეთოდის, რომლის გამოყენებითაც წამოღებულ მონაცემს გარდავქმნით json ფორმატიდა, ნამდვილ ობიექტად (საბოლოოდ გვიბრუნდება promise (თუ წარმატებით გარდავქმენით = fullfiled...)) .then არის ასინქრონიზირებული ფუნქცია, აქედან გამომდინარე მას ჭირდება დრო.
        .then(renderResult) // ისევ ვიყენებთ .then მეთოდს, რათა წარმატებით json-იდან ნამდვილი ობიექტის ფორმატში გარდაქმნილი მონაცემები გამოვიტანოთ კონსოლში.

// -------------------------------------------------------------