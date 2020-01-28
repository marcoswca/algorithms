n = input()
testcase = 0
while (n != 0):
    testcase+=1
    case = raw_input().split()
    for c in range(0, n):
        if(int(case[c]) == c+1):
            print("Teste {0} \n{1}".format(testcase, case[c]))
            break
    n = input()
    