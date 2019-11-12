print('Enter Set 1')
set1=set(input())
print('Enter Set 2')
set2=set(input())
status=False
for i in set1 :
    if i  in set2 :
        status=True
    else :
        status=False
print("Am I subset ?" ,status)

