class Animal:
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def speak(self):
        return "The animal makes a sound."

    def describe(self):
        return f"{self.name} is a {self.age}-year-old {self.species}."

    def __str__(self):
        return f"Animal Object: {self.name} ({self.species})"

class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age, "Dog")
        self.breed = breed

    def speak(self):
        return "ГАВ ГАВ САБАКА ГОВОРИТ ГАВ ГАВ."

    def wag_tail(self):
        return f"{self.name} is wagging his tail very happily."

class Cat(Animal):
    def __init__(self, name, age, indoor=True):
        super().__init__(name, age, "Cat")
        self.is_indoor = indoor

    def speak(self):
        return "MIAOUW."

    def purr(self):
        return f"{self.name} is purring."