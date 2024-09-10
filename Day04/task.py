# RANDOM NUMBERS
import random

'''
# import my_module

random_integer = random.randint(1, 10)
print(random_integer)

random_0_1 = random.random()  #recommmended
print(random_0_1)

random_float = random.uniform(1, 10)
print(random_float)

#HEADS OR TAILS
coin_face = random.randint(1,2)
if coin_face==1:
    print("Heads")
else:
    print("Tails")


#LIST
friends = ["Alice", "Bob", "Charlie", "David", "Emanuel"]
# random_pick = random.randint(0, len(friends)-1)
# print(friends[random_pick])
print(random.choice(friends))


#NESTED LISTS
fruits = ["Strawberries", "Apples", "Grapes", "Peaches", "Cherries"]
vegetables = ["Spinach", "Kale", "Tomatoes", "Celery", "Potatoes"]

dirty_dozen = [fruits, vegetables]
print(dirty_dozen)
'''

#ROCK PAPER SCISSORS
rock = """
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
"""

paper="""
     _______
---'    ____)____
           ______)
          _______)
         _______)
---.__________)
"""

scissors="""
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
"""
game=[rock, paper,scissors]
user_choice = int(input("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors.\n"))
if user_choice < 0 or user_choice > 2:
    print("Wrong input")
else:
    print(game[user_choice])
    print("Computer chose:")
    computer_choice=random.randint(0,2)
    print(game[computer_choice])
    if user_choice == 0:
        if computer_choice == 1:
            print("Computer Won!!")
        elif computer_choice == 2:
            print("You Won!!")
        else:
            print("Its a draw")
    elif user_choice == 1:
        if computer_choice == 2:
            print("Computer Won!!")
        elif computer_choice == 1:
            print("You Won!!")
        else:
            print("Its a draw")
    else:
        if computer_choice == 0:
            print("Computer Won!!")
        elif computer_choice == 1:
            print("You Won!!")
        else:
            print("Its a draw")