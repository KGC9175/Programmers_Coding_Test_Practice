function solution(sizes) {
  sizes.forEach((v, i) => {
    if (v[0] < v[1]) {
      sizes[i] = [v[1], v[0]];
    }
  });
  return sizes.sort((a, b) => b[0] - a[0])[0][0] * sizes.sort((a, b) => b[1] - a[1])[0][1];
}
