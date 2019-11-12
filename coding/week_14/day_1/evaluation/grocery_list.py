def groceries(item,quantity):
    with open('groceries.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        arrItem = []
        arrQuantity = []
        arr_item = []
        arr_quantity = []
        for row in reader:
            arrItem.append(row['item'])
            arrQuantity.append(int(row['quantity']))
    if item in arrItem:
        arrQuantity[arrItem.index(item)] += int(quantity)
        arr_item.append(row['item'])
        arr_quantity.append(int(row['quantity']))
    if item in arr_item:
        arr_quantity[arr_item.index(item)] += int(quantity)
    else:
        arrItem.append(item) 
        arrQuantity.append(quantity)
        arr_item.append(item) 
        arr_quantity.append(quantity)
    with open('groceries.csv', 'w') as csvfile:
        fieldnames = ['item', 'quantity']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for j in range(len(arrItem)):
            writer.writerow({'item': arrItem[j] ,'quantity': arrQuantity[j] })     
        for j in range(len(arr_item)):
            writer.writerow({'item': arr_item[j] ,'quantity': arr_quantity[j] })     


data = input("Enter item and quantity(Separate with Comma) ")