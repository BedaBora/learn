# file = open('my_file.txt', 'r')
# lines = file.read()
# print(lines)
# file.close() # Always remember to close the file after completion of operations
# OR WE CAN DO THE BELOW

# with open('my_file.txt', 'r') as file:
#     content = file.read()
#     print(content)

#Write to a file
# with open('my_file.txt', mode='w') as file:
#     file.write("New Text")
#
#Append to a file
# with open('my_file.txt', mode='a') as file:
#     file.write("New Text 123")
#
#If python cannot find an existing file, it will create a new file
# with open('my_file2.txt', mode='w') as file:
#     file.write("Create a new file")