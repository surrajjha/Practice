
import csv
def read_csv(username,password):
    flagSuccess = False
    flagPassword = False
    flagNotFound = False
    with open('users.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row['username'] == username and row['password'] == password:
                flagSuccess = True
            elif row['username'] == username and row['password'] != password:
                flagPassword = True
            elif row['username'] != username and row['password'] != password:
                flagNotFound = True
        if flagSuccess == True:
            print("Login Successful")
        elif flagPassword == True:
            print("Wrong Password ")
        elif flagNotFound == True:
            print("User Not Found")

username = input("Enter Username ")
password = input("Enter Password ")
read_csv(username,password)