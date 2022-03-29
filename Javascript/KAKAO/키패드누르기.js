function solution(numbers, hand) {
  let answer = '';
  let leftHand = '*';
  let rightHand = '#';
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  for (let i = 0; i < numbers.length; i++) {
    if ([2, 5, 8, 0].includes(numbers[i])) {
      const tmp = [[], [], []];
      let left = 0;
      let right = 0;
      for (let j = 0; j < 4; j++) {
        for (let k = 0; k < 3; k++) {
          if (keypad[j][k] === leftHand) {
            tmp[0].push(j, k);
          }
          if (keypad[j][k] === numbers[i]) {
            tmp[1].push(j, k);
          }
          if (keypad[j][k] === rightHand) {
            tmp[2].push(j, k);
          }
        }
      }
      left += Math.abs(tmp[0][0] - tmp[1][0]) + Math.abs(tmp[0][1] - tmp[1][1]);
      right += Math.abs(tmp[1][0] - tmp[2][0]) + Math.abs(tmp[1][1] - tmp[2][1]);
      if (left === right) {
        answer += hand[0].toUpperCase();
        hand === 'left' ? (leftHand = numbers[i]) : (rightHand = numbers[i]);
      } else if (left > right) {
        answer += 'R';
        rightHand = numbers[i];
      } else {
        answer += 'L';
        leftHand = numbers[i];
      }
    } else if ([1, 4, 7].includes(numbers[i])) {
      answer += 'L';
      leftHand = numbers[i];
    } else {
      answer += 'R';
      rightHand = numbers[i];
    }
  }

  return answer;
}
