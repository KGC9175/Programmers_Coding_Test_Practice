function solution(nums) {
  const arr = nums.filter((v, i) => nums.indexOf(v) === i);
  return nums.length / 2 < arr.length ? nums.length / 2 : arr.length;
}
