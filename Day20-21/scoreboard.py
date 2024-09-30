from turtle import Turtle

ALIGNMENT= "center"
FONT = ("Courier", 12, "normal")

class Scoreboard(Turtle):

    def __init__(self):
        super().__init__()
        self.penup()
        self.score = 0
        self.goto(x=0, y=280)
        self.color("white")
        self.hideturtle()
        self._update_score()

    def increase_score(self):
        self.clear()
        self.score += 1
        self._update_score()

    def _update_score(self):
        self.write(f"Score: {self.score}", align=ALIGNMENT, font=FONT)

    def game_over(self):
        self.goto(0,0)
        self.write("GAME OVER", align=ALIGNMENT, font=FONT)