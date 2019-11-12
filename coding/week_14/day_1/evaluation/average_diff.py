n=int(input())
#print(n)
n1=input()
arr=n1.split(' ')
sum1=0
sum2=0
for i in range(n) :
    if i % 2 == 0 :
        sum1+=int(arr[i])
    elif i % 2 !=0 :
        sum2+=int(arr[i])
#print(sum2)
#print(sum1)
print(sum1-sum2)



