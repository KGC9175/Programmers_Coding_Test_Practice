function solution(n) {
  var answer = '';
  let str = String(n).split('');
  str.sort(function(a, b) {
      return b - a;
  });
  for (let i = 0; i < str.length; i++) {
      answer += str[i];
  }
  return Number(answer);
}