a = set([10, 20, 30,40])
b = set([100, 30, 40,80,60])
c=set([])
for i in a  :
    if i not in b :
        c.add(i)
print(c)