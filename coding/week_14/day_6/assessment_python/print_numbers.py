n1=int(input('Enter starting No '))
n2=int(input('Enter Ending No '))
for i in range(n1+1,n2+1) :
    if i % 2 ==0 and i % 3 ==0 and i % 5 ==0:
        print('$')
    elif i % 3 ==0 and i % 5 ==0 :
        print('*')
    elif i % 2 ==0 and i % 5 ==0 :
        print('!')
    elif i % 2 ==0 and i % 3 ==0 :
        print('^')
    elif i % 5 == 0 :
        print('%')
    elif i % 3 == 0 :
        print('#')
    elif i % 2 == 0 :
        print('@')
    else :
        print(i)