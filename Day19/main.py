from turtle import Turtle, Screen
from random import randint

# tim = Turtle()
screen = Screen()

# def move_forward():
#     tim.forward(10)
#
# screen.listen()
# screen.onkey(key="space", fun=move_forward)

#Etch a sketch

# def move_forward():
#     tim.forward(10)
#
# def move_backward():
#     tim.backward(10)
#
# def rotate_clockwise():
#     tim.setheading(tim.heading() + 10)
#
# def rotate_anticlockwise():
#     tim.setheading(tim.heading() - 10)
#
# def reset():
#     tim.reset()
#
# screen.listen()
# screen.onkey(key = "Up", fun = move_forward)
# screen.onkey(key = "Down", fun = move_backward)
# screen.onkey(key = "Left", fun = rotate_clockwise)
# screen.onkey(key = "Right", fun = rotate_anticlockwise)
# screen.onkey(key = "c", fun= reset)

# Turtle Race
class MyTurtle(Turtle):

    def __init__(self, color):
        super().__init__("turtle")
        self.color(color)
        self.penup()

    def start_position(self, y ):
        self.goto(-230, y)

    def race(self):
        self.forward(randint(1,10))

    def has_won(self):
        return self.xcor() > 230

is_race_on = False
colors = ["red", "orange", "yellow", "green", "blue", "purple"]
y_pos = [-70, -40, -10, 20, 50, 80]
all_turtles = []

screen.setup(width=500,height=400)
user_bet = screen.textinput(title="Make your Bet", prompt="Which turtle will win the race")

for turtle_index in range(len(colors)):
    new_turtle = MyTurtle(colors[turtle_index])
    new_turtle.start_position(y_pos[turtle_index])
    all_turtles.append(new_turtle)

if user_bet:
    is_race_on = True

while is_race_on:
    for turtle in all_turtles:
        if turtle.has_won():
            is_race_on = False
            winning_turtle = turtle.pencolor()
            if user_bet == winning_turtle:
                print(f"You've Won! {winning_turtle} turtle is the winner!")
            else:
                print(f"You've Lost! {winning_turtle} turtle is the winner!")
        turtle.race()

screen.exitonclick()