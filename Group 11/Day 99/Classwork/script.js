// Project: User Registration System
// Objective:
// Build a simple user
// registration system where users can input their first name, last name, and age through a form. The data will be processed using a JavaScript class that incorporates class features such as methods, getter/setter, public fields, private fields, private methods, and static methods. The project will also display the number of users registered.
// Project Requirements:
// Form: Create an HTML form where users can input:
// First name
// Last name
// Age
// Class Structure:
// Public Fields: Store user details like first name, last name, and age.
// Private Fields: Keep sensitive or internal data hidden (e.g., ID or user validation status). Methods: Add methods for validation, registration, and displaying user info.
// Getter/Setter: Use
// getter/setter to access and update user details safely. Private Methods: Add a private method to handle any internal logic (e.g., checking if the age is valid).
// Static Methods: Keep track of how many users have been
// registered in the system (e.g.,
// total user count).
// DOM Manipulation:
// When the user submits the form,
// create a new user instance
// using the class.
// Validate the user input before
// allowing the user to be
// registered.
// Display the user count and user
// details on the page once a
// valid user is registered.
// Error Handling:
const form = document.getElementById("myForm")
const accountsDiv = document.getElementById("accountsDiv")
const accounts = []

class Person{
    #password;
    static #accounts = []

    constructor(firstname, email, password){
        this.firstname = firstname
        this.email = email
        this.#password = password

        Person.#addAccount(this)
    }

    get password(){
        return this.#password
    }

    set password(value){
        this.#password = value
    }

    static #addAccount(account){
        Person.#accounts.push(account)
        Person.#displayAccounts();
    }

    static #displayAccounts() {
        accountsDiv.innerHTML = ""

        for(const acc of Person.#accounts){
            accountsDiv.innerHTML += `<p>${acc.firstname} - ${acc.email}</p>`
        }
    }
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const firstname = form.fname.value
    const email = form.email.value
    const password = form.password.value

    new Person(firstname, email, password);
    form.reset();
})

