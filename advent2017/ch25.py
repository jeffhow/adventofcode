checksum = [0]
state = 'A'
i=0

for index in range(1, 12172063):

# def turing():
    # global checksum
    # global state
    # global i
    if( state=='A' ):                # State A #####
        if(checksum[i] == 0):        # If 0
            checksum[i]=1            # Change to 1
            if( len(checksum) > i):  # end of list?
                checksum.append(0)   # append 0
            i+=1                     # Move right
            state = 'B'              # Continue B
            
        else:                        # If 1
            checksum[i]=0            # Change to 0
            if( i-1 < 0 ):           # beginning of list?
                checksum.insert(0,0) # preppend 0
            else:
                i -= 1               # Move left
            state = 'C'              # Continue C
            
    elif(state=='B'):                # State B #####
        if(checksum[i]==0):
            checksum[i]=1
            # Move left
            if( i-1 < 0 ):           # beginning of list?
                checksum.insert(0,0) # preppend 0
            else:
                i -= 1               # Move left
            state='A'                # Continue A
        else:
            # checksum[i]=0 # write the value 1
            if( len(checksum) > i):  # end of list?
                checksum.append(0)   # append 0
            i+=1                     # Move right
            state = 'D'              # Continue D
    
    elif(state=='C'): # State C
        if(checksum[i]==0):
            checksum[i]=1
            if( len(checksum) > i):  # end of list?
                checksum.append(0)   # append 0
            i+=1                     # Move right
            state = 'D'              # Continue D
        else:
            checksum[i]=0
            if( len(checksum) > i):  # end of list?
                checksum.append(0)   # append 0
            i+=1                     # Move right
            state = 'C'              # Continue C
    
    elif(state=='D'): # State D
        if(checksum[i]==0):
            # Write 0
            # Move left
            if( i-1 < 0 ):           # beginning of list?
                checksum.insert(0,0) # preppend 0
            else:
                i -= 1               # Move left
            state='B'                # Continue B
        else:
            checksum[i]=0
            # Move Right
            if( len(checksum) > i):  # end of list?
                checksum.append(0)   # append 0
            i+=1                     # Move right
            state = 'E'              # Continue D
            
    
    elif(state=='E'): # State E
        if(checksum[i]==0):
            checksum[i]=1
            # Move Right
            if( len(checksum) > i):  # end of list?
                checksum.append(0)   # append 0
            i+=1                     # Move right
            state = 'C'              # Continue C
        else:
            # Write 1
            # Move left
            if( i-1 < 0 ):           # beginning of list?
                checksum.insert(0,0) # preppend 0
            else:
                i -= 1               # Move left
            state='F'                # Continue F


# for i in range(0, 10):
#     turing()
    
# print(checksum)
out_file = open('checksum.txt', 'w')

out_file.write('0')
for n in checksum:
    out_file.write(str(n))
out_file.write('0')

print("Alright, all done.")

out_file.close()