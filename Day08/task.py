'''
# FUNCTION WITH PARAMETERS
def greet(name="Dave"): #Dave is the default parameter value in case none is mentioned
    print(f"Hello {name}")
    print(f"How you doing {name}?")

greet()
greet("Beda")

# CHALLENGE TO RETURN DAYS LEFT IN WEEKS
def life_in_weeks(current_age, final_age=90):
    years_left = final_age - current_age
    week_left = years_left*52
    print(f"You have {week_left} weeks left.")

life_in_weeks(56)

def greet_with(name, location):
    print(f"Hello {name}")
    print(f"What is it like in {location}")

greet_with("Beda", "Paris")

#KEYWORD ARGUMENTS
greet_with(name="Beda", location="Paris")
greet_with( location="Paris", name="Beda")


#LOVE CALCULATOR
def calculate_love_score(name1, name2):
    combined_name = name1.lower()+name2.lower()
    true_count=0
    love_count=0
    for letter in combined_name:
        if letter in ['t', 'r', 'u', 'e']:
            true_count+=1
        if letter in ['l', 'o', 'v', 'e']:
            love_count+=1
    print(str(true_count)+str(love_count))

calculate_love_score("Kanye West", "Kim Kardashian")
'''

#CAESER CIPHER
import art
print(art.logo)

alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
limit = len(alphabet)
should_continue = True
# def encrypt(original_text, shift_amount):
#     encrypted_text = ""
#     for letter in original_text:
#         if(letter not in alphabet):
#             encrypted_text += letter
#         else:
#             shifted_position = (alphabet.index(letter) + shift_amount)%limit
#             encrypted_text += alphabet[shifted_position]
#     print(f"Here is the encoded result: {encrypted_text}")

# def decrypt(original_text, shift_amount):
#     decrypted_text = ""
#     for letter in original_text:
#         if(letter not in alphabet):
#             decrypted_text += letter
#         else:
#             shifted_position = (alphabet.index(letter) - shift_amount)%limit
#             decrypted_text += alphabet[shifted_position]
#     print(f"Here is the decoded result: {decrypted_text}")

def ceasar(original_text, shift_amount, encode_or_decode):
    secret_text = ""
    if encode_or_decode == "decode":
        shift_amount *= -1
    for letter in original_text:
        if(letter not in alphabet):
            secret_text += letter
        else:
            shifted_position = (alphabet.index(letter) + shift_amount)%limit
            secret_text += alphabet[shifted_position]
    
    print(f"Here is the {encode_or_decode}d result: {secret_text}")

while should_continue:
    direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n").lower()
    text = input("Type your message:\n").lower()
    shift = int(input("Type the shift number:\n"))
    ceasar(original_text=text, shift_amount=shift, encode_or_decode=direction)
    restart = input("Type 'yes' if you wan to go again, Otherwise type 'no'.\n").lower()
    if(restart=="no"):
        should_continue = False