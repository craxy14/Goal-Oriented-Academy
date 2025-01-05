// const admin = "Mate";

// if(admin === "Mate" || admin === "Saba"){
//   console.log("Hello admin.")
// } else{
//   console.log("Hello user.")
// }

// const form = document.getElementById("form");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", function(){
//   const name = form.elements.fullname;
//   const password = form.elements.password.value;

//   if(name.value.length === 0){
//     name.style.borderColor =  'red'
//   }
// });

// for(let i = 0; i < 10; i++){
//   console.log(i);
// }

//1

for(let i = 0; i <= 100; i++){
    console.log(i);
  }
  
  //2
  
  for(let i = 100; i >= 0; i--){
    console.log(i);
  }
  
  //3
  
  for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
      console.log(i + " is even");
    }
  }
  
  
  //4
  let myFriend = "sandro"
  
  if(myFriend === "sandro" || myFriend === "daniel"){
    console.log("Hello my friend");
  }else{
    console.log("You are not my friend")
  }
  
  //5
  
  let num1 = 0
  while(num1 < 100){
    num1 += 5
    console.log(num1);
  }