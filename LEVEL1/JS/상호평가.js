function solution(scores) {
  var answer = '';
  let avg = [];

  for (let i = 0; i < scores.length; i++) {
    let tmp = [];
    for (let j = 0; j < scores.length; j++) {
      tmp[tmp.length] = scores[j][i];
    }
    const result = tmp.reduce((add, currValue) => add + currValue);
    let countMax = tmp.filter(element => Math.max(...tmp) === element).length;
    let countMin = tmp.filter(element => Math.min(...tmp) === element).length;
    if ((Math.max(...tmp) === tmp[i] && countMax === 1) || (Math.min(...tmp) === tmp[i] && countMin === 1)) {
      avg[avg.length] = (result - tmp[i]) / (scores.length - 1);
    } else {
      avg[avg.length] = result / scores.length;
    }
  }

  for (let i = 0; i < scores.length; i++) {
    if (avg[i] >= 90) {
      answer += 'A';
    } else if (avg[i] >= 80) {
      answer += 'B';
    } else if (avg[i] >= 70) {
      answer += 'C';
    } else if (avg[i] >= 50) {
      answer += 'D';
    } else {
      answer += 'F';
    }
  }

  return answer;
}