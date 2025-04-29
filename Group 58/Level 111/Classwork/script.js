let previousBtn = document.getElementById('PreviousBtn');
let img = document.querySelector('img')
let nextBtn = document.getElementById('NextBtn');

const imgArray = ['https://octoclassic.com/wp-content/uploads/2024/10/mercedes-560-sec-amg-widebody-1-e1727853303420.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkHgFSmsIfsyJ1uu0llC8sNH5HkWe3LCRXSggS7ZphBacqFM-UiKjgl4RTtIoU1gFqXU&usqp=CAU','https://www.theslshop.com/wp-content/uploads/2020/05/mercedes-benz-range-1989-_0001_w126-saloon.jpg','https://lh7-us.googleusercontent.com/OaF5c2Z98C2UAgaehHvme0PBYYHVca3Cl_r3vJ7q9noIobWFlNn-twrCUHuyt-uBysk3I-hP8kVzZPDS_eXIXaJml8hxHCItwnDkF-6g-_AY9PXd7GG8nK8Tlc53RQN9_OaQs0pCh0-l5vZ5_h5p4XQ'];
let index = 0;

imgArray.src = imgArray[index]
nextBtn.addEventListener('click',() => {
    if(index < imgArray.length - 1){
        index++;
    }else{
        index = 0;
    }
    img.src = imgArray[index];
});

previousBtn.addEventListener('click',() =>{
    if(index > 0){
        index--;
    }else{
        index = imgArray.length - 1
    }
    img.src = imgArray[index];
});

setInterval(() => {
    if (index < imgArray.length - 1) {
        index++;
    } else {
        index = 0;
    }
    img.src = imgArray[index];
}, 3000);


let form = document.getElementById('form');
let input = document.getElementById('input')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputValue = input.value;
    console.log(inputValue);

    let ul = document.getElementById('Ul');
    let createdLiTag = document.createElement('li');
    createdLiTag.textContent = inputValue;
    ul.appendChild(createdLiTag)
});