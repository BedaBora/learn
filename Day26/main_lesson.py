# List and Dictionaries

# numbers = [1, 2, 3]
# new_numbers = [item+1 for item in numbers] #List comprehension
# print(new_numbers)

# name = "Beda"
# letters = [letter for letter in name]
# print(letters)

# doubles = [num*2 for num in range(1,5)]
# print(doubles)

# names = ["Alex", "Beth", "Caroline", "Dave", "Eleanor","Freddie"]

# short_names = [name for name in names if len(name) <=4] #Conditional list comprehension
# print(short_names)

# uppercased_names = [name.upper() for name in names if len(name) > 4]
# print(uppercased_names)

# with open("file1.txt") as file:
#     file1_num = [int(num.split("\n")[0]) for num in file.readlines()]
#
# with open("file2.txt") as file:
#     file2_num = [int(num.split("\n")[0]) for num in file.readlines()]
#
# result = [num for num in file1_num if num in file2_num]

# from random import randint
#Dictionary comprehension
# students_scores = {key:randint(1, 100)  for key in names}   #Dictionary comprehension
# print(students_scores)
# passed_students = {student: score for (student, score) in students_scores.items() if score > 60}
# print(passed_students)

# student_dict = {
#     "student": ["Angela", "James", "Lily"],
#     "score": [56,75,98]
# }
#
# import pandas as pd
# student_df = pd.DataFrame(student_dict)
# # print(student_df)
#
# #Pandas loop through rows of dataframe
# for (index, row) in student_df.iterrows():
#     print(row)