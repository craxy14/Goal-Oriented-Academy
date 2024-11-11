// 5) შექმენით პარაგრაფი, რომლის საწყისი ტექსტი იქნება 0. მის ქვემოთ შექმენით ერთი ღილაკი, რომლის ყოველ დაკლიკებაზე counter ცვლადს ერთი მოემატება და ეს რიცხვი გახდება პარაგრაფის textcontent
// 6) შექმენით დივ ბლოკი, რომლის ზომა იქნება 400x400px. ცალკე შექმენით 5 ღილაკი - პირველს დაუწერეთ red, მეორეს blue, მესამეს pink, მეოთხეს black, მეხუთეს კი green. ღილაკების ტექსტის შესაბამისად, მათ დაკლიკებაზე უნდა იცვლებოდეს დივ ბლოკის backgroung ფერი. მაგალითად, თუ დააკლიკებთ ღილაკზე, რომელსაც უწერია green, დივ ბლოკის ფერი უნდა გახდეს მწვანე


const counter = document.getElementById("counter")
const div = document.getElementById("div")

let count = 0

function increment() {
    count ++
    counter.textContent = count
}

function pink(){
    div.style.backgroundColor = "pink"
}

function red(){
    div.style.backgroundColor = "red"
}