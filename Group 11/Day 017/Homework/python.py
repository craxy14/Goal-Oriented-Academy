import random 


#კოდი გადააკეთეთ ისე, რომ ერთმა ბავშვმა რამოდენიმეჯერ ვეღარ მოიგოს


# crew_leaders = ['kruashvili', 'amiranashvili', 'tyeshelashvili', 'janezashvili', 'molodini', 'kereselidze', 'kurtanidze']


# choice1 = random.choice(crew_leaders)

# choice2 = random.choice(crew_leaders)

# choice3 = random.choice(crew_leaders)

# while choice1 == choice2 or choice1 == choice3 or choice3 == choice2:
#     choice1 = random.choice(crew_leaders)
#     choice2 = random.choice(crew_leaders)
#     choice3 = random.choice(crew_leaders)

# print('winner N1 :' , choice1)
# print('winner N2 :' , choice2)
# print('winner N3 :' , choice3)





# #შექმენით თქვენი რაზმელებისგან სია, ამოირჩიეთ რენდომულად 3 ბავშვი და მიუწერეთ გვერდში "კარგად სწავლობს".

# squad=["dato mgeladze","vano motiashvili","davit janashia","aleqsandre katsarava","lasha wamalaidze","ilia wiklauri","nini nozadze","nika chochia","gabriel gogadze","sandro bochorishvili","dato jachvadze","giorgi gelashvili","muhammedali mamedov","sandro oqropiridze","erekle gochitashvili"]

# for i in range(3):
#     randomizer = random.choice(squad)
#     print(randomizer , "kargad swavlobs")





# #ვისი სახელიც "ი"-ზე მთავრდება, დაუპრინტეთ გვერდით "cool"


squad=["dato mgeladze","vano motiashvili","davit janashia","aleqsandre katsarava","lasha wamalaidze","ilia wiklauri","nini nozadze","nika chochia","gabriel gogadze","sandro bochorishvili","dato jachvadze","giorgi gelashvili","muhammedali mamedov","sandro oqropiridze","erekle gochitashvili"]

choice1 = random.choice(squad)
choice2 = random.choice(squad)
choice3 = random.choice(squad)
        
if choice1[-1] == "i":
    print(choice1 , "cool")
else:
    print(choice1)

if choice2[-1] == "i":
    print(choice2 , "cool")
else:
    print(choice2)

if choice3[-1] == "i":
    print(choice3 , "cool")
else:
    print(choice3)



    


    

