function solution(A) {
  let destinations = {};

  let initial = 0;
  let end = 1;
  let set = new Set(A);

  for (let i = 0; i < A.length; i++) {
    let back = A[i];
    while (end <= A.length) {
      let dest = A[end];

      destinations[dest] = true;

      if (dest === back) {
        break;
      }

      end += 1;

      if (set.size === Object.keys(destinations).length) {
        return end - i;
      }
    }
  }
}

console.log(solution([2, 1, 1, 3, 2, 1, 1, 3]));
console.log(solution([7, 5, 2, 7, 2, 7, 4, 7]));
