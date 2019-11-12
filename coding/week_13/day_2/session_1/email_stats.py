email = open('emails_rand.txt','r')
lines = sorted(email.readlines())
#print(lines)
line=set(lines)
print(len(line))


