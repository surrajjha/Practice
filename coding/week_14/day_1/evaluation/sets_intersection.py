# a = {"a", "b", "c", "d", "e"}
# b = {"a", "e", "f", "h", "k"}
# c = {"a", "b", "c", "z", "m"}
a=str(input('enter set 1 '))
b=str(input('enter set 2 '))
c=str(input('enter set 3 '))

commonset=''
for i in a :
    for j in b :
        for  k in c  :
            if i==j==k :
                commonset+=i
               
print("common set is",commonset)
               

