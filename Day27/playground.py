def add(*args): # take n no of arguments
    print(type(args)) # is a tuple
    print(sum(args))

def calculate(**kwargs): #take n no of keyword arguments
    print(kwargs) # a dictionary of arguments
    for key, val in kwargs.items():
        print(key, val)

add(1,2,3,4,5)

calculate(add=3, multiply=4)

class Car:
    def __init__(self, **kw):
        self.make = kw.get("make")
        self.model = kw.get("model")

    def __str__(self):
        return f"Make: {self.make}; Model: {self.model}"
my_car = Car(make="Nissan")
print(my_car)