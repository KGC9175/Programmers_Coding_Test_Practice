function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    let tmp = (arr1[i] | arr2[i]).toString(2).replace(/1/g, '#').replace(/0/g, ' ');
    if (tmp.length !== n) {
      while (n > tmp.length) {
        tmp = ' ' + tmp;
      }
    }
    answer.push(tmp);
  }
  return answer;
}
