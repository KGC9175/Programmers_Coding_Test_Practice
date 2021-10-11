function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < 10; i++) {
    if (numbers.indexOf(i) < 0) answer += i
  }
  return answer;
}