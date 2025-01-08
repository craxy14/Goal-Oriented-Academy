// 3) შექმენით ერთი სარეგისტრაციო ფორმა, სადაც გექნებათ მინიმუმ 5 შესატანი ველი, სახელი, გვარი, იმეილი პაროლი და საცხვორებელი ქალაქი, როდესაც ფორმა დადასტურდება მიღებუილი მონაცემებით უნდა იქმნდებოდეს ახალი ობიექტი კლასსის დახმარებით რომლის სახელიც არის Account შექმნილი ობიექტი კი უნდა ემატებოდეს მასივში სახელად accounts, დაამატეთ კლასს მეთოდი სახელად  printDetails რომელიც დაბეჭდავს კონკრეული ობიექტის ინფორმაციას რომელზეც გამოვიძახეთ
const form = document.getElementById("myForm")

class Account {
    static accountsArr = [];

    constructor(firstname, lastname, email, password, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.age = age;

        Account.addAccount(this);
    }

    static addAccount(account) {
        Account.accountsArr.push(account);
    }

    static printDetails(account) {
        return `${account.firstname} - ${account.lastname} - ${account.email} - ${account.age}`;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const firstname = form.fname.value;
    const lastname = form.lname.value;
    const email = form.email.value;
    const password = form.password.value;
    const age = form.age.value;

    const newAcc = new Account(firstname, lastname, email, password, age);

    console.log(Account.printDetails(newAcc))
    form.reset();
});

// -------------------------------------------------------------