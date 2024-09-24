from resource import MENU, resources
from os import system
    
class CoffeeWorld:

    def __init__(self) -> None:
        self.initiate_machine()

    def initiate_machine(self):
        self.turned_off = False
        self.machine_resources = dict(resources)
        self.profit = 0

    def turn_off(self):
        self.initiate_machine()
        self.turned_off = True

    def take_input(self):
        return input("What would you like? (espresso/latte/cappuccino): ").lower() 
    
    def print_report(self):
        print(f"Water: {self.machine_resources["water"]}ml")
        print(f"Milk: {self.machine_resources["milk"]}ml")
        print(f"Coffee: {self.machine_resources["coffee"]}g")
        print(f"Money: ${self.profit}")

    def is_enough_money(self, cost, user_money) -> bool:
        '''check of the money input by user is greater than of equal to the cost of item'''
        if cost > user_money:
            print("Sorry that's not enough money. Money refunded.")
            return False
        else:
            return True
        
    def is_enough_resources(self, required: map, available: map) -> bool:
        '''compare the resources availabe to the resource cost of item'''
        for key, _ in required.items():
            if required[key] > available[key]:
                print(f"Sorry there is not enough {key}.")
                return False
        return True
    
    def process_order(self, reqd_resources, cost) -> None:
        ''' add money to profit and reduce the resources used'''
        #update resources
        water_required = reqd_resources.get("water", 0)
        milk_required = reqd_resources.get("milk", 0)
        coffee_required = reqd_resources.get("coffee", 0)
        self.machine_resources["water"] -= water_required
        self.machine_resources["milk"] -= milk_required
        self.machine_resources["coffee"] -= coffee_required

        #update machine money
        self.profit += cost
        
    def take_money(self) -> float:
        quarter = int(input("How manu quarters?: "))
        dime = int(input("How manu dime?: "))
        nickles = int(input("How manu nickles?: "))
        pennies = int(input("How manu pennies?: "))
        total_money = 0.25*quarter + 0.1*dime + 0.05*nickles + 0.01*pennies
        return round(total_money, 2)

    def start(self):
        while not self.turned_off:
            system('cls')
            user_input = self.take_input()
            print(user_input)
            if user_input == "off":
                self.turn_off()
            elif user_input == "report":
                self.print_report()
            elif user_input in ["espresso", "latte", "cappuccino" ]:
                cost = MENU[user_input]["cost"]
                requirements = MENU[user_input]["ingredients"]
                resource_available = self.is_enough_resources(requirements, self.machine_resources)
                if resource_available:
                    user_money = self.take_money()
                    enough_money = self.is_enough_money(cost, user_money)
                    if enough_money:
                        self.process_order(requirements, cost)
                        if user_money > cost:
                            print(f"Here is your ${user_money-cost} in change.")
                        print(f"Here is your {user_input}. Enjoy!")

            else:
                print(f"We do not offer service for {user_input}. Please try again")

machine = CoffeeWorld()
machine.start()