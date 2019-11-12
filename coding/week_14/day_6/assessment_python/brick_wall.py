def generate_even_line(width) :
	return "__|___|___|___|__"

def generate_odd_lines(width) :
	return "|___|___|___|___|"

width=5
height=6
even_line
odd_line
for i in range(height) :
	even_line = generate_even_lines(4)
	odd_line = generate_odd_line(4)

	if i % 2==0 :
		print(even_line)
	else :
		print(odd_line)
# height= 6
# width =5
# for i in range(height):
# 	for j in range(width):
# 		if i%2 == 0:
# 			if j == width-1:
# 				print('|___|',end="")
# 			else:
# 				print('|___',end="")
# 		else:
# 			if j == 0:
# 				print('__|',end="")
# 			elif j == width-1:
# 				print('___|__',end="")
# 			else:
# 				print('___|',end="")
# 	print()
