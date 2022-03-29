function solution(s) {
  let x = 0, y = 0;
  let str = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (str[i] === 'p') {
      x += 1;
    } else if (str[i] === 'y') {
      y += 1;
    }
  }

  return str.indexOf('p') === str.indexOf('y') ? true : x === y;
}