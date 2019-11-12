count=0
f=open('random_ids.txt','r')
for line in f:
    if "masai" in line:
        count=count+1
print(count)
f.close()