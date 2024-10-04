PLACEHOLDER = "[name]"
with open("./input/names/invited_names.txt") as names:
    invited_people = names.read().split("\n")

with open("./input/letters/starting_letter.txt") as letter:
    starting_letter = letter.read().strip()

for name in invited_people:
    with open(f"./output/readytosend/invite_for_{name}.docx", "w") as write_letter:
        write_letter.write(starting_letter.replace(PLACEHOLDER, name))