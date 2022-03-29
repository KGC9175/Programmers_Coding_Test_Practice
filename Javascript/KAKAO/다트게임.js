function solution(dartResult) {
  let answer = [];
  let tmp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] < 10) {
      if (dartResult[i] === 1 && dartResult[i + 1] === 0) {
        tmp = 10;
        i++;
      } else {
        tmp = dartResult[i] * 1;
      }
    } else if (dartResult[i] === 'S') {
      answer.push(tmp);
    } else if (dartResult[i] === 'D') {
      answer.push(tmp ** 2);
    } else if (dartResult[i] === 'T') {
      answer.push(tmp ** 3);
    } else if (dartResult[i] === '*') {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    } else if (dartResult[i] === '#') {
      answer[answer.length - 1] *= -1;
    }
  }
  return answer.reduce((a, c) => a + c, 0);
}
