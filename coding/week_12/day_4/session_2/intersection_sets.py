print('Enter Set 1')
set1=set(input())
print('Enter Set 2')
set2=set(input())
set3=set()
for i in set1 :
    for j in set2 :
        if i==j :
            set3.add(i)
print(set3)