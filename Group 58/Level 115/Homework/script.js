// 3) შექმენით ერთი ფუნქცია findMax რომელიც არგუმენტად იღებს რიცხვებს, rest operator - ის გამოყენებით იპოვეთ ამ რიცხვებს შორის ყველაზე დიდი რიცხვი
const findMax = (...numbers) => {
    return Math.max(...numbers)
}

console.log(findMax(1,2,3,14,4,5,6));

// 4) შექმენით ორი მასივი რომელმაც უნდა გააერთიანოს ორივე მასივის მნიშვნელობები ახალ ცარიელ მასივში, გამოიყენეთ spread operator - ი ამ დავალების შესასრულებლად 
const array1 = [1,2,3,4,5,6,7,8,9,10];
const array2 = [11,12,13,14,15,16,17,18,19,20];
const joinedArray = [...array1,...array2];
console.log(joinedArray);

// 5) შექმენით user obj, ობიექტი სადაც უნდა შეინახოთ მომხმარებლის სახელი გვარი და ასაკი დესტრუქციის გამოყენებით უნდა ამოიღოთ ამ მომხმარებლის 
// სახელი,ასაკი და გამოიტანოთ console - ში
const user = {
    name:'vano',
    lastname:'motiashvili',
    age:17
}

const {name,age} = user;
console.log(name,age)

// 6) შექმენით ობიექტი რომელსაც მიანიჭებთ თქვენ სახელს,გვარს,ასაკს და თქვენ hobby - ის,
// თქვენი დავალებაა, რომ spread ოპერატორის გამოყენებით ამოიღოთ მხოლოდ თქვენი სახელი და hobby - ი ხოლო დანარჩენი კუთვნილებების მნიშვნელობები 
// უნდა დატოვოთ ჩვეულებრივად
const myObj = {
    name1:'vano',
    lastname:'motiashvili',
    age: 17,
    hobby:'mma'
}

const {name1,hobby, ...myObjInfo} = myObj;
console.log(name1);
console.log(hobby);
console.log(myObjInfo);