"""
#SUBSTRING
print("Hello"[0])
print("Hello"[-1])

#INTEGER = WHOLE NUMBER
print(12+345)

#LARGE INTEGER
print(1_12_1256) #equivalent to 1,12,1256. just for understanding _ is ignorred

#FLOAT
print(3.1546)

#BOOLEAN
print(True)
print(False)

#CHECK DATATYPE
print(type("Hello"))

#TYPE CONVERISON
#int("abc") returns error
#int() float() str() bool()
print(int("123") + int("456"))

#MATHEMATICAL OPERATORS
print(32+54)
print(54-32)
print(3*2)
print(6/3) #return float
print(6//3) #removes the floating digits to return integer
print(2**3) #8

#BMI
height = 1.65
weight = 84
bmi = weight / (height **2)
print(bmi)
print(int(bmi)) #returns the floor value
print(round(bmi)) #returns the rounded value
print(round(bmi, 2)) #returns the rounded value up to 2 decimals

#SHORTHAND
score = 0

score += 1
score -= 1
score *= 2

#f-STRINGS
print(f"your score is {score}")

"""

# Project Tip Calculator
print("Welcome to the tip calculator!")
bill_amount=float(input("What was the total bill? $"))
tip_amount=0
while (1):
    tip = int(input("How much tip would you like to give? 10, 12 or 15? "))
    if  not (tip == 10 or tip==12 or tip==15):
        print("Please enter tip amount from above...")
    else:
        tip_amount = tip/100 * bill_amount
        break
total_amount=bill_amount+tip_amount
total_people=int(input("How many people to split the bill? "))
if(total_people > 0):
    split_amount = total_amount/total_people
else:
    split_amount = total_amount
print(f"Each person should pay: ${round(split_amount,2)}")
