
def firstOnePosition(position):
    for i in range(len(position)):
        if(position[i]==1):
            return i
    return len(position)

def firstIndexOne(position):
    for i in range(len(position)):
        if(position[i]==1):
            return i+1

def lastIndexOne(position):
    for i in reversed(range(len(position))):
        if(position[i]==1):
            return i+1

def printResult(position):
    print('{0} {1}'.format(firstIndexOne(position), lastIndexOne(position)))

test_case = int(input())

while (test_case != 0):
    [n_elements, k] = map(int, raw_input().split())
    myArray = map(int, raw_input().split())
    currentSum = 0
    position = [0] * len(myArray)
    i = 0
    while (i<n_elements):
        if(currentSum == k):
            printResult(position)
            break
        elif(currentSum > k):
            firstIndex = firstOnePosition(position)
            if(firstIndex>=len(position)):
                print('-1')
                break
            currentSum-=myArray[firstIndex]
            position[firstIndex] = 0
            i = i - 1
        else:
            if(i+1==n_elements):
                print('-1')
                break
            currentSum += myArray[i]
            position[i] = 1
            i+=1