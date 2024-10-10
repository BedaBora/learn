import pandas as pd

phonetics = pd.read_csv("../Day26/nato_phonetic_alphabet.csv")
phonetics_dict = {row.letter:row.code for (_, row) in phonetics.iterrows()}

def generate_phonetic():
    user_word = input("Enter a word: ").upper()
    try:
        phonetic_code = [ phonetics_dict[letter] for letter in user_word]
    except KeyError:
        print("Sorry, only letters in the alphabet please")
        generate_phonetic()
    else:
        print(phonetic_code)

generate_phonetic()