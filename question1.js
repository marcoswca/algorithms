function solution(A) {

  if (A.length === 1) {
    return -2;
  }

  myIntegers = {};

  A = A.sort((a, b) => {
    return a - b;
  });

  for (const number of A) {
    myIntegers[number] = true;
  }

  let min = Number.MAX_SAFE_INTEGER + 1;

  for (let i = 1; i < A.length; i++) {
    let end = A[i];
    let initial = A[i - 1];
    console.log(initial, end);
    let hasBetween = false;
    if (end - initial > 0) {
      for (let j = initial + 1; j < end; j++) {
        if (myIntegers[j]) {
          hasBetween = true;
        }
      }
    }

    let tempDiff = Math.abs(A[i] - A[i - 1]);
    if (tempDiff < min && !hasBetween) {
      min = tempDiff;
    }
  }

  if (min > 100000000) {
    return -1;
  }

  return min;
}

console.log(solution([3, 7, 5, 11]));
