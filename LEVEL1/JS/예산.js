function solution(d, budget) {
  var answer = 0;
  let n = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    n += d[i];
    if (n <= budget) {
      answer++;
    } else {
      break;
    }
  }

  return answer;
}