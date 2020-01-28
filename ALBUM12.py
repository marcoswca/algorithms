try:
    def isPossible(lista, album):
        acum = 0

        for photo in lista:
            if(photo[1] > album[1]):
                return False

            acum += photo[0]

            if(acum > album[0]):
                return False

        return True

    album = map(int,raw_input().split())
    album_v = [album[1], album[0]]

    listaDeFotos = []
    possibilidade1 = []
    possibilidade2 = []
    possibilidade3 = []
    possibilidade4 = []

    photo1 = map(int , raw_input().split())
    photo2 = map(int , raw_input().split())

    possibilidade1.append(photo1)
    possibilidade1.append(photo2)

    possibilidade2.append([photo1[1], photo1[0]])
    possibilidade2.append(photo2)

    possibilidade3.append(photo1)
    possibilidade3.append([photo2[1], photo2[0]])


    possibilidade4.append([photo1[1], photo1[0]])
    possibilidade4.append([photo2[1], photo2[0]])

    p = isPossible(possibilidade1, album_v) or isPossible(possibilidade2, album_v) or isPossible(possibilidade3, album_v) or isPossible(possibilidade4, album_v) or isPossible(possibilidade1, album) or isPossible(possibilidade2, album) or isPossible(possibilidade3, album) or isPossible(possibilidade4, album) 

    if(p):
        print 'S'
    else:
        print 'N'

except:
    print 0