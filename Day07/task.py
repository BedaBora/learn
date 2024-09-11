import random
from hangman_words import word_list
from hangman_art import stages, logo

print(logo)

chosen_word = random.choice(word_list)
# print(chosen_word)
game_over = False
guessed_letters = []
total_lives = len(stages)-1
lives = total_lives
placeholder="_"*len(chosen_word)
print(placeholder)

while not game_over:
    print(f"****************************{lives}/{total_lives} LIVES LEFT ****************************")
    guess=input("Guess a letter: ")[0].lower()
    print(guess)

    if guess in guessed_letters:
        print(f"You've already guessed {guess}")

    for index in range(len(chosen_word)):
        if chosen_word[index] == guess:
            guessed_letters.append(guess)
            placeholder =placeholder[0:index]+guess+placeholder[index+1:]
    if guess not in chosen_word:
        lives -= 1
        print(f"You've guessed {guess}, that's not in the word, YOu lose a life")
    print(f"Word to guess: {placeholder}")
    print(stages[lives])
    
    if lives == 0:

        print(f"**************************** IT WAS {chosen_word} YOU LOST ****************************")
        game_over=True
    elif placeholder == chosen_word:
        game_over = True
        print("**************************** YOU WIN ****************************")