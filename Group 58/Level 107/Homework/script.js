//შეისწავლეთ მთლიანი რესურსი და გააკეთე 3 მაგალითი Date ობიექტის გამოყენების
const date = new Date();
console.log(date);

const date1 = new Date(2025,12,3,12,20,60,10);
console.log(date1);

const date2 = new Date(10000000000);
console.log(date2)

/* ###  დავალება 1: "დაბადების დღის გამოთვლა"
**ამოცანა**: მომხმარებელს შეყავს დაბადების თარიღი ფორმატში `
"YYYY-MM-DD"`. დაწერე ფუნქცია, რომელიც დააბრუნებს:

- რამდენი წელი აქვს ამ ადამიანს,
- შემდეგი დაბადების დღემდე რამდენი დღე დარჩა. */

function calculateBirthdayInfo(birthDateString) {
    const today = new Date();
    const birthDate = new Date(birthDateString);
    let age = today.getFullYear() - birthDate.getFullYear();
  
    const thisYearBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (today < thisYearBirthday) {
      age--;
    }
    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (today >= nextBirthday) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const msPerDay = 1000 * 60 * 60 * 24;
    const daysUntilNextBirthday = Math.ceil((nextBirthday - today) / msPerDay);
  
    return {
      age,
      daysUntilNextBirthday
    };
  }
console.log(calculateBirthdayInfo("2007-7-1"))