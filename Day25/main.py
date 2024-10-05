import turtle
import pandas as pd

screen = turtle.Screen()
screen.title("U.S States Game")
image = "blank_states_img.gif"
screen.addshape(image)
turtle.shape(image)

data = pd.read_csv("50_states.csv")
all_states = data["state"].tolist()
guessed_states= []
missed_states= []

while len(guessed_states) < 50:
    answer_state = screen.textinput(title=f"{len(guessed_states)}/50 States Correct", prompt="What's another state's name?").title()

    if answer_state == "Exit":
        for state in all_states:
            if state not in guessed_states:
                missed_states.append(state)
        new_data = pd.DataFrame(missed_states)
        new_data.to_csv("states_to_learn.csv")
        break
    if answer_state in all_states:
        t = turtle.Turtle()
        t.hideturtle()
        t.penup()
        state_data = data[data["state"] == answer_state]
        t.goto(int(state_data.x.item()), int(state_data.y.item()))
        t.write(state_data.state.item())
        guessed_states.append(answer_state)


turtle.mainloop()
# screen.exitonclick()
