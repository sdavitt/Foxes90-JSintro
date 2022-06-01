people = ['Shoha', 'Brandon', 'Chris', 'Lucas', 'Terrell', 'Ryan']
friends = ['Dylan', 'Sam', 'Brian', 'Derek', 'Kevin', 'Tatyana']

def replaceEvens(arr):
    #loop through our even indexes
    for i in range(0, len(arr), 2):
        # let's use splice just for the sake of using splice
        # array.splice(<index to splice at>, <number of values to remove>, <zero, one, or many values to add in starting at the specified index>)
        #arr.splice(i, 1, 'even index');

        # can be solved without splice - just redefine the value at array index i
        arr[i] = 'even index'


replaceEvens(people)
replaceEvens(friends)

#print(people)
#print(friends)

# Translation of looping a JS object:
animals = {
    'foxes': {
        'Fennec Fox': {
            'habitat': 'desert',
            'food': ['scorpions', 'mealworms', 'small rodents']
        }},
    'whales': ['Blue Whale', 'Humpback Whale', 'Right Whale', 'Narwhal', 'Killer Whale'],
    'humans': 'Homo sapiens'
}

for property in animals:
    #inside of the loop we must use bracket notation
    #print(property, animals[property])
    pass

# Event Loop Flipping Counterexample

def f1():
    o = 0
    for i in range(1000):
        for x in range(1000):
            for y in range(100):
                o += 1
    return o

def f2():
    o = 0
    return o


print('f1 return val:', f1())
print('f2 return val:', f2())
