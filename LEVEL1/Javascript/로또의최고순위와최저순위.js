function solution(lottos, win_nums) {
  const n = lottos.filter((v) => win_nums.includes(v)).length;
  const m = lottos.filter((v) => !v).length;
  return [n + m ? 7 - (n + m) : 6, n ? 7 - n : 6];
}
