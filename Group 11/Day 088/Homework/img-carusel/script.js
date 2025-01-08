const div = document.getElementById("btnDiv")
const img = document.getElementById("img")

const images = [
    "https://www.exoticshunter.com/imagetag/607/main/l/Used-2018-Mercedes-Benz-S63-AMG-BRABUS-700-w-a-200K-MSRP-CCBs-+-Burmester-High-End-Audio-1711576600.jpg",
    "https://assets.newatlas.com/dims4/default/64d5862/2147483647/strip/true/crop/1920x1080+0+0/resize/1920x1080!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fe63-amg.jpg",
    "https://preview.redd.it/yf54igorvsr11.jpg?width=640&crop=smart&auto=webp&s=07bb1b41c5ee49bb2b9458f3cf084f026cd01d3f"
]

let index = 0
img.src = images[index]

div.addEventListener("click",function(e) {
    id = e.target.id

    if(id == "next"){
        index++;
        if (index >= images.length) {
            index = 0;
        }
    }else{
        index--;
        if (index === -1) {
            index = 2;
        }
    }
    img.src = images[index]
})