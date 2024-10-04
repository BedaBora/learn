from turtle import Screen
from snake import Snake
from time import sleep
from food import Food
from scoreboard import Scoreboard

screen = Screen()
screen.setup(width=600, height=600)
screen.colormode(255)
screen.bgcolor("black")
screen.title("My Snake game")
screen.tracer(0) # to enable smooth animation

snake = Snake()
food = Food()
scoreboard = Scoreboard()

is_game_over = False

screen.listen()
screen.onkey(key="Up", fun=snake.up)
screen.onkey(key="Down", fun=snake.down)
screen.onkey(key="Left", fun=snake.left)
screen.onkey(key="Right", fun=snake.right)

screen.update()

def snake_wall_collision():
    collided_with_wall = snake.head.xcor() > 280 or snake.head.xcor() < -280 or snake.head.ycor() > 280 or snake.head.ycor() < -280

    return collided_with_wall

def snake_body_collision():
    for segment in snake.segments[1:]:
        if snake.head.distance(segment) < 10:
            return True
    return False

while not is_game_over:
    screen.update() #update the screen only after the snake move has been completed
    sleep(0.1)
    snake.move()

    #Detect collision with food
    if snake.head.distance(food) < 15:
        food.refresh()
        snake.grow()
        scoreboard.increase_score()

    #Detect collision with wall or tail
    if snake_wall_collision() or snake_body_collision():
        scoreboard.reset()
        snake.reset()

screen.exitonclick()
