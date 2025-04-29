// 1) შექმენით კლასი სახელად Phone, ამ კლასის კონსტრუქტორს გადაეცით 3 არგუმენტი, name, color storage, ტელეფონის სახელი ფერი და მეხსიერების
//  მოცულობა, შემდეგ გამოიყენეთ ეს კლასი რომ შექმნათ 3 სხვადასხვა ტელეფონი (მინიშნება არ დაგავიწყდეთ new გამოყენება)

class Phone{
    constructor(name,color,storage){
        this.name = name;
        this.color = color;
        this.storage = storage;
    }
}

const phone1 = new Phone('Iphone','white','120 GB');
const phone2 = new Phone('Iphone','Black','64 GB');
const phone3 = new Phone('Iphone','Gray','120 GB');

console.log(phone1);
console.log(phone2);
console.log(phone3);

//2) შექმენით კლასი სახელად User , ამ კლასის კონსტრუქტორს უნდა გადავცეთ 3 მნიშვნელობა, email, password და username, დამატეთ ეს მნიშვნელობები ობიექტში, 
// შემდეგ შექმენით საერთო მეთოდი სახელად introduce() რომელიც კონკრეტული ობიექტის იმეილს და უსერნეიმს დაბეჭდავს, ახსენით კომენტარებთ რა არის კლასი, 
// კონსტრუქტორი და პროტორიპი, ყველაზე კარგად დაუფიქრდით პროტოტიპს, შემდეგ შექმენით კონკრუტელუ კლასით 3 სხვადასხვა მომხმარებელი და
//  3 ვე დაბეჭდეთ კონსოლში და შეამოწმეთ რისგან შედგება ობიექტი

class User{
    constructor(email,password,username){
        this.email = email;
        this.password = password;
        this.username = username;
    }

    introduce(){
        console.log(this.email,this.username)
    }
}

const user1 =  new User('test1@gmail.com','123.','vano');
const user2 = new User('test2@gmail.com','321','nika');
const user3 = new User('test3@gmail.com','213','giorgi');

user1.introduce();
user2.introduce();
user3.introduce();

class User1{
    constructor(email,password,username){
        this._email = email;
        this._password = password;
        this.username = username;
    }

    get email(){
        return this._email
    }

    set password(pass) {
        if (pass.length > 6 && pass.length < 20 && pass.includes('.')) {
            this._password = pass;
            console.log("Password successfully updated");
        } else {
            return;
        }
    }
}

const user4 =  new User1('test@gmail.com','123456789.','vano motiashvili');
console.log(user4.email);

user4.password = '987654321';
console.log(user4)