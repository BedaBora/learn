# CONDITIONAL IF/ELSE
"""
print("Welcometo the rollercoaster!")
height = int(input("What is your height in cm? "))

if height >120:
    print("You can ride the rollercoaster")
else:
    print("Sorry you have to grow taller before you can ride")

num = int(input("Enter a number: "))
if(num%2==0):
    print("Even number")
else:
    print("Odd number")

#NESTED CONDITIONAL STATEMENT
print("Welcometo the rollercoaster!")
height = int(input("What is your height in cm? "))

if height >120:
    print("You can ride the rollercoaster")
    age = int(input("Enter your age: "))
    if age <= 12:
        print("Please pay $5")
    elif age <= 18:
        print("Please pay $7")
    else:
        print("Please pay $12")
else:
    print("Sorry you have to grow taller before you can ride")


#ADV. NESTED CONDITIONAL STATEMENT
print("Welcometo the rollercoaster!")
height = int(input("What is your height in cm? "))
bill=0

if height >120:
    print("You can ride the rollercoaster")
    age = int(input("Enter your age: "))
    if age <= 12:
        bill = 5
    elif age <= 18:
        bill = 7
    else:
        bill = 12
    
    wants_photo= input("Do you want to have a photo taken? type 'y' for Yes and 'n' for No")
    if wants_photo == 'y':
        bill += 3
    
    print(f"Please pay ${bill}")

else:
    print("Sorry you have to grow taller before you can ride")



# CODING CHALLENGE
print("Welcome to Python Pizza Deliveries!")
size = input("What size of pizza do you want? S, M or L: ")
pepperoni = input("Do you want pepperoni on your pizza? Y or N: ")
extra_cheese = input("Do you want extra cheese? Y or N: ")
bill=0

if size == 'S':
    bill = 15
elif size == 'M':
    bill = 20
elif size == 'L':
    bill = 25
else:
    print("You typed the wrong inputs..")

if pepperoni == 'Y':
    if size == 'S':
        bill += 2
    else:
        bill += 3

if extra_cheese == 'Y':
    bill += 1

print(f"Final bill is ${bill}.")

"""

#LOGICAL OPERATORS
# and, or, not


################# DAY 3 PROJECT ##################
print('''
*******************************************************************************
          |                   |                  |                     |
 _________|________________.=""_;=.______________|_____________________|_______
|                   |  ,-"_,=""     `"=.|                  |
|___________________|__"=._o`"-._        `"=.______________|___________________
          |                `"=._o`"=._      _`"=._                     |
 _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
|                   |    __.--" , ; `"=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .` ` `` ,  `"-._"-._   ". '__|___________________
          |           |o`"=._` , "` `; .". ,  "-._"-._; ;              |
 _________|___________| ;`-.o`"=._; ." ` '`."\` . "-._ /_______________|_______
|                   | |o;    `"-.o`"=._``  '` " ,__.--o;   |
|___________________|_| ;     (#) `-.o `"=.`_.--"_o.-; ;___|___________________
____/______/______/___|o;._    "      `".o|o_.--"    ;o;____/______/______/____
/______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
/______/______/______/______/______/______/______/______/______/______/[TomekK]
*******************************************************************************
''')
print("Welcome to Treasure Island.\nYour mission is to find the treasure.")
print("You're at a cross road. WHere do you want to go?")
choice1=input("\tType \"left\" or \"right\"\n").lower()

if(choice1 == "left"):
    print("You've come to a lake. There is an island in the middle of the lake.")
    choice2=input("\tType \"wait\" to wait for the boat. Type \"swim\" to swim across\n").lower()
    if choice2 == "wait":
        print("You've arrived on the island. There is a house with 3 doors. One red, one yellow and one blue.")
        choice3=input("\tWhich color do you choose\n").lower()
        if(choice3 == "red"):
            print("It's a room full of fire. Game Over")
        elif(choice3 == "yellow"):
            print("Congratulations!! You've found the treasure.")
        elif(choice3 == "blue"):
            print("You've entered a room full of dragons. Game Over")
        else:
            print("You chose a door that does'nt exist. Game Over")

    else:
        print("You got attacked by a lochness monster. Game Over")
else:
    print("You fell into an hole. Game Over")