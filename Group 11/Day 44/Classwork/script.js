let checkBox = document.getElementById("accept")
let btn = document.getElementById("btn")


btn.addEventListener("click" , function(){
    let value = checkBox.checked;
    
    if (value === true){
        alert("payment successful")
    }else{
        alert("payment declined")
    }
})