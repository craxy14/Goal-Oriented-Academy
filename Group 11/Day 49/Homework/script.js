function Student(name , surname , score){
    this.name = name
    this.surname = surname
    this.score = score
}

const me = new Student("Vano" , "Motiashvili" , 90);
const luka = new Student("Luka" , "Cxvaradze" , 100);
const mari = new Student("Mari" , "Alogamarjobashvili" , 75)
const demetre = new Student("Demetre" , "Motiashvili" , 90)
const ana = new Student("Ana" , "Yiyliyodze" , 55)

console.log(me , luka , mari , demetre , ana)