console.log('// Question 1 //');

function getChange(Decks) {

    for (let index = 0; index < Decks.length; index++) {
        
        if(Decks[index].substr(-2,1) == "J"){
            Decks[index].replace("J", "11")
        }
        else if(Decks[index].substr(-2,1) == "Q"){
            Decks[index].replace("Q", "12")
        }
        else if(Decks[index].substr(-2,1) == "K"){
            Decks[index].replace("K", "13")
        }
        else if(Decks[index].substr(-2,1) == "A"){
            Decks[index].replace("A", "1")
        } 
    }
    Decks.sort()

    if(Decks.length <52) {
        
        return 0
    }
    var counter = 2
    var numOfDecks = 0
    for (let index = 0; index < Decks.length; index++) {
        if(index == 4 , 8, 12, 16 ,20 , 24, 28, 32, 36, 40, 44, 48){
            counter++
        }
        if(index%52 == 0 ){
            numOfDecks++
            counter = 0
        }
        // console.log(Decks[index].substr(-2,1))
        // if(Decks[index].substr(-2) != counter) return numOfDecks
        
    }
    console.log(counter)
    return numOfDecks

}


test(["2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD"])


function test(...params) {
    // console.log('\n(', ...params, ')\n');
    console.log('\n=>', getChange(...params), '\n\n');
}