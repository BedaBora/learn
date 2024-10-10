from tkinter import Tk, Canvas, PhotoImage, Label, Entry, Button, END, messagebox
from random import choice, randint, shuffle
import pyperclip
import json

# ---------------------------- PASSWORD GENERATOR ------------------------------- #
#Password Generator Project
def gen_password():
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

    nr_letters = randint(8, 10)
    nr_symbols = randint(2, 4)
    nr_numbers = randint(2, 4)

    password_letters = [choice(letters) for _ in range(nr_letters)]
    password_symbols = [choice(symbols) for _ in range(nr_symbols)]
    password_numbers = [choice(numbers) for _ in range(nr_numbers)]

    password_list = password_letters + password_symbols + password_numbers
    shuffle(password_list)

    random_password = "".join(password_list)
    password_entry.insert(0, random_password)
    pyperclip.copy(random_password)


# ---------------------------- GET PASSWORD ------------------------------- #
def get_password():
    website = website_entry.get()
    try:
        with open("data.json", "r") as data_file:
            data = json.load(data_file)
    except FileNotFoundError:
        messagebox.showinfo(title="Error", message="No data file found.")

    else:
        if website in data:
            email = data[website]["email"]
            password = data[website]["password"]
            messagebox.showinfo(title=website, message=f"Email: {email}\nPassword: {password}")
        else:
            messagebox.showinfo(title="Website", message=f"No details for {website} found.")


# ---------------------------- SAVE PASSWORD ------------------------------- #
def save_password():
    website = website_entry.get()
    email = email_entry.get()
    password = password_entry.get()

    if len(website) == 0 or len(password) == 0 or len(email) ==0:
        messagebox.showinfo(title="Oops", message="Please make sure you don't leave any fields empty")
    else:
        is_ok = messagebox.askokcancel(title=website, message=f"These are details entered: "
                                                          f"\nEmail: {email} \nPassword: {password}\n "
                                                          f"Is it okay to save?")

        if is_ok:
            new_data = {
                website: {
                    "email": email,
                    "password": password
                }
            }
            try:
                with open("data.json", "r") as data_file:
                    # json.dump(new_data, data_file, indent=4)
                    data = json.loads(data_file)
            except FileNotFoundError:
                with open("data.json", "w") as data_file:
                    json.dump(new_data, data_file, indent=4)
            else:
                data.update(new_data)
                with open("data.json", "w") as data_file:
                    json.dump(data, data_file, indent=4)
            finally:
                website_entry.delete(0, END)
                password_entry.delete(0, END)

# ---------------------------- UI SETUP ------------------------------- #
main_window = Tk()
main_window.title("Password Manager")
main_window.config(padx=50, pady=50)

#Logo
logo_img = PhotoImage(file="../Day29/logo.png")
canvas = Canvas(height=200, width=200, highlightthickness=0)
canvas.create_image(100, 100, image=logo_img)
canvas.grid(column=1, row=0)


#Labels
website_label = Label(text="Website:")
website_label.grid(column=0, row=1)

email_label = Label(text="Email/Username:")
email_label.grid(column=0, row=2)

password_label = Label(text="Password:")
password_label.grid(column=0, row=3)


#Entries
website_entry = Entry(width=21)
website_entry.focus()
website_entry.grid(column=1, row=1, sticky="EW")

email_entry = Entry(width=35)
email_entry.insert(0, "bedabora@hotmail.com")
email_entry.grid(column=1, row=2, columnspan=2, sticky="EW")

password_entry = Entry(width=21)
password_entry.grid(column=1, row=3, sticky="EW")


# #Buttons
generate_password_btn = Button(text="Generate Password", command=gen_password)
generate_password_btn.grid(column=2, row=3, sticky="EW")

search_btn = Button(text="Search", command=get_password)
search_btn.grid(column=2, row=1, sticky="EW")

add_btn = Button(text="Add", width=36, command=save_password)
add_btn.grid(column=1, row=4, columnspan=2, sticky="EW")

main_window.mainloop()
