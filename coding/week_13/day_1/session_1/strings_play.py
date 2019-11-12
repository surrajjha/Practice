def pyramid(row,col):
    pattern=''
    for i in range(0,row):
        for j in range(0,col-i-1):
            pattern+='.'
        for j in range(0,i*2+1):
            if j%2==0:
                pattern+='0'
            else:
                pattern+='.'
        for j in range(0,col-i-1):
            pattern+='.'
        print(pattern)
        pattern=''

# for i in range(row,0,-1):
#         for j in range(0,col-i-1):
#             pattern+='.'
#         for j in range(1,i*2+1):def pyramid(i,j) :
    size = 7
    m = (2 * size) - 2
for i in range(0, size):
    for j in range(0, m):
        print(end=" ")
    m = m - 1 
    for j in range(0, i + 1):
        
        print("* ", end='.')
    print(" ")
print("\n")
print('Enter the number of rows')
i=int(input())
print("Enter no of col")
j=int(input())
print(pyramid(i,j))
#             if j%2==0:
#                 pattern+='0'
#             else:def pyramid(i,j) :
    size = 7
    m = (2 * size) - 2
for i in range(0, size):
    for j in range(0, m):
        print(end=" ")
    m = m - 1 
    for j in range(0, i + 1):
        
        print("* ", end='.')
    print(" ")
print("\n")
print('Enter the number of rows')
i=int(input())
print("Enter no of col")
j=int(input())
print(pyramid(i,j))
#                 pattern+='.'
#         for j in range(0,col-i):
#             pattern+='.'
#         print(pattern)
#         pattern=''

# def rhombus(row,col):
#     pyramid(row,col)
#     inverse_pyramid(row-1,col)

print('Enter the number of rows')
rows=int(input())
cols=rows+1
print('Pyramid')
pyramid(rows,cols)
# print('Reverse Pyramid')
# inverse_pyramid(rows,cols)
# print('Rhombus')
# rhombus(rows,cols) 