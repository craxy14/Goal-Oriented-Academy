// 2)როგორ მუშაობს stack და heap
// Stack - მონაცემთა სტრუქტურა (სტატიკური / პრიმიტიული მონაცემებისთვის / primitive data (str / int / float / bool)
// ინახავს ისეთ მონაცემებს, რომლებსაც თავიდანვე განსაზღვრული აქვთ მოცულობა (ზომა) (bit / bytes)

// Heap - მონაცემთა სტრუქტურა არა პრიმიტიული (რთული) მონაცემებისთვის (მასივები, ობიექტები...)
// მაგ: 
// const me = {
//     name: "vano",
//     surname: "motiashvili"
// }
// ეს ობიექტი შეინახება stack-ში როგორც "me" ხოლო heap-ში როგორც თვითონ ობიექტის კუთვნილებები და მნიშვნელობები {}, stack-ში შენახული "me" შეინახავს მხოლოდ heap-ში შენახული ობიექტის მისამართს, სიტყვაზე f145x6126... არის ამ ობიქტის მისამართი, ანუ stack-ში "me" ინახავს f145x6126 /// თუ მოვინდომებთ ამ ობიექტის დაკოპირებას, სიტყვაზე const person = me, მაშინ stack-ში დაემატება "person" და შეინახავს იგივე მისამართს --> აქამდე შემქნილი ობიექტის (ამ გზით ობიექტის დაკოპირება არ გამოგვივა...)


// 3)შექმენით ობიექტის კონსტრუქტორი რომელსაც გადაეცემა 4 მნიშვნელობა (თქვენი სურვილით აარჩიეთ თუ რა ტიპის ობიექტს შექმნის კონსტრუქტორი)
function Person(firstname, lastname, age, role) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.role = role
}

const me = new Person("Vano", "Motiashvili", 17, "Mentor")
const p1 = new Person("Luka", "Tskhvaradze", 17, "Mentor")
const p2 = new Person("Nika", "Keshelava", 24, "CEO")

console.log(me)
console.log(p1)
console.log(p2)