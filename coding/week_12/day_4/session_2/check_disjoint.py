print('Enter Set 1')
set1=set(input())
print('Enter Set 2')
set2=set(input())
status = False
for i in set1 :
    for j in set2 :
        if i==j :
            status=True
            break
        else :
            status = False
if status :
    print(" disjoint")
else :
    print(" not disjoint")
           