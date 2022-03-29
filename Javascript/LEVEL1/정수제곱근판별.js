function solution(n) {
  var answer = 0;
  let arr = [];
  
  for (let i = 0; i ** 2 < 50000000000000; i++) {
      arr.push(i ** 2);
  }

  for (let i = 0; i < arr.length; i++) {
      if (n === arr[i]) {
          answer += (i + 1) ** 2;
      }
  }
  
  return answer ? answer : -1;
}