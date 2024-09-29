# from colorgram import extract
#
# img_colors = extract("hirst-1.webp", 30)
# colors = [(cl.rgb.r, cl.rgb.g, cl.rgb.b) for cl in img_colors]
import turtle
from turtle import Turtle, Screen
from random import choice
color_list = [(198, 159, 116), (70, 92, 129), (147, 85, 53), (218, 210, 116), (138, 160, 191), (178, 160, 38), (184, 146, 164), (28, 32, 46), (58, 34, 23), (120, 70, 93), (139, 175, 154), (77, 115, 79), (143, 25, 16), (186, 97, 82), (61, 31, 42), (121, 27, 41), (45, 58, 94), (177, 96, 114), (102, 119, 170), (34, 52, 45), (100, 160, 85), (214, 175, 192), (216, 181, 173), (160, 209, 191), (67, 86, 23), (219, 206, 8)]

# print(colors)

brush = Turtle()
brush.speed("fastest")
brush.width(0)
turtle.colormode(255)
spacing = 50
size = 20

brush.penup()
brush.hideturtle()
brush.setheading(225)
brush.forward(300)
brush.setheading(0)
x_dots = 10
y_dots = 5

for y in range(y_dots):
    for x in range(x_dots):
        brush.dot(size, choice(color_list))
        brush.forward(spacing)
    brush.setheading(90)
    brush.forward(spacing)
    brush.setheading(180)
    brush.forward(x_dots*spacing)
    brush.setheading(0)




screen = Screen()
screen.title("Hirst Paiting copy")
screen.exitonclick()