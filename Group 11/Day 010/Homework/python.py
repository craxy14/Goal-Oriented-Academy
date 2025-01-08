#შემოატანინეთ მომხმარებელს მისი და მამამისის ასაკი და თუ მამამისის ასაკი ორჯერ მეტია დაპრინტეთ Bingo თუარადა Mouse

# user_age = int(input("Enter your age : "))
# fathers_age = int(input("Enter your Fathers age : "))

# if fathers_age == user_age *2:
#     print("Bingo")
# else:
#     print("Mouse")


#თუ მომხმარებელი სწავლობს Goa-ში შეაქეთ თბილი სიტყვებით


# user_academy = input("Enter the name of your academy : ")

# if user_academy == ("Goa"):
#     print("Excellent choice!!! ❤️❤️❤️ ")
# else:
#     if user_academy != ("Goa"): 
#         print("Thats unfortunate. You should've chosen GOA. 🥲")



#დაპრინტეთ 1-100 ციფრები და მიუწერეთ კენტი და ლუწი

# for i in range(2,100,2):
#     print(i , "ლუწი")

# for j in range(1,100,2):
#     print(j , "კენტი") 


#თუ მომხმარებელი არის მამაკაცი და 65+ დაპრინტეთ გეკუთვნით პენსია თუ ქალია და 60+ დაპრინტეთ პენსია გეკუთვნით თუ nonbinary მოშორდი აქედან.

user_age = int(input("Enter your age : "))
user_sex = input("Enter your sex (Male,Female OR Nonbinary) : ")


if user_age >= 65 and user_sex == ("Male"):
    print("გილოცავთ!! თქვენ გეკუთვნით პენსია.")
else:
    if user_age >= 60 and user_sex == ("Female"):
        print("გილოცავთ!! თქვენ გეკუთვნით პენსია.")

    if user_sex == ("Nonbinary"):
        print("გამასწარი აქედან სანამ გაგცხე ყურისძირში.")