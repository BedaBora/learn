from turtle import Turtle

ALIGNMENT= "center"
FONT = ("Courier", 12, "normal")

class Scoreboard(Turtle):

    def __init__(self):
        super().__init__()
        self.penup()
        self.score = 0
        with open('data.txt', 'r') as data:
            self.high_score = int(data.read())
        self.goto(x=0, y=280)
        self.color("white")
        self.hideturtle()
        self._update_score()

    def increase_score(self):
        self.score += 1
        self._update_score()

    def _update_score(self):
        self.clear()
        self.write(f"Score: {self.score} High Score: {self.high_score}", align=ALIGNMENT, font=FONT)

    def reset(self):
        self.high_score = max(self.score, self.high_score)
        with open('data.txt', 'w') as data:
            data.write(f"{self.high_score}")
        self.score = 0
        self._update_score()

    # def game_over(self):
    #     self.goto(0,0)
    #     self.write("GAME OVER", align=ALIGNMENT, font=FONT)