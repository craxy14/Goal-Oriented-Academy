# # 1)შეიქმნას რაზმის წევრების სია, ვისს სახელ და გვარში 2-ზე მეტი "ი" არის,გაუდიდდეს პირველი ასო და შევიდეს ახალ სიაში "supersia"


# squad=['alexandre Katsarava','dato Jachvadze','dato Mgeladze','davit Janashia','gabriel Gogadze','gabrieli Molodini','giorgi Gelashvili','ilia Wiklauri','muhammedali Mamedov','nini Nozadze','sandro Bochorishvili','sandro Oqropiridze','vano Motiashvili','erekle gochitashvili','lasha wamalaidze','nika chochia']

# i_count = 0
# supersia = []


# for element in squad:
#     i_count = 0
#     for char in element:
#         if char == "i":
#             i_count += 1

#     if i_count > 2:
#         supersia.append(element.capitalize())


# print(supersia)


#2)თქვენი რაზმის წევრებიდან ვისი სახელი და გვარის სიგრძე ნაკლებია 16 სიმბოლოზე, გაუდიდდეს სახელი და გვარი და დაიპრინტოს გადიდებულად.


squad=["dato mgeladze","vano motiashvili","davit janashia","aleqsandre katsarava","lasha wamalaidze","ilia wiklauri","nini nozadze","nika chochia","gabriel gogadze","sandro bochorishvili","dato jachvadze","giorgi gelashvili","muhammedali mamedov","sandro oqropiridze","erekle gochitashvili"]

for element in squad:
    if len(element) < 16:
        print(element.upper()) 