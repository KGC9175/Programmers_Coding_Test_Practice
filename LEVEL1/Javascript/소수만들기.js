function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const arr = [];
        const n = nums[i] + nums[j] + nums[k];
        for (let l = 0; l < n; l++) {
          if (!(n % (l + 1))) {
            arr.push(l + 1);
          }
        }
        if (arr.length === 2) {
          answer++;
        }
      }
    }
  }
  return answer;
}
