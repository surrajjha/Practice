
print("Enter your income:")
income = int(input())
print("Enter your savings:")
savings = int(input())

def tax_calculator(income, savings):
    # income_tax = 0
    # savings_tax = 0
    # total_tax = 0
    total_amount = income + savings

    if income <= 250000:
        income_tax = 0
    elif income > 250000 and income <= 500000:
        income_tax = (income - 250000) * 0.1
    elif income > 500000 and income <= 1000000:
        income_tax = (income - 250000) * 0.2
    elif income > 1000000:
        income_tax = (income - 250000) * 0.3

    if total_amount <= 500000:
        savings_tax = savings * 0.5
    elif total_amount > 500000 and total_amount <= 1000000:
        savings_tax = savings * 0.3
    elif total_amount > 1000000:
        savings_tax = savings * 0.1

    if savings_tax > 50000:
        savings_tax = 50000

    # print(income_tax,savings_tax)
    total_tax = income_tax + savings_tax

    return total_tax

print("Your tax amount is:")
print(tax_calculator(income, savings)) 




