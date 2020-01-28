consumo = input()
faixa1 = 7
faixa4 = 0
faixa3 = 0
faixa2 = 0

if(consumo>=101):
    faixa4 = int(consumo - 100) *5
    consumo -= (consumo - 100)
if(consumo >= 31 and consumo <= 100):
    faixa3 = int(consumo - 30) *2
    consumo -= (consumo - 30)
if(consumo >= 11 and consumo <= 30):
    faixa2 = int(consumo - 10) *1
    consumo -= (consumo - 10)
total = faixa4 + faixa3 + faixa2 + faixa1
print total
