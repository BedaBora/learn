from tkinter import Tk, PhotoImage, Canvas, Button
import pandas as pd
from random import choice

from Day07.task import index

BACKGROUND_COLOR = "#B1DDC6"
current_card = {}
to_learn = {}
try:
    data = pd.read_csv("data/words_to_learn.csv")
except FileNotFoundError:
    original_data = pd.read_csv("data/french_words.csv")
    to_learn = original_data.to_dict(orient="records")
else:
    to_learn = data.to_dict(orient="records")

def flip_card():
    canvas.itemconfig(card_title, text = "English", fill="white")
    canvas.itemconfig(card_word, text = current_card["English"], fill="white")
    canvas.itemconfig(canvas_image, image=back_card)

def next_card():
    global current_card, flip_timer
    screen.after_cancel(flip_timer)
    current_card = choice(to_learn)
    canvas.itemconfig(card_title, text = "French", fill="black")
    canvas.itemconfig(card_word, text = current_card["French"], fill="black")
    canvas.itemconfig(canvas_image, image=front_card)
    flip_timer = screen.after(3000, func=flip_card)

def is_known():
    to_learn.remove(current_card)
    new_data = pd.DataFrame(to_learn)
    new_data.to_csv("data/words_to_learn.csv", index=False)
    next_card()

screen = Tk()
screen.title("Flashy")
screen.config(height=600, width=800, bg=BACKGROUND_COLOR)
screen.config(padx=50, pady=50)
flip_timer = screen.after(3000, func=flip_card)

#Card
front_card = PhotoImage(file="images/card_front.png")
back_card = PhotoImage(file="images/card_back.png")

canvas = Canvas(height=526, width=800, highlightthickness=0)
canvas_image = canvas.create_image(400, 263, image=front_card)
card_title = canvas.create_text(400, 150, text="", font= ("Ariel", 40, "italic"))
card_word = canvas.create_text(400, 263, text="", font= ("Ariel", 60, "bold"))
canvas.config(bg=BACKGROUND_COLOR)
canvas.grid(column=0, row=0, columnspan=2)

#Right button
check_img = PhotoImage(file="images/right.png")
known_button = Button(image= check_img, highlightthickness=0, command=next_card)
known_button.grid(column=1, row=1)

#Wrong Button
cross_img = PhotoImage(file="images/wrong.png")
unknown_button = Button(image= cross_img, highlightthickness=0, command=next_card)
unknown_button.grid(column=0, row=1)

next_card()

screen.mainloop()
