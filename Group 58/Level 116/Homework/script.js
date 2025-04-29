const form = document.querySelector('form');

const users = [];
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
const punctuationChars = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

function isValidPassword(pass) {
    let hasAlphabet = false;
    let hasDigits = false;
    let hasPunctuation = false;

    for(let i = 0; i < pass.length; i++){
        if(alphabet.includes(pass[i])){
            hasAlphabet = true;
        }
        if(digits.includes(pass[i])){
            hasDigits = true;
        }
        if(punctuationChars.includes(pass[i])){
            hasPunctuation = true;
        }
    }

    return hasAlphabet && hasDigits && hasPunctuation;
}

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let email = form.email.value;
    let name = form.name.value;
    let password = form.password.value;

    console.log(name);
    console.log(email);
    console.log(password);

    class User {
        constructor(name,email,password){
            this._name = name;
            this._email = email;
            this._password = password;
        }

        get name(){
            return this._name;
        }

        set password(newPass){
            if(newPass.length > 4 && isValidPassword(newPass)){
                this._password = newPass;
            } else {
                return;
            }
        }
    }

    const user = new User(name,email,password);
    users.push(user);
    console.log(users);
    user.password = '123567#f';

    form.reset();
});
