function solution(n) {
  let answer = 0;
  let k = n.toString(3);
  for (let i = 0; i < k.length; i++) {
    answer += k[i] * 3 ** i;
  }
  return answer;
}
