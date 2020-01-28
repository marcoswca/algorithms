function solution(change) {
  const coins = [1, 2, 5];
  let table = [];
  for (let j = 0; j < coins.length + 1; j++) {
    table.push(new Array(change + 1).fill(0));
  }

  for (let i = 0; i < coins.length + 1; i++) {
    table[i][0] = 1;
  }

  for (let c = 1; c < coins.length + 1; c++) {
    for (let i = 1; i < change + 1; i++) {
      if (i >= coins[c-1]) {
        table[c][i] = table[c - 1][i] + table[c][i - coins[c - 1]];
      } else {
        table[c][i] = table[c - 1][i];
      }
    }
  }

  console.log(table[coins.length][change]);
}

solution(10000000);
