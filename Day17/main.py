# # Creating a clas. Classes names as pascal casing
# class User:
#
#     #assigning attributes in constructor
#     def __init__(self, user_id: str, username) -> None:
#         self.id = user_id
#         self.username = username
#         self.followers = 0
#         self.following = 0
#
#     #creating a method
#     def follow(self, user):
#         user.followers += 1
#         self.following += 1
#
#     # Override a default method
#     def __str__(self) -> str:
#         return f"User: {self.username}, Id: {self.id}, Followers: {self.followers}, Following: {self.following}"
#
# user_1 = User("001", "Beda")
# user_2 = User("002", "Jack")
# #assigning attribute to class
# # user_1.id = "007"
# # user_1.username = "Beda"
#
# user_1.follow(user_2)
# print(user_1)
# print(user_2)

from data import question_data
from question_model import  Question
from quiz_brain import QuizBrain

question_bank = []

for question in question_data:
    question_bank.append(Question(question["text"], question["answer"]))

quiz = QuizBrain(question_bank)

while quiz.still_has_question():
    quiz.next_question()

quiz.report()
