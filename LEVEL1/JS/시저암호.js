function solution(s, n) {
  var answer = '';
  let large = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let small = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < s.length; i++) {
      let k;
      if (large.includes(s[i])) {
          large.indexOf(s[i]) + n > 25 ? k = large.indexOf(s[i]) + n - 26 : k = large.indexOf(s[i]) + n;
          answer += large[k];
      } else if (small.includes(s[i])) {
          small.indexOf(s[i]) + n > 25 ? k = small.indexOf(s[i]) + n - 26 : k = small.indexOf(s[i]) + n;
          answer += small[k];
      } else {
          answer += ' ';
      }
  }
  return answer;
}