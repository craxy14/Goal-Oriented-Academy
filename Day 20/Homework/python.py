#2) რამდენი ასოც არის თქვენს სახელში, იმდენჯერ დაპრინტეთ "მაგარია"

myname = "Vano"
lenght_of_name = len(myname)
for i in range(lenght_of_name):
    print("magaria")


#შექმენით თქვენი რაზმელებისგან სია და ამოაგდეთ იმ ინდექსზე მდგომი მოსწავლე, რომელი ინდექსის რიცხვიც უდრის თქვენი სახელის სიგრძეს

#squad=["dato mgeladze","vano motiashvili","davit janashia","aleqsandre katsarava","lasha wamalaidze","ilia wiklauri","nini nozadze","nika chochia","gabriel gogadze","sandro bochorishvili","dato jachvadze","giorgi gelashvili","muhammedali mamedov","sandro oqropiridze","erekle gochitashvili"]

# len_of_name = len("vano")

# squad.pop(len_of_name)
# print(squad)



#3) თქვენი რაზმელების სიიდან, ტოპ 2 ყველაზე გრძელგვარიანი შეაგდეთ ახალ სიაში და დაპრინტეთ

squad=["dato mgeladze","vano motiashvili","davit janashia","aleqsandre katsarava","lasha wamalaidze","ilia wiklauri","nini nozadze","nika chochia","gabriel gogadze","sandro bochorishvili","dato jachvadze","giorgi gelashvili","muhammedali mamedov","sandro oqropiridze","erekle gochitashvili"]

squad2 = []

max_len = 0
for element in squad:
    if len(element) > max_len:
        max_len = len(element)
        res = element

squad2.append(res)
squad.remove(res)

max_len = 0
for element in squad:
    if len(element) > max_len:
        max_len = len(element)
        res = element

squad2.append(res)
print(squad2)