function solution(s) {
  return s.length === (4 || 6) ? Number.isFinite(Array.from(s).sort()[s.length - 1] * 0) : false;
}