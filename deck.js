function solution(A) {
    let one = ['ac', 'ad', 'ah', 'as'];
    let two = ['2c', '2d', '2h', '2s'];
    let three = ['3c', '3d', '3h', '3s'];
    let four = ['4c', '4d', '4h', '4s'];
    let five = ['5c', '5d', '5h', '5s'];
    let six = ['6c', '6d', '6h', '6s'];
    let seven = ['7c', '7d', '7h', '7s'];
    let eight = ['8c', '8d', '8h', '8s'];
    let nine = ['9c', '9d', '9h', '9s'];
    let jack = ['jc', 'jd', 'jh', 'js'];
    let queen = ['qc', 'qd', 'qh', 'qs'];
    let king = ['kc', 'kd', 'kh', 'ks'];
    let deck = [...one, ...two, ...three, ...four, ...five, ...six, ...seven, ...eight, ...nine, ...jack, ...queen, ...king];
    console.log(deck);
    if (deck.length !== A.length) {
        return false;
    }

    A = [...one, ...two, ...three, ...four, ...five, ...six, ...seven, ...eight, ...nine, ...jack, ...queen, ...king];

    A = A.sort();
    deck = deck.sort();

    for (let i = 0; i < deck.length; i++) {
        let card = deck[i];
        let cardInput = A[i];
        if (card !== cardInput) return false;
    }

    return true;
}

console.log(solution(['ac',
    'ad',
    'ah',
    'as',
    '2c',
    '2d',
    '2h',
    '2s',
    '3c',
    '3d',
    '3h',
    '3s',
    '4c',
    '4d',
    '4h',
    '4s',
    '5c',
    '5d',
    '5h',
    '5s',
    '6c',
    '6d',
    '6h',
    '6s',
    '7c',
    '7d',
    '7h',
    '7s',
    '8c',
    '8d',
    '8h',
    '8s',
    '9c',
    '9d',
    '9h',
    '9s',
    'jc',
    'jd',
    'jh',
    'js',
    'qc',
    'qd',
    'qh',
    'qs',
    'kc',
    'kd',
    'kh',
    'ks']
));