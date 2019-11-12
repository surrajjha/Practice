def bubbleSort(arr):
    countSwap=0
    for i in range(len(arr)-1):
        for j in range(len(arr)-1):
            if arr[j]<arr[j+1]:
                countSwap+=1
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
    return arr,countSwap         

arr = [2,4,18,1,0,9,3,4,6,22]
listBeforeSorted,swap = bubbleSort(arr)
print("ListAfterSorting: ", listBeforeSorted)
print("No of Swaps Required: ", swap)




