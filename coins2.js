function solution(A) {
  let change = Math.round(A * 100);
  const coins = [100, 50, 25, 10, 5, 1];
  let result = { 1: 0, 0.5: 0, 0.25: 0, 0.1: 0, 0.05: 0, 0.01: 0 };

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    while (change - coin >= 0) {
      change -= coin;
      result[coin / 100] += 1;
    }
  }


  return result;
}

console.log(solution(4.26));
