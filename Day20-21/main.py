from turtle import Screen
from snake import Snake
from time import sleep

screen = Screen()
screen.setup(width=600, height=500)
screen.colormode(255)
screen.bgcolor("black")
screen.title("My Snake game")
screen.tracer(0) # to enable smooth animation

snake = Snake()

is_game_over = False

screen.listen()
screen.onkey(key="Up", fun=snake.up)
screen.onkey(key="Down", fun=snake.down)
screen.onkey(key="Left", fun=snake.left)
screen.onkey(key="Right", fun=snake.right)

screen.update()
while not is_game_over:
    screen.update() #update the screen only after the snake move has been completed
    sleep(0.1)
    snake.move()

screen.exitonclick()
