import time
from turtle import Screen
from player import Player
from car_manager import CarManager
from scoreboard import Scoreboard

screen = Screen()
screen.setup(width=600, height=600)
screen.tracer(0)

player = Player()
car_manager = CarManager()
score_board = Scoreboard()

game_is_on = True
screen.listen()
screen.onkeypress(key="Up", fun=player.move_up)

while game_is_on:
    time.sleep(0.1)
    screen.update()
    car_manager.create_car()
    car_manager.move_car()

    #Detect collision with car
    for car in car_manager.all_cars:
        if car.distance(player) <= 20:
            game_is_on = False
            score_board.game_over()

    # Detect successful crossing
    if player.is_at_finish_line():
        player.reset_position()
        score_board.level_up()
        car_manager.level_up()

screen.exitonclick()