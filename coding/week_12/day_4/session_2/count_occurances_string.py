def count_Occurence(str1):
    dict = {}
    for n in str1:
        keys = dict.keys()
        if n in keys:
            dict[n] += 1
        else:
            dict[n] = 1
    return dict
str1=input("Enter a string ")
print(count_Occurence(str1))