function solution(n) {
  let answer = 0;
  let arr = [];
  
  for (let i = 0; i < n + 1; i++) arr[i] = i;
  
  for (let j = 2; j < n + 1; j++) {
      if (arr[j] === 0) continue;
      for (let k = j * 2; k < n + 1; k += j) {
          arr[k] = 0;
      }
  }
  
  for (let i = 2; i < n + 1; i++) {
      if (arr[i] !== 0) answer += 1;
  }
  
  return answer;
}