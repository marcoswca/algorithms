def isMultipleOf9(number, level):
    if(len(str(number)) == 1 and number != 9):
        return False, level
    elif (number == 9):
        if(level == 0):
            return True, 1
        else:
            return True, level
    else:
        new_number = 0
        for n in str(number):
            new_number += int(n)
        return isMultipleOf9(new_number, level + 1)

def main():
    number = input()
    while number != 0:
        isMultiple, level = isMultipleOf9(number, 0)
        
        if(isMultiple):
            print(str(number) + ' is a multiple of 9 and has 9-degree ' + str(level) + '.')
        else:
            print(str(number) + ' is not a multiple of 9.')
        
        number = input()

if __name__ == "__main__":
    main()