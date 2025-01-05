import random

alo = [1 , 2 , 3 , 4 , 5 , 6 , 7]


# print(alo[random.randint(0,7)])
# print("priveli gamarjvebulia" , (random.choice(alo)))


# for i in range(3):
#     print("winner =" , random.choice(alo))


alo.remove(4)
print(alo)

import random 
crew_leaders = ['kruashvili', 'amiranashvili', 'tyeshelashvili', 'janezashvili', 'molodini', 'kereselidze', 'kurtanidze' , 'aruda']

for i in range(1,4):
    print('winner N',i,'is',random.choice(crew_leaders))

# crew_leaders = ['kruashvili', 'amiranashvili', 'tyeshelashvili', 'janezashvili', 'molodini', 'kereselidze', 'kurtanidze','aruda']
crew_leaders.remove("aruda")
# print(crew_leaders) 