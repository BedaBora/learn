from turtle import Turtle
STARTING_POSITION = (0, -280)
MOVE_DISTANCE = 10
FINISH_LINE_Y = 280


class Player(Turtle):

    def __init__(self) -> None:
        super().__init__()
        self.penup()
        self.shape("turtle")
        self.reset_position()

    def move_up(self):
        self.goto(self.xcor(), self.ycor()+MOVE_DISTANCE)

    def reset_position(self):
        self.setheading(90)
        self.goto(STARTING_POSITION)

    def is_at_finish_line(self):
        if self.ycor() >= FINISH_LINE_Y:
            return True
        return False
