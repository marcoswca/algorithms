function solution(A) {
    A = A * 100;
    let coins = [100, 50, 25, 10, 5, 1];
    let moneyChange = [0, 0, 0, 0, 0, 0];

    coins.forEach((coin, index) => {
        while (A - coin >= 0) {
            A -= coin;
            moneyChange[index] += 1;
        }
    });

    return moneyChange;
}

console.log(solution(4.45));