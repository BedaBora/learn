from turtle import Turtle

MOVE_DIST = 20
class Paddle(Turtle):

    def __init__(self, position):
        super().__init__()
        self.shape("square")
        self.shapesize(stretch_wid=5, stretch_len=1)
        self.color("white")
        self.penup()
        self.goto(position[0], position[1])

    def up(self):
        if self.ycor() < 250:
            self.goto(self.xcor(), self.ycor()+MOVE_DIST)

    def down(self):
        if self.ycor() > -250:
            self.goto(self.xcor(), self.ycor()-MOVE_DIST)