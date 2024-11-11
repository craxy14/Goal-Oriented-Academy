let name = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let loginBtn = document.getElementById("btn");

let spanN = document.getElementById("spanname")
let spanE = document.getElementById("spanemail")
let spanP = document.getElementById("spanpass")

loginBtn.addEventListener("click", function(){
  function user(Name, Email, Password){
    this.name = Name
    this.email = Email
    this.pass = Password
  }

  const userLog = new user(name.value, email.value, pass.value)
  console.log(userLog);

  spanN.innerHTML = userLog.name
  spanE.innerHTML = userLog.email
  spanP.innerHTML = userLog.pass
})