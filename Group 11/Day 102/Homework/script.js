// Async and Sync:
// სინქრონიზაცია არის ტექნიკა, რომლის დროსაც ჩვენს დაწერილ პროგრამაში, კოდი ეშვება თანმიმდებრობთ (ჯერ 1 ხაზი, მერე 2, მერე 3 და ა.ს.შ)
// ეს არის ცუდი ტექნიკა, რადგან როდესაც ვასრულებთ რაიმე გრძელვადიან რთულ დავალებას, სანამ ეს კოდი არ დაასრულებს მუშაობს, მანამდე სხვა კოდი ვერ გაეშვება, და მომხმარებელი ვერ მოახდენს ინტერაქციას ვერაფერზე = Single Thread Program / ერთ ნაკადიანი პროგრამა (თითო ჯერზე 1 ხაზი კოდის გაშვება):
// const name = "Miriam";
// const greeting = `Hello, my name is ${name}!`;
// console.log(greeting);

// -------------------------------------------------------------
// ასინქრონიზაცია არის ტექნიკა, რომელიც გვეხმარება ჩვენმა პროგრამამ იმუშაოს ასინქრონიზირებულად, ანუ როდესაც სრულდება ერთი დავალება, შეუძლია პარალელურად გაუშვას სხვა კოდიც და შესრულდეს სხვა დავალებაც. Event Handler-ებიც იყენებენ ასინქრონიზირებულ პროგრამირებას (როდესაც რაღაც Event მოხდება, სიტყვაზე დაკლიკება, მხოლოდ მაშინ გაეშვება შიგნით გადაცემული ფუნქცია)

// -------------------------------------------------------------