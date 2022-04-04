function solution(a, b) {
  var answer = 0;
  if (a === b) {
    answer += a;
  } else if (a < b) {
    while (a < b + 1) {
      answer += a;
      a++;
    }
  } else {
    while (b < a + 1) {
      answer += b;
      b++;
    }
  }

  return answer;
}