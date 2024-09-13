'''
#FUNCTION WITH OUTPUT
def format_name(f_name, l_name):
    return f"{f_name.title()} {l_name.title()}"

print(format_name("beda", "BORA"))


#MULTIPLE RETURN

def format_name(f_name, l_name):
    """Take a first and last name and format it to 
        return the title case version of the name
    """
    if f_name == "" or l_name == "":
        return "You did not provide valid inputs"
    return f"{f_name.title()} {l_name.title()}"
'''

#CALCULATOR PROJECT
import art
from os import system

def calculator():
    resume=True
    print(art.logo)

    def add(n1, n2):
        return n1 + n2

    def subtract(n1, n2):
        return n1 - n2

    def muliply(n1, n2):
        return n1 * n2

    def divide(n1, n2):
        return n1 / n2

    operations = {
        "+" : add,
        "-" : subtract,
        "*" : muliply,
        "/" : divide
    }


    first_num = float(input("What's your first number?: "))

    while resume:
        for symbol in operations:
            print(symbol)
        op = input("Pick an operation: ")
        second_num = float(input("What's the next number?: "))
        result = operations[op](first_num, second_num)
        print(f"{first_num} {op} {second_num} = {result}")

        should_continue=input(f"Type 'y' to continue calculating with {result}, or type 'n' to start a new calculation: ").lower()

        if should_continue == "y":
            first_num = result
        else:
            system("cls")
            calculator()

calculator()
            
