n=str(input('string '))
countLower=0
countUpper=0
for i in n :
    if (i == "a" or i == "e" or i == "i" or i == "o" or i == "u") :
        countLower=countLower+1
    elif  (i=='A' or i == 'E' or i == 'I' or i == 'O' or i == 'U') :
        countUpper+=1
print("lower ",countLower) 
print("upper",countUpper)