#No9.

# words = ("Vano Is a Lucky lucky man")
# result = {}
# words = words.lower()
# words = words.split(" ")

# for i in words:
#     result[i] = words.count(i)

# print(result)




#No10.

# def filtered_dict(dict , input_value):
#     filtered_dict = {}

#     for key, value in dict.items():
#         if value == input_value:
#             filtered_dict[key] = value

#     print(filtered_dict)


# filtered_dict({"a":2 , "b":2 , "c":1 , "d":5} , 2)


# while True:
#     fullname = input("Enter your fullname: ")
#     password = input("Enter your password: ")
#     address = input("Enter your address: ")
#     email = input("Enter your email: ")

#     if "@" not in email:
#         print("Try again:")

#     else: 
#         break

# user = {}

# user["fullname"] = fullname
# user["email"] = email
# user["password"] = password
# user["address"] = address

# print(user)



# for key, value in user.items():
#     print(key + ":" , value)




#შექმენით ფუნქცია manual_items გადაეცით dict და დააბრუნეთ სია მხოლოდ key value !გამოიყენეთ For ციკლი!


# def manual_items(dict1):
#     filtered_list = []

#     for i in dict1:
#         filtered_list.append([i , dict1[i]])

#     print(filtered_list)

# manual_items({"a":1 , "b":2 , "c":3})




# key_check = input("enter the key you want to check: ")

# items = {"a":1 , "b":2 , "c":3}

# if key_check in items:
#     print(items[key_check])

# else:
#     print("Key not found!")

# def manual_get(dict , key , default):
#     if key in dict:
#         return dict[key]
    
#     else:
#         return default

# manual_get({"a":1 , "b":2 , "c":3} , "b" , "Not Found!")




def manual_pop(dict1 , key_remove):
    result = {}

    for i in dict1.keys():
        if i != key_remove:
            result[i] = dict1[i]

    print(result)

manual_pop({"fullname":"vano" , "age":16 , "password":"gamervano123"} , "age")