#Count the number for students from India and Pakistan
count=0
count1=0
fi=open('marks_rand_2000.txt','r')
for line in fi:
    if "India" in line:
        count=count+1
    elif "Pakistan" in line :
         count1=count1+1
print("India" ,count)
print("Pakistan" ,count1)
fi.close()

#Total no of students who scored below 50 marks
count = 0
fi = open("marks_rand_2000.txt", "r")
for line in fi:
    fline = line.split(" ")
    if int(fline[0]) < 50:
        count = count+1
print("lessthan 50 :" ,count) 
fi.close() 

#Total no of students who scored above 50 marks
count= 0
fi=open("marks_rand_2000.txt","r")
for line in fi :
    fline = line.split(' ')
    if int(fline[0]) > 50 :
        count=count+1
print("greater than 50 :" ,count)
fi.close()

#No of students who scored exactly 50 marks (Country wise)
count= 0
count1=0
fi=open("marks_rand_2000.txt","r")
for line in fi :
    fline = line.split(' ')
    if int(fline[0])==50 and fline[1]=="Pakistan" :
        count=count+1
    elif int(fline[0]) == 50 and fline[1] == "India" :
        count1=count+1
print((count,"Pakistan"))
print((count1,"India"))
fi.close()

#Create a file called marks_india.txt and marks_pakistan.txt based on the country of the students (They should not have the country name in the file)
masterfile = open("marks_rand_2000.txt", "r")
fi = open('marks_india.txt', "w")
fp = open('marks_pakistan.txt' , "w")
for line in masterfile :
    fline=line.split(' ')
    if(fline[1]=='India') :
        fi.write(fline[0] + " " +fline[2])
    elif(fline[1]=='Pakistan') :
        fp.write(fline[0] + " " +fline[2])

masterfile.close()
fi.close()
fp.close()

#Create a file called marks_100.txt with all the ids of the students who scored 100 marks (It should not have the marks column)
masterfile = open('marks_india.txt' ,'r')
fi = open("marks_100.txt" , 'w')
for line in masterfile :
    fline =line.split(' ')
    #print(fline)
    if fline[0] =="100" :
        fi.write(fline[1])
masterfile.close()
fi.close()





