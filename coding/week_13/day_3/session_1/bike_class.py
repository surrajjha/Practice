class Bike :
    condition="new"
    def __init__(self,model,color,average) :
        self.model=model
        self.color=color
        self.average=average
    def display_bike(self) :
        to_print = "It's a " + self.model + "which is a" + self.color + "and its average is" + self.average
        print(to_print)


my_bike=Bike("Audin A4","Black","18/km")
print(my_bike.color)
my_bike.display_bike()