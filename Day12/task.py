'''
#SCOPE
enemies=1

def increase_enemies():
    enemies = 2 
    print(f"enemies insie fucntion: {enemies}")

increase_enemies()
print(f"enemies outside the function {enemies}")


# Local scope exisits inside the fucntion it is defined in
# Globla scope exists all over the code 


player_health = 10

def drink_potion():
    player_strength = 2
    print(player_health)

# print(player_strength) # error since player_strength is fucntion scoped 

#PYTHON HAS NO CONCEPT OF BLOCK SCOPE
# IF VARIABLE IS CREATED IN SCOPE, IT IS ACCESSIBLE OUTSIDE THE BLOCK IN GLOBAL SCOPE

enemies=1

def increase_enemies():
    global enemies # We need to explicitely mention thatt the enemies vartiable is global scoeped
    enemies = 2 #python creates a new variable withing the local scope and not changing theglobal variable
    print(f"enemies insie fucntion: {enemies}")

increase_enemies()
print(f"enemies outside the function {enemies}")
'''

# PREFERABLY NEVER CHANGE A GLOBAL SCOPED VARIABLE

# GUESSING GAME
from random import randint
from art import logo

EASY_LEVEL_TURNS = 10
HARD_LEVEL_TURN  = 5

print(logo)

# Function to validate the user's input against actual answer
def validate_guess(user_guess, actual_answer, turns):
    """Checks answer agains guess and returns number of turns remaining"""
    if user_guess > actual_answer:
        print("Too high")
        return turns-1
    elif user_guess < actual_answer:
        print("Too Low")
        return turns-1
    else:
        print(f"You got it. The answer is {actual_answer}")

# Function to set difficulty
def set_difficulty():
    level = input("Choose a difficulty. Type 'easy' or 'hard': ").lower()
    if level == "easy":
        turns = EASY_LEVEL_TURNS
    else:
        turns = HARD_LEVEL_TURN
    return turns

def game():
    # Choosing a random number between 1 and 100
    print("Welcome to the Number Guessing Game")
    print("I am thinking of a number between 1 and 100")
    answer = randint(1, 100)

    turns = set_difficulty()

    guess = 0
    #Repeat the guessing functionality if they get it wrong
    while guess != answer:
        print(f"You have {turns} attemps remaining to guess the number")
        # Let user guess a number
        guess= int(input("Make a guess: "))
        # Track the number of turns and reduce by 1 if they got it wrong
        turns = validate_guess(guess, answer, turns)
        if turns == 0:
            print("You've run ot of guesses, you lose.")
            return
        elif guess != answer:
            print("Guess again.")


game()