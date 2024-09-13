'''
#DICTIONARIES
programming_dictionary = {
    "Bug": "An error in a program that prevents the program from running as expected.", 
    "Function": "A piece of code that you can easily call over and over again.",
}
#Get from dictionary
print(programming_dictionary["Bug"])
#Add into dictionary
programming_dictionary["Loop"] = "The action fo doing something over and over again"

empty_dictionary = {}
#Wipe existing dictionary
# programming_dictionary.clear()
# print(programming_dictionary)

#Update existing value
programming_dictionary["Bug"] = "A moth in the computer"

print(programming_dictionary)

for key in programming_dictionary:
    print(key)
    print(programming_dictionary[key])


#Nesting in Dictionary
travel_log = {
    "France": ["Paris", "Lille", "Dijon"],
    "Germany": ["Stuttgart", "Berlin"]
}

print(travel_log["France"][1])

#Nested list
nested_list = ["A", "B", ["C", "D"] ]
print(nested_list[2][1])

travel_log = {
    "France": {
        "num_times_visited": 8,
        "cities_visited": ["Paris", "Lille", "Dijon"],
    },
    "Germany":{
        "num_times_visited": 5,
        "cities_visited":["Stuttgart", "Berlin"]
    }
}

print(travel_log["Germany"]["cities_visited"][1])
'''

#BLIND AUCTION PROGRAM
from os import system
from art import logo

continue_bidding = True
biddings = {}
winner=[]
max=0
print(logo)
print("Welcome to the secret aution program")
while(continue_bidding):
    name=input("What is your name?: ")
    bid_amount=int(input("What's your bid?: $"))
    biddings[name] = bid_amount
    resume=input("Are there any other bidders?Type 'yes' or 'no'\n").lower()
    if bid_amount > max:
        max = bid_amount
        winner = [name, bid_amount]
    if(resume == "no"):
        continue_bidding = False
    system("cls")
    

print(f"The winner is {winner[0]} with a bid of ${winner[1]}")