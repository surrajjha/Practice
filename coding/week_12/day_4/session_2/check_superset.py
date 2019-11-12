print('Enter Set 1')
set1=set(input())
print('Enter Set 2')
set2=set(input())
status=False
for i in set2 :
    if i  in set1 :
        status=True
    else :
        status=False
print(" Am I superset ? ",status)
