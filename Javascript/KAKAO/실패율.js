function solution(N, stages) {
  const tmp = [];
  let people = stages.length;

  for (let i = 0; i < N; i++) {
    let k = stages.filter((e) => e === i + 1).length;
    tmp.push([k / people, i + 1]);
    people -= k;
  }

  tmp.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : b[0] - a[0];
  });

  return tmp.map((e) => e[1]);
}
