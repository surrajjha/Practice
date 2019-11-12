           


import csv
def write_csv(username,password):
    count = 0
    with open('users.csv', 'a') as csvfile:
        fieldnames = ['username', 'password']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        with open('users.csv') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                if row['username'] == username:
                    print("User already Exists ")
                    count = 1
            if count == 0:
                writer.writeheader()
                writer.writerow({'username': username, 'password' : password})
                print("Registration Successful")
                    
username = input("Enter username ")
password = input("Enter password ")
write_csv(username,password)

           
            
            
                      





