function solution(numbers) {
  let tmp = [];
  
  for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
          if (i !== j) tmp[tmp.length] = numbers[i] + numbers[j];
      }
  }
  
  let answer = tmp.filter((e, i) => {
      return tmp.indexOf(e) === i;
  });

  answer.sort((a, b) => (a - b));
  
  return answer;
}