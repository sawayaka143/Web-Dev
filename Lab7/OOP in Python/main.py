from models import Dog, Cat

def run_simulation():
    buddy = Dog("Theydolf Tinkler", 3, "German Shepherd")
    mittens = Cat("Musya", 5, indoor=True)

    pets = [buddy, mittens]

    for pet in pets:
        print(f"Checking: {pet}")
        print(f"Description: {pet.describe()}")
        
        print(f"Sound: {pet.speak()}")
        
        if isinstance(pet, Dog):
            print(f"Action: {pet.wag_tail()}")
        elif isinstance(pet, Cat):
            print(f"Action: {pet.purr()}")
        
        print("—" * 30)

if __name__ == "__main__":
    run_simulation()