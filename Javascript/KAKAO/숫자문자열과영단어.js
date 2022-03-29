function solution(s) {
  let answer = '';
  let tmp = '';
  const k = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      tmp += s[i];
      if (k.includes(tmp)) {
        answer += k.indexOf(tmp);
        tmp = '';
      }
    } else {
      answer += s[i];
    }
  }

  return answer * 1;
}
