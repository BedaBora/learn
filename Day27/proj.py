from tkinter import Label, Tk, Entry, Button

window = Tk()
window.title("Mile to Km Converter")
window.config(width=500, height=300, padx=30, pady=30)

def convert_btn_clicked():
    miles = float(user_input.get())
    km = miles * 1.60934
    converted_text.config(text=f"{km}")

converter_label = Label(text="is equal to")
converter_label.grid(column=0, row=1)

user_input = Entry(width=10)
user_input.grid(column=1, row=0)

converted_text = Label(text="0")
converted_text.grid(column=1, row=1)

calculate_btn = Button(text="Calculate", command=convert_btn_clicked)
calculate_btn.grid(column=1, row=2)

miles_label =Label(text="Miles")
miles_label.grid(column=2, row=0)

km_label =Label(text="Km")
km_label.grid(column=2, row=1)

window.mainloop()