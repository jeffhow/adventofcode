from collections import defaultdict
import re

myinput = []
for line in open('04.txt'):
    vals = line.split(', ')
    myinput.append({'date' : vals[0], 'event' : vals[1]})
'''Test input
    [
    {'date' : '1518-11-01 00:00', 'event' : 'Guard #10 begins shift'},
    {'date' : '1518-11-01 00:05', 'event' : 'falls asleep'},
    {'date' : '1518-11-01 00:25', 'event' : 'wakes up'},
    {'date' : '1518-11-01 00:30', 'event' : 'falls asleep'},
    {'date' : '1518-11-01 00:55', 'event' : 'wakes up'},
    {'date' : '1518-11-01 23:58', 'event' : 'Guard #99 begins shift'},
    {'date' : '1518-11-02 00:40', 'event' : 'falls asleep'},
    {'date' : '1518-11-02 00:50', 'event' : 'wakes up'},
    {'date' : '1518-11-03 00:05', 'event' : 'Guard #10 begins shift'},
    {'date' : '1518-11-03 00:24', 'event' : 'falls asleep'},
    {'date' : '1518-11-03 00:29', 'event' : 'wakes up'},
    {'date' : '1518-11-04 00:02', 'event' : 'Guard #99 begins shift'},
    {'date' : '1518-11-04 00:36', 'event' : 'falls asleep'},
    {'date' : '1518-11-04 00:46', 'event' : 'wakes up'},
    {'date' : '1518-11-05 00:03', 'event' : 'Guard #99 begins shift'},
    {'date' : '1518-11-05 00:45', 'event' : 'falls asleep'},
    {'date' : '1518-11-05 00:55', 'event' : 'wakes up'},
    ]
'''
myinput.sort(key=lambda x:x['date']) # Sort input by date

sleep_totals=defaultdict(int)
i = 0
gid = 0 # Guard ID

# Make new dictionary { gid : total_mins_asleep }
for item in myinput:
    if( 'Guard' in item['event']):
        gid = re.findall('\d+', item['event'])
        gid = int(*gid)
    if( 'asleep' in item['event']):
        asleep = myinput[i]['date'].split()[1]
        asleep = int(asleep[-2:])
        wakes = myinput[i+1]['date'].split()[1]
        wakes = int(wakes[-2:])
        # print(f"{gid} : {asleep}, {wakes}")
        sleep_totals[gid] +=  wakes -asleep
    i+=1

sleepiest = [0,0]
# print(dict(sleep_totals))

for guard in sleep_totals:
    if(sleepiest[1] < sleep_totals[guard]):
        sleepiest[0] = guard
        sleepiest[1] = sleep_totals[guard]
print(f"Sleepiest guard: #{sleepiest[0]} ({sleepiest[1]} mins) ")        

i=0
schedule = defaultdict(int)
# Figure out what minute that guard was asleep the most:
for item in myinput:
    if( 'Guard' in item['event']):
        gid = re.findall('\d+', item['event'])
        gid = int(*gid)
    if( 'asleep' in item['event']):
        if(gid == sleepiest[0]): # I only want the sleepiest dude
            asleep = myinput[i]['date'].split()[1]
            asleep = int(asleep[-2:])
            wakes = myinput[i+1]['date'].split()[1]
            wakes = int(wakes[-2:])
            for j in range(wakes-asleep):
                schedule[asleep+j] += 1
    i+=1

longest = [0,0]                
for minute in schedule:
    if(longest[1] < schedule[minute]):
        longest[0] = minute
        longest[1] = schedule[minute]
print(f"Most frequent minute: #{longest[0]} ({longest[1]} mins) ")        

answer = sleepiest[0] * longest[0]
print(answer)

## Find the most frequent minute out of all the guards (And who is most asleep on that minute)
i=0
minutes = defaultdict(int)
# Figure out what minute that guard was asleep the most:
for item in myinput:
    # if( 'Guard' in item['event']):
    #     gid = re.findall('\d+', item['event'])
    #     gid = int(*gid)
    if( 'asleep' in item['event']):
        # if(gid == sleepiest[0]): # I only want the sleepiest dude
        asleep = myinput[i]['date'].split()[1]
        asleep = int(asleep[-2:])
        wakes = myinput[i+1]['date'].split()[1]
        wakes = int(wakes[-2:])
        for j in range(wakes-asleep):
            minutes[asleep+j] += 1
    i+=1
    
most_frequent_min = [0,0]                
for minute in minutes:
    if(most_frequent_min[1] < minutes[minute]):
        most_frequent_min[0] = minute
        most_frequent_min[1] = minutes[minute]
print(f"Most frequent overall minute: #{minutes[0]} ({minutes[1]} mins) ")   