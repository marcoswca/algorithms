n = input()
i = 1
saida = ''
while(n != 0):
    saida = saida + 'Teste ' + str(i) + '\n' + str(pow(2,n)-1) + '\n'
    i+=1
    n = input()
    if(n!=0):
        saida+='\n'
print(saida)