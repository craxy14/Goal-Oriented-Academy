import math

#1. Merge Lists: Write a function to merge two lists into a single list without any duplicates. For example, merging [1, 2, 3] and [3, 4, 5] should result in [1, 2, 3, 4, 5].



# list1 = [1 , 2 , 3]
# list2 = [3 , 4 , 5]

# new_list = []

# for i in list1:
#     if i not in new_list:
#         new_list.append(i)

# for i in list2:
#     if i not in new_list:
#         new_list.append(i)

# print(new_list)



#2. List Comprehension: Create a list comprehension that squares each element of a given list. For instance, if the input list is [1, 2, 3, 4, 5], the output should be [1, 4, 9, 16, 25].


# unsquared_list = [1 , 2 , 4 , 5]
# squared_list = []

# for i in unsquared_list:
#     squared_list.append(math.pow(i , 2))

# print(squared_list)



#3. Filter Odd Numbers: Write a function that takes a list of integers as input and returns a new list containing only the odd numbers from the original list.

# list1 = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
# odd_list = []

# for i in list1:
#     if i % 2 == 1:
#         odd_list.append(i)

# print(odd_list)



#4. Find Common Elements: Implement a function that takes two lists as input and returns a list containing the common elements between them

# list1 = [1 , 2 , 3 , 6 , 5]
# list2 = [3 , 4 , 5 , 2]

# common_list = []

# for i in list1:
#     if i in list2 and i not in common_list:
#         common_list.append(i)

# print(common_list)




#5. List Manipulation: Write a function to remove the duplicates from a given list while preserving the original order of elements. For example, if the input list is [1, 2, 3, 2, 4, 1], the output should be [1, 2, 3, 4]

# duplicated_list = [1 , 2 , 3 , 3 , 4 , 5 , 5 , 6]
# new_list = []

# for i in duplicated_list:
#     if duplicated_list.count(i) == 2:
#         duplicated_list.pop(i)

# print(duplicated_list)



#6. Merge Dictionaries: Write a function to merge two dictionaries into a single dictionary. If there are overlapping keys, prioritize the values from the second dictionary. For example, merging {'a': 1, 'b': 2} and {'b': 3, 'c': 4} should result in {'a': 1, 'b': 3, 'c': 4}

# dict1 = {
#     1:"1",
#     2:"2",
#     3:"3",
# }

# dict2 = {
#     4:"4",
#     5:"5",
#     6:"6",
# }

# merged_dict = {**dict1 , **dict2}
# print(merged_dict)



#7. Dictionary Comprehension: Create a dictionary comprehension that squares each value of a given dictionary. For instance, if the input dictionary is {'a': 1, 'b': 2, 'c': 3}, the output should be {'a': 1, 'b': 4, 'c': 9}

# default_dict = {
#     "a": 1, 
#     "b": 2, 
#     "c": 3
# }

# squared_dict = {key: value ** 2 for key, value in default_dict.items()}

# print("Output dictionary:", squared_dict)




#8. Dictionary Keys to List: Write a function that extracts all keys from a dictionary and returns them as a list. For example, if the input dictionary is {'a': 1, 'b': 2, 'c': 3}, the output should be ['a', 'b', 'c']

# dict1 = {
#     'a': 1, 
#     'b': 2, 
#     'c': 3
# }

# key_list = []

# for i in dict1.keys():
#     key_list.append(i)

# print(key_list)




#9. Word Frequency Counter: Write a function that takes a string of text as input and returns a dictionary where keys are unique words in the text and values are the frequencies of those words


# words = ("Vano Is a Lucky lucky man")
# result = {}
# words = words.lower()
# words = words.split(" ")

# for i in words:
#     result[i] = words.count(i)

# print(result)



#10. Dictionary Filtering by Value: Create a function that takes a dictionary and a value as input and returns a new dictionary containing only the key-value pairs where the value matches the input value.

# def filtered_dict(dict , input_value):
#     filtered_dict = {}

#     for key, value in dict.items():
#         if value == input_value:
#             filtered_dict[key] = value

#     print(filtered_dict)


# filtered_dict({"a":2 , "b":2 , "c":1 , "d":5} , 2)


#12. Palindrome Checker: Implement a function to check if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.

# word1 = "adam"
# # word2 = "vano"


# word2 = str(word1[::-1])
# print(word1 == word2)




#13. Anagram Checker: Create a function that takes two strings as input and returns True if they are anagrams (contain the same letters with the same frequency) and False otherwise.

# str1 = input("enter string 1: ")
# str2 = input("enter string 2: ")

# str1 = str1.replace(" " , "").lower()
# str2 = str2.replace(" " , "").lower()

# if len(str1) != len(str2):
#     print("False")

# str1_sorted = sorted(str1)
# str2_sorted = sorted(str2)

# print(str1_sorted == str2_sorted)





#14. Sentence Reversal: Create a function that takes a sentence (string) as input and returns a new string where the order of words is reversed. Ensure that punctuation marks are preserved in their original positions.

# sentance = "vano motiashvili is tall!"

# new_sentance = sentance.split()
# reversed_sentance = []

# for i in sentance[::-1]:
#     if i == "!":
#         continue
#     else:
#         reversed_sentance.append(i)

# new = "".join(reversed_sentance)
# print(new)





#15. Simple To-Do List: Implement a function that allows users to add, remove, and view items in a to-do list. It is better to use lists or dicts for this task.
# goal_name = input("Enter the name of the goal: ")
# goal_task = input("Enter the task to achive that goal: ")


# user_dict = {
# }

# user_dict[goal_name] = goal_task

# print(user_dict)




#16. Combining Lists into Dictionary: Create a function that takes two lists, one for keys and one for values, and returns a dictionary where elements from the keys list are paired with elements from the values list.


# keys = ["vano" , "giorgi" , "luka" , "demetre"]
# values = [1 , 2 , 3 , 4]

# new_dict = {

# }

# if len(keys) != len(values):
#     print("Not enough elements!")
# else:
#     for i in range(len(keys)):
#         new_dict[keys[i]] = values[i]
#     print(new_dict)





#17. Dictionary Key Search: Implement a function that takes a dictionary and a key as input, and returns True if the key is present in the dictionary, False otherwise.

# question = input("enter the key that you want to check in dict: ")

# dictionary = {
#     "vano":1,
#     "giorgi":2,
#     "luka":3,
# }

# if question in dictionary:
#     print("Found!")
# else:
#     print("Not Found!")





#18. Dictionary Value Aggregator: Write a function that takes a dictionary where the values are lists of numbers and returns a new dictionary where each key is associated with the sum of the numbers in its corresponding list.

# dictionary = {
#     "first":[1 , 2 , 3 , 55 , 7 ,1],
#     "second":[10 , 24 , 33 , 2 , 78 ,19],
#     "third":[19 , 20 , 13 , 115 , 70 ,15]
# }

# first = dictionary["first"]

# second = dictionary["second"]

# third = dictionary["third"]




#19. Function to Split List by Value: Design a function that takes a list and a value as input and returns two lists: one containing all elements less than the given value, and the other containing all elements greater than or equal to the given value.

# list1 = ["vano" , "nika" , "giorgi" , "nugzari" , "bugzari" , "dubzari"]
# remove = int(input("Enter how many elements you want to leave in a list: "))

# if remove > len(list1):
#     print("Not enough elements!")
# else:
#     list2 = list1[0:remove]
#     print(list2)

# other_elements = list1[remove + 1 :]
# print(other_elements)





#20. List Intersection Counter: Write a function that takes two lists as input and returns the count of unique elements that are common between the two lists.

# list1 = ["vano" , "giorgi" , "luka" , "zauri-aurzauri"]
# list2 = ["vano" , "luka" , "nika" , "sazamtro"]

# count = 0

# for i in list1:
#     if i in list2:
#         count += 1

# print(count)