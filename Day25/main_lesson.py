# data= []
# with open("weather_data.csv", "r") as file:
#     for filedata in file.readlines():
#         data.append(filedata.strip("\n"))
#
# print(data)
# import csv

# with open("weather_data.csv") as data_file:
#     data = csv.reader(data_file)
#     next(data, None) #skip the header in the csv file
#     temperatures = []
#     for row in data:
#         temperatures.append(int(row[1]))
#
#     print(temperatures)

# Data analysis with pandas
# import pandas as pd

# data = pd.read_csv("weather_data.csv")
# print(type(data))
# print(type(data["temp"]))
# print(data.to_dict())
# print(data["temp"].to_list())
# tempdata = data["temp"].to_list()
# avg_temp = sum(tempdata)/len(tempdata)
# print(avg_temp)
# print(data["temp"].mean())
# print(data["temp"].max())

#Get data  in column
# print(data["temp"])
# print(data.temp)

#Get data in row
# print(data[data.day == "Monday"])

# max_temp = max(data.temp)
# print(data[data.temp == max_temp].day)
# monday = data[data.day == "Monday"]
# monday_temp_F = monday.temp[0] * 9/5 +32
# print(monday_temp_F)

#Create dataframe form scratch
# data_dict = {
#     "student" : ["Amy", "James", "Angle"],
#     "scores": [76, 56, 65]
# }
#
# data = pd.DataFrame(data_dict)
# data.to_csv("new_data.csv")
# print(data)

# Analyzing NYC Squirrel data to group into colors of squirrel
# import pandas as pd
#
# squirrel_data = pd.read_csv("2018_Central_Park_Squirrel_Census_-_Squirrel_Data.csv")
# primary_fur_color = squirrel_data["Primary Fur Color"]
# grey_squirrel_count = len(squirrel_data[primary_fur_color == "Grey"])
# red_squirrel_count = len(squirrel_data[primary_fur_color == "Cinnamon"])
# black_squirrel_count = len(squirrel_data[primary_fur_color == "Black"])
#
# data_dict = {
#     "Fur Color": ["Grey", "Cinnamon", "Black"],
#     "Count" : [grey_squirrel_count, red_squirrel_count, black_squirrel_count]
# }
#
# csv_data = pd.DataFrame(data_dict)
# csv_data.to_csv("Squirrel_count.csv")

