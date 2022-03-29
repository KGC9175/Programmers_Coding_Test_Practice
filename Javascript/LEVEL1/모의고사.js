function solution(answers) {
  var answer = [];
  let tmp = [];
  let x = 0, y = 0, z = 0;

  for (let i = 0; i < answers.length; i++) {
    if (Number('12345'.repeat(2000)[i]) === answers[i % answers.length]) {
      x += 1;
    }
    if (Number('21232425'.repeat(1250)[i]) === answers[i % answers.length]) {
      y += 1;
    }
    if (Number('3311224455'.repeat(1000)[i]) === answers[i % answers.length]) {
      z += 1;
    }
  }
  answer.push(x, y, z);

  let n = Math.max(x, y, z);
  for (let i = 0; i < 3; i++) {
    if (n === answer[i]) {
      answer.push(i + 1);
    }
  }
  answer.splice(0, 3);

  return answer;
}