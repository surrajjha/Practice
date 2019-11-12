import csv
def read_csv():
    arrRed = []
    arrRedName = []
    arrGreen = []
    arrGreenName = []

    with open('colornames.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if "Red" in row["name"]:
                arrRed.append(row["hex"])
                arrRedName.append(row["name"])

            if "Green" in row["name"]:
                arrGreen.append(row["hex"])
                arrGreenName.append(row["name"])
        return arrRed, arrRedName,arrGreen, arrGreenName
             

def write_csv():
    arrRed, arrRedName,arrGreen,arrGreenName=read_csv()

    with open('colors_red.csv', 'w') as csvfile:
        fieldnames = ['name','hex'] 
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for j in range(len(arrRed)):
            writer.writerow({'name': arrRedName[j] ,'hex': arrRed[j]})  
    

    with open('colors_green.csv', 'w') as csvfile:
        fieldnames = ['name','hex'] 
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for j in range(len(arrGreen)):
            writer.writerow({'name': arrGreenName[j] ,'hex': arrGreen[j]})
write_csv()