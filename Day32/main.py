# from smtplib import SMTP
#
# my_email = "numinus1@gmail.com"
# app_password = "epmz ipea fqnr jabh"
#
# with SMTP("smtp.gmail.com") as connection:
#     connection.starttls()
#     connection.login(user=my_email, password=app_password)
#     connection.sendmail(from_addr=my_email,
#                         to_addrs="beda.banking@gmail.com",
#                         msg = "Subject:Hellooooooo\n\nHello")
#

# from datetime import datetime
#
# now = datetime.now()
# print(now.year)
# SEND QUOTE OF THE DAY THROUGH EMAIL

# from datetime import datetime
# from smtplib import SMTP
# from random import choice
#
# with open("quotes.txt", "r") as quotes_file:
#     quotes = quotes_file.readlines()
#
# now = datetime.now()
# if now.weekday() == 1:
#     my_email = "numinus1@gmail.com"
#     app_password = "epmz ipea fqnr jabh"
#
#     with SMTP("smtp.gmail.com") as connection:
#         connection.starttls()
#         connection.login(user=my_email, password=app_password)
#         connection.sendmail(from_addr=my_email,
#                             to_addrs="beda.banking@gmail.com",
#                             msg = f"Subject:Quote of the day\n\n{choice(quotes)}")

from datetime import datetime
from pandas import read_csv
from random import randint
from smtplib import SMTP

my_email = "numinus1@gmail.com"
app_password = "epmz ipea fqnr jabh"

today = (datetime.now().month, datetime.now().day)
data = read_csv("birthdays.csv")

birthdays_dict = {(data_row["month"], data_row["day"]): data_row for (index, data_row) in data.iterrows()}

if today in birthdays_dict:
    birthday_person = birthdays_dict[today]
    file_path = f"letter_templates/letter_{randint(1,3)}.txt"
    with open(file_path), "r" as letter_file:
        contents = letter_file.read()
        contents = contents.replace("[NAME]", birthday_person["name"])

    with SMTP("smtp.gmail.com") as connection:
        connection.starttls()
        connection.login(user=my_email, password=app_password)
        connection.sendmail(from_addr=my_email,
                            to_addrs="beda.banking@gmail.com",
                            msg = f"Subject:Happy Birthday!!\n\n{contents}")
