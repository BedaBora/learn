import turtle
from turtle import Turtle, Screen
from random import choice, randint

tim = Turtle()
turtle.colormode(255)
tim.shape("turtle")
colors = ["red", "orange", "lime", "deep sky blue", "sky blue", "lawn green", "light salmon", "indian red", "gold", "blue" ]

tim.speed("fastest")

def get_random_color():
    r = randint(0, 255)
    g = randint(0, 255)
    b = randint(0, 255)
    color = (r, g, b)
    return color

# Draw a square using the turtle
# tim.forward(100)
# for i in range(3):
#     tim.right(90)
#     tim.forward(100)

#Draw a dotted line
# for i in range(15):
#     tim.forward(10)
#     tim.penup()
#     tim.forward(10)
#     tim.pendown()

#draw, triangle, square, pentagon, henxagom,heptagon, octagon, nonagon, decagon
# def draw_shape(num_sides):
#     angle = 360/num_sides
#     for _ in range(num_sides):
#         tim.forward(100)
#         tim.right(angle)
#
# for i in range(3,10):
#     tim.color(colors[i])
#     draw_shape(i)

# Random walk
# turns = 200
# directions = [0, 90, 180, 270]
# tim.pensize(10)
# tim.speed("fastest")
#
#
# for _ in range(turns):
#     tim.color(get_random_color())
#     tim.forward(30)
#     tim.setheading(choice(directions))

# Spirograph
# radius = 100
# tim.speed("fastest")
#
# def draw_spirograph(size_of_gap):
#     for _ in range(int(360/size_of_gap)):
#         tim.color(get_random_color())
#         tim.circle(radius)
#         tim.setheading(tim.heading() + size_of_gap)
#
# draw_spirograph(5)

# Art Dummy

screen = Screen()
screen.title("Timmy The Turtle")
screen.exitonclick()