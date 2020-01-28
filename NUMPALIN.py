n = int(input())

def isPalindrome(number):
    for d in range (0, int(len(str(number))/2)):
        if(str(number)[d] != str(number)[len(str(number))-d-1]):
            return 'NO'
    return 'YES'

def sumDigits(number):
    newNumber = 0
    for d in str(number):
        newNumber+=int(d)
    return newNumber

while (n!=0):
    n-=1
    number = input()
    newNumber = sumDigits(number)
    print(isPalindrome(newNumber))
