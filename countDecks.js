function countDecks(cardsInput) {

  let deck = {
    'AS': 0, 'AC': 0, 'AD': 0, 'AH': 0,
    '2S': 0, '2C': 0, '2D': 0, '2H': 0,
    '3S': 0, '3C': 0, '3D': 0, '3H': 0,
    '4S': 0, '4C': 0, '4D': 0, '4H': 0,
    '5S': 0, '5C': 0, '5D': 0, '5H': 0,
    '6S': 0, '6C': 0, '6D': 0, '6H': 0,
    '7S': 0, '7C': 0, '7D': 0, '7H': 0,
    '8S': 0, '8C': 0, '8D': 0, '8H': 0,
    '9S': 0, '9C': 0, '9D': 0, '9H': 0,
    'TS': 0, 'TC': 0, 'TD': 0, 'TH': 0,
    'JS': 0, 'JC': 0, 'JD': 0, 'JH': 0,
    'QS': 0, 'QC': 0, 'QD': 0, 'QH': 0,
    'KS': 0, 'KC': 0, 'KD': 0, 'KH': 0
  };

  let myCards = Object.keys(deck);

  for (let card of cardsInput) {
    deck[card.trim().toUpperCase()] += 1;
  }

  let totalOfDecks = Number.MAX_SAFE_INTEGER + 1;

  for (let card of myCards) {
    if (deck[card] < totalOfDecks) {
      totalOfDecks = deck[card];
    }
  }

  return totalOfDecks;
}


test([
  '2S', '2C', '2D', '2H', '3S', '3C', '3D', '3H', '4S', '4C', '4D', '4H', '5S', '5C', '5D', '5H', '6S', '6C', '6D',
  '6H', '7S', '7C', '7D', '7H', '8S', '8C', '8D', '8H', '9S', '9C', '9D', '9H', 'TS', 'TC', 'TD', 'TH', 'JS', 'JC',
  'JD', 'JH', 'QS', 'QC', 'QD', 'QH', 'KS', 'KC', 'KD', 'KH', 'AS', 'AC', 'AD', 'AH', '2S', '2C', '2D', '2H', '3S',
  '3C', '3D', '3H', '4S', '4C', '4D', '4H', '5S', '5C', '5D', '5H', '6S', '6C', '6D', '6H', '7S', '7C', '7D', '7H',
  '8S', '8C', '8D', '8H', '9S', '9C', '9D', '9H', 'TS', 'TC', 'TD', 'TH', 'JS', 'JC', 'JD', 'JH', 'QS', 'QC', 'QD',
  'QH', 'KS', 'KC', 'KD', 'KH', 'AS', 'AC', 'AD', 'AH', '2S', '2C', '2D', '2H', '3S', '3C', '3D', '3H', '4S', '4C',
  '4D', '4H', '5S', '5C', '5D', '5H', '6S', '6C', '6D', '6H', '7S', '7C', '7D', '7H', '8S', '8C', '8D', '8H', '9S',
  '9C', '9D', '9H', 'TS', ' TC', 'TD', 'TH', 'JS', 'JC', 'JD', 'JH', 'QS', 'QC', 'QD', 'QH', 'KS', 'KC', 'KD', 'KH',
  'AS', 'AC', 'AD'
]);

function test(...params) {
  console.log(countDecks(...params));
}
