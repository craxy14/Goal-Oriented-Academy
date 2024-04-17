const child = document.getElementById("child-container");

let position = 0;

const moveRight = setInterval(function(){
    if(position == 0){
        position = true;
    }else if(position == 300){
        clearInterval(moveRight)
    }else {
        position == false
    }
    position++;
    child.style.left = position + "px";
    
    setInterval(function(){
        if(position == 300){
            position++;
            child.style.top = position + "px";
        }
    }, 10)
    
}, 10)