n = int(input())
originalArray = []
while(n>0):
    element = int(input())
    if(originalArray.count(element) == 0):
        originalArray.append(element)
    n-=1

order = ''
reverse = ''
for i in range(0, len(originalArray)):
    order+=str(originalArray[i])+' '
    reverse+=str(originalArray[len(originalArray)-i-1])+' '

print(order)
print(reverse)
