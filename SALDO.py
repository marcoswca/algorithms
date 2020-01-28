from sys import maxint 
total_inputs = input()
result = ''
count_test = 1
while(total_inputs != 0):
    response = []
    max_end_here = 0
    max_so_far = -maxint - 1
    for i in xrange (0, total_inputs):
        case = map(int, raw_input().strip().split())

        max_end_here = max_end_here + case[0] - case[1]

        if(max_so_far <= max_end_here):
            max_so_far = max_end_here
            response.append(1)
        else:
            
    initial = None
    last = None

    for i in xrange (0, len(response)):
        if(response[i] == 1 and initial == None):
            initial = i + 1
        elif(response[i] == 0):
            initial = None
    
    for j in reversed(xrange(0, len(response))):
        if(response[j] == 1 and last == None):
            last = j + 1
        elif(response[j] == 0):
            last = None
    
    result += 'Teste ' + str(count_test)
    result += '\n' + str(initial) + ' ' + str(last) + '\n'
    
    count_test += 1

    total_inputs = input()

print result
