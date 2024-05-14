#ალგორითმი არის რიგრიგობით მოცემული ინსტრუქციების ერთობლიობა

# norm_heartrate = 60
# working_out = 100

# if 5 > 10:      #if True.
#     print("5 is bigger then 10")

# else:
#     print("10 is bigger then 5")


# def manual_pop(list , index = -1):
#     new_list = []
#     for i in range(len(list)):
#         if i != index:
#             new_list.append(list[i])

#     print(new_list)




# manual_pop([-1 , 2 , 6 , 16 , 815 , 184 , 14] , 5)



name = input("Enter Your Name: ")
surname = input("Enter Your Surname: ")
age = int(input("Enter Your Age: "))

person = {
    "name": name,
    "surname": surname,
    "age": age,
}

# person.update({"name": name , "surname": surname , "age": age})

print(person)
print(person.get("height" , "not found"))