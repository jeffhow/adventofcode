twins=0
triplets=0

file = open('02input.txt')
text = file.read()
myinput = text.split()

for word in myinput:
    count=0
    letters = set(word) # makes a set of unique chars
    has_double=False
    has_triple=False
    for char in letters:
        count = word.count(char)
        
        if(count > 1):
            # print(word)
            # print(letters)
            # print(f'count: {count}: {char}')

            if(count%2==0 and not has_double):
                twins+=1
                has_double = True
            if(count%3==0 and not has_triple):
                triplets+=1
                has_triple = True
                
print(f'{twins} x {triplets} = {twins*triplets}')