#Errors

#FileNotFound
# with open("data.txt") as file:
#     file.read()

#KeyError
# a_dict = {"key": "value"}
# value = a_dict["non_existent_key"]

#IndexError
# fruit_list = ["Apple", "Banana", "Pear"]
# fruit_list[4]

#TypeError
# text="abc"
# print(text+4)

try:
    file = open("a_file.txt")
    a_dict = {"key": "value"}
    value = a_dict["non_existent_key"]
except FileNotFoundError:
    file = open("a_file.txt", "w")
except KeyError as error_message:
    print(f"the key {error_message} does not exist")
else:
    content = file.read()
    print(content)
finally:
    # raise TypeError("My own error") throwown error message
    file.close()
    print("CLosing the file")