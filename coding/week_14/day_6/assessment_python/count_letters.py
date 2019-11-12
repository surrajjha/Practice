str1=str(input('Enter a String '))
dict = {}
for i in str1 :
    keys=dict.keys()
    #print(keys)
    if i in keys :
        dict[i]+=1
    elif i ==' ' :
        #dict[i]=''
        pass
    else :
        dict[i]=1
for key, value in dict.items():
    print(key, value)
