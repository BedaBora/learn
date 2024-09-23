from art import logo, vs
from game_data import data
from random import choice

print(logo)

class HighLowGame:

    def __init__(self):
        self.score = 0
        self.should_continue = True
        self.first_entry = choice(data)
        self.second_entry = choice(data)

        while self.first_entry == self.second_entry:
            self.second_entry = choice(data)

    def formatted_data(self, account):
        '''Returns a beautifully formatted account data'''
        return f"{account['name']}, a {account['description']}, from {account['country']}"

    def compare_follower(self, person_one, person_two):
        '''Returns True if person_one had greater follower than person_two'''
        return person_one['follower_count'] > person_two['follower_count']
    
    def play(self):
        while self.should_continue:

            print(f"Compare A: {self.formatted_data(self.first_entry)}")
            print(vs)
            print(f"Against B: {self.formatted_data(self.second_entry)}")

            # Ask user to select which may have more follower
            guess = input("Who has more followers? Type 'A' or 'B': ").lower()

            # Check if user is right
            if guess == 'a':
                self.should_continue = self.compare_follower(self.first_entry, self.second_entry)
            elif guess == 'b':
                self.should_continue = self.compare_follower(self.second_entry, self.first_entry)
            else:
                print("Wrong input please try again!")
            
            if self.should_continue:
                self.score += 1
                print(f"You're right! Current score: {self.score}")
                self.first_entry = self.second_entry
                self.second_entry = choice(data)
            else:
                print(f"Sorry, that's wrong, final score: {self.score}")

game = HighLowGame()
game.play()