function solution(s) {
  let answer = '';
  let arr = String(s).split(' ');

  for (let i = 0; i < arr.length; i++) {
    let lst = String(arr[i]).split('');
    let str = '';
    for (let j = 0; j < lst.length; j++) {
      (j % 2 === 0) ? str += lst[j].toUpperCase() : str += lst[j].toLowerCase();
    }
    (i === arr.length - 1) ? answer += str : answer += str + ' ';
  }

  return String(answer);
}