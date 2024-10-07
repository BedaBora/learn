# import tkinter
from tkinter import *

window = Tk()
window.title("My GUI Program")
window.minsize(width=500, height=300)
window.config(padx=20, pady=20) #add padding / can be done for a particular widget

def button_clicked():
    my_label["text"] = my_input.get()


#LABEL
my_label = Label(text = "I am a Label", font=("Arial", 24, "italic"))
#different ways to set properties of an object in tkinter
# my_label["text"] = "New Text"
my_label.config(text="New Text")
# my_label.pack() # if we don't specify the side argument, it defaults to center. this is python default arguments
# Other ways of placing a widget
# my_label.place(x=100, y=20)
my_label.grid(column=0, row=0)

#BUTTON
my_button = Button(text="Click Me", command=button_clicked)
# my_button.pack()
my_button.grid(column=1, row=1)

#User Input
my_input = Entry(width=10)
# my_input.get() # Gets test in entry
# my_input.pack()
my_input.grid(column=2, row=2)

#Layout options are incompatible with each other. if you use a grid, you need to use grid for every other widget

# #Text Box
# text = Text(width=30, height=10)
# text.focus() #Puts cursor in textbox
# text.insert(END, "Example of a multi-line text. lalalalal")
# text.pack()
#
# def on_spin_click():
#     print(my_spinbox.get())
# #SPin box or a counter box
# my_spinbox = Spinbox(from_=0, to=50, command= on_spin_click)
# my_spinbox.pack()
#
#
# def scale_used(value):
#     print(value)
# #Scale - a slider to change values
# my_scale = Scale(from_=0, to=100, command=scale_used)
# my_scale.pack()
#
#
# #Checkbox
# def checkbutton_used():
#     print(checked_state.get())
# checked_state = IntVar()
# my_checkbutton = Checkbutton(text="is on?", variable=checked_state, command=checkbutton_used)
# my_checkbutton.pack()
#
#
# #Radio buttons
# def on_radio_click():
#     print(radio_state.get())
#
# radio_state = IntVar()
# radio_button1 = Radiobutton(text="Option 1", variable=radio_state, value=1, command=on_radio_click)
# radio_button2 = Radiobutton(text="Option 2", variable=radio_state, value=2, command=on_radio_click)
# radio_button1.pack()
# radio_button2.pack()
#
#
# def list_box_used(element):
#     print(list_box.get(list_box.curselection()))
# #List box
# fruits = ["Apple", "Banana", "Orange", "Pear"]
# list_box = Listbox()
# for index, item in enumerate(fruits):
#     list_box.insert(index, item)
# # list_box.index(1, tuple(fruits))
# list_box.bind("<<ListboxSelect>>", list_box_used)
# list_box.pack()




window.mainloop()
