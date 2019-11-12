set1 = set([1, 2, 3])
set2 = set([2, 3, 4])
set3 = set()

for i in set1:
    if i not in set2:
        set3.add(i)

for i in set2:
    if i not in set1:
        set3.add(i)

print(set3)