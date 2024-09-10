'''
#LOOPS
fruits= ["Apple", "Peach", "Pear"]
for fruit in fruits:
    print(fruit)

student_scores = [150, 142, 185, 120, 171, 184, 149, 24, 59, 68, 199, 78, 65, 89, 86, 55, 91, 64, 89]

# print(sum(student_scores))
sum=0
for score in student_scores:
    sum +=score
print(sum)


# print(max(student_scores))
max_score=0
for score in student_scores:
    if score > max_score:
        max_score = score

print(max_score)

# RANGE
gauss_sum=0
for i in range(1,101):
    gauss_sum+=i
print(gauss_sum)

#FIZZ BUZZ
for i in range(1, 101):
    if i%3 == 0 and i%5 ==0:
        print("FizBuzz")
    elif i%3 == 0:
        print("Fizz")
    elif i%5 == 0:
        print("Buzz")
    else:
        print(i)
'''

import random
#PyPassword Generator
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

print("Welcome to the PyPassword Generator!")
nr_letters = int(input("How many letters would you like in your password?\n"))
nr_symbols = int(input(f"How many symbols would you like?\n"))
nr_numbers = int(input(f"How many numbers would you like?\n"))

#EASY VERSION
generated_password=""
for i in range(nr_letters):
    generated_password+=random.choice(letters)
for i in range(nr_symbols):
    generated_password+=random.choice(symbols)
for i in range(nr_numbers):
    generated_password+=random.choice(numbers)
print(generated_password)

#HARD VERSION
password_list = []
for i in range(nr_letters):
    password_list.append(random.choice(letters))
for i in range(nr_symbols):
    password_list.append(random.choice(symbols))
for i in range(nr_numbers):
    password_list.append(random.choice(numbers))

random.shuffle(password_list)
password_new = ""
for ch in password_list:
    password_new += ch
print(password_new)
