rows = 10
collums = 20
saba = int(rows) < int(collums)
saba1 = int(rows) > int(collums)
print(saba or saba1)


arr = ["1" , "2" , "3"]
string_arr = []

for num in arr:
    string_arr.append(str(num))

result = "+".join(string_arr)
print(result)