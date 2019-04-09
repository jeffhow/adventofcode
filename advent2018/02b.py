twins=0
triplets=0

file = open('02input.txt')
text = file.read()
myinput = text.split()

def get_answer(a1, a2):
    for i, char in enumerate(a1):
        if(a1[i] != a2[i]):
            a1.pop(i)
            a2.pop(i)
    print(''.join(a1))

while(myinput):
    id_to_check = list( myinput.pop(0) ) # Get the first id
    
    for id_in_list in myinput:
        un_match=0
        current_word = list( id_in_list ) # Next ID to compare
        
        for i, char in enumerate(id_to_check):
            if(char != current_word[i]):
                un_match+=1
            if(un_match>1):
                break
                
        if(un_match == 1):
            print(f'found: {id_to_check} => {current_word}')
            get_answer(id_to_check, current_word)