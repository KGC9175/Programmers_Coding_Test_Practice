function solution(new_id) {
  const reg = /^[a-z0-9-_.]$/;
  const tmp = new_id
    .toLowerCase()
    .split('')
    .filter((v) => reg.test(v));
  const answer = [];
  tmp.forEach((v) => {
    answer.push(v);
    if (v === '.' && answer[answer.length - 2] === v) answer.pop();
  });
  if (answer[0] === '.') answer.shift();
  if (answer[answer.length - 1] === '.') answer.pop();
  if (answer.length < 1) answer.push('a');
  if (answer.length > 15) answer.splice(15);
  if (answer[answer.length - 1] === '.') answer.pop();
  while (answer.length < 3) answer.push(answer[answer.length - 1]);
  return answer.join('');
}
